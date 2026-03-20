<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\PostNums\Actions;

use App\Jobs\RunHittaCheckCountsJob;
use App\Jobs\RunMerinfoScript;
use App\Jobs\RunRatsitCheckCountsJob;
use Filament\Actions\BulkAction;
use Filament\Notifications\Notification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;
use Log;

class RunAllCountsBulkAction extends BulkAction
{
    public static function make(?string $name = 'runAllCounts'): static
    {
        return parent::make($name)
            ->label('H R M Counts')
            ->icon('heroicon-o-queue-list')
            ->color('success')
            ->requiresConfirmation()
            ->modalHeading('Run Both Hitta & Ratsit and Merinfo Counts')
            ->modalDescription('This will run count checks for both Hitta and Ratsit for the selected postal codes. This may take some time depending on the number of records.')
            ->modalSubmitActionLabel('Start Checks')
            ->action(function (Collection $records): void {
                // Update status for all selected records
                $records->each(function ($record) {
                    $record->update(['status' => 'running']);
                });

                // Create jobs for both hitta and ratsit counts
                $queued = 0;
                $skipped = 0;
                $jobs = [];
                foreach ($records as $record) {
                    $jobs[] = new RunHittaCheckCountsJob($record->post_nummer);
                    $jobs[] = new RunRatsitCheckCountsJob($record->post_nummer);

                    DB::table('post_nums')
                        ->where('post_nummer', $record->post_nummer)
                        ->update(['merinfo_personer_count' => 1]);

                    $raw = $record->post_nummer;
                    $normalized = preg_replace('/\s+/', '', $raw);
                    if (! preg_match('/^[0-9]{5}$/', $normalized)) {
                        $skipped++;

                        continue; // skip invalid formats
                    }
                    // Check existing batch by name
                    $existing = \DB::table('job_batches')->where('name', $normalized)->first();
                    if ($existing && ! $existing->finished_at && ! $existing->cancelled_at && (int) $existing->pending_jobs > 0) {
                        $skipped++;

                        continue; // active batch exists
                    }

                    Log::info('About to dispatch merinfo-count batch', ['postnummer' => $normalized]);

                    $batch = Bus::batch([
                        new RunMerinfoScript($normalized, 'merinfo'),
                    ])->name($normalized)
                        ->onQueue('scrape')
                        ->then(function ($batch) {
                            // Update batch status to complete when all jobs finish
                            \DB::table('job_batches')
                                ->where('id', $batch->id)
                                ->update(['status' => 'complete']);
                        })
                        ->dispatch();

                    // Set batch status to pending
                    \DB::table('job_batches')
                        ->where('id', $batch->id)
                        ->update(['status' => 'pending']);

                    // Note: avoid direct manipulation of `jobs` table; rely on batch metadata.

                    // Update record status
                    $record->update([
                        'status' => 'queued_merinfo_count',
                        'is_active' => true,
                    ]);

                    $queued++;

                }

                // Create a batch with both types of jobs
                $batch = Bus::batch($jobs)
                    ->name(str_replace(' ', '', $records->first()->post_nummer).' - 🖩H&R '.now()->format('Y-m-d H:i:s'))
                    ->onQueue('scrape')
                    ->then(function ($batch) {
                        // Update batch status to complete when all jobs finish
                        DB::table('job_batches')
                            ->where('id', $batch->id)
                            ->update(['status' => 'complete']);
                    })
                    ->dispatch();

                // Set batch status to pending
                DB::table('job_batches')
                    ->where('id', $batch->id)
                    ->update(['status' => 'pending']);

                // Note: avoid updating `jobs` table directly; rely on batch metadata instead.

                Notification::make()
                    ->title('Both Count Checks Started')
                    ->body('Created job batch with '.($records->count() * 2)." jobs ({$records->count()} postal codes × 2 sources). Batch ID: {$batch->id}")
                    ->info()
                    ->send();
            })
            ->deselectRecordsAfterCompletion()
            ->closeModalByClickingAway(false);
    }
}
