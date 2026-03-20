<?php

declare(strict_types=1);

namespace App\Filament\Data\Resources\PostNums\Actions;

use App\Jobs\RunMerinfoScript;
use DB;
use Filament\Actions\BulkAction;
use Filament\Notifications\Notification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Schema;
use Log;

class QueueMerinfoBulkAction extends BulkAction
{
    public static function make(?string $name = 'queueMerinfo'): static
    {
        return parent::make($name)
            ->label('Queue Merinfo')
            ->icon('heroicon-o-building-office')
            ->color('secondary')
            ->requiresConfirmation()
            ->modalHeading('Queue Merinfo Scraper')
            ->modalDescription('Create Merinfo batches (one per postnummer) on the merinfo queue for all selected rows. Existing active batches with the same postnummer will be skipped.')
            ->modalSubmitActionLabel('Queue Merinfo')
            ->action(function (Collection $records): void {
                Log::info('Queue Merinfo bulk action triggered', ['record_count' => $records->count()]);
                $queued = 0;
                $skipped = 0;
                foreach ($records as $record) {
                    $raw = $record->post_nummer;
                    $normalized = preg_replace('/\s+/', '', $raw);
                    if (! preg_match('/^[0-9]{5}$/', $normalized)) {
                        $skipped++;

                        continue; // skip invalid formats
                    }
                    // Check existing batch by name
                    $existing = DB::table('job_batches')->where('name', $normalized)->first();
                    if ($existing && ! $existing->finished_at && ! $existing->cancelled_at && (int) $existing->pending_jobs > 0) {
                        $skipped++;

                        continue; // active batch exists
                    }

                    Log::info('About to dispatch merinfo batch', ['postnummer' => $normalized]);

                    $batch = Bus::batch([
                        new RunMerinfoScript($normalized, 'merinfo'),
                    ])->name($normalized)
                        ->onQueue('scrape')
                        ->then(function ($batch) {
                            // Update batch status to complete when all jobs finish, if column exists
                            try {
                                if (Schema::hasColumn('job_batches', 'status')) {
                                    DB::table('job_batches')
                                        ->where('id', $batch->id)
                                        ->update(['status' => 'complete']);
                                } else {
                                    Log::warning('job_batches.status column missing; skipping status update (complete).', ['batch_id' => $batch->id]);
                                }
                            } catch (\Throwable $e) {
                                Log::error('Failed updating job_batches status to complete', ['batch_id' => $batch->id, 'error' => $e->getMessage()]);
                            }
                        })
                        ->dispatch();

                    // Set batch status to pending (if column exists)
                    try {
                        if (Schema::hasColumn('job_batches', 'status')) {
                            DB::table('job_batches')
                                ->where('id', $batch->id)
                                ->update(['status' => 'pending']);
                        } else {
                            Log::warning('job_batches.status column missing; skipping status update (pending).', ['batch_id' => $batch->id]);
                        }
                    } catch (\Throwable $e) {
                        Log::error('Failed updating job_batches status to pending', ['batch_id' => $batch->id, 'error' => $e->getMessage()]);
                    }

                    // Note: we avoid trying to update the DB `jobs` table directly
                    // because different queue drivers and id formats make this fragile.

                    // Update record status
                    $record->update([
                        'status' => 'queued_merinfo',
                        'is_active' => true,
                    ]);

                    $queued++;
                }
                Notification::make()
                    ->title('Merinfo Queue')
                    ->body("Queued {$queued} batch(es). Skipped {$skipped} (invalid or already active). Start a merinfo queue worker to process.")
                    ->success()
                    ->send();
            })
            ->deselectRecordsAfterCompletion()
            ->closeModalByClickingAway(false);
    }
}
