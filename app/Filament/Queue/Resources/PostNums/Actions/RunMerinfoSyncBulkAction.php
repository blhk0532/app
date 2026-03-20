<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\PostNums\Actions;

use App\Jobs\RunMerinfoScript;
use Filament\Actions\BulkAction;
use Filament\Notifications\Notification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class RunMerinfoSyncBulkAction extends BulkAction
{
    public static function make(?string $name = 'runMerinfoSync'): static
    {
        return parent::make($name)
            ->label('Run Merinfo Now')
            ->icon('heroicon-o-play')
            ->color('success')
            ->requiresConfirmation()
            ->modalHeading('Run Merinfo Scraper Now')
            ->modalDescription('Run Merinfo scraper immediately (synchronously) for all selected rows.')
            ->modalSubmitActionLabel('Run Now')
            ->action(function (Collection $records): void {
                Log::info('Run Merinfo Sync bulk action triggered', ['record_count' => $records->count()]);
                $processed = 0;
                $skipped = 0;
                foreach ($records as $record) {
                    $raw = $record->post_nummer;
                    $normalized = preg_replace('/\s+/', '', $raw);
                    if (! preg_match('/^[0-9]{5}$/', $normalized)) {
                        $skipped++;

                        continue;
                    }

                    Log::info('About to run merinfo sync', ['postnummer' => $normalized]);

                    try {
                        dispatch_sync(new RunMerinfoScript($normalized, 'merinfo'));

                        $record->update([
                            'status' => 'complete',
                            'is_active' => true,
                            'merinfo_personer_queue' => true,
                            'merinfo_personer_count' => true,
                        ]);

                        $processed++;
                    } catch (\Throwable $e) {
                        Log::error('Failed running merinfo sync', ['postnummer' => $normalized, 'error' => $e->getMessage()]);
                        $skipped++;
                    }
                }
                Notification::make()
                    ->title('Merinfo Run Complete')
                    ->body("Processed {$processed} record(s). Skipped {$skipped}.")
                    ->success()
                    ->send();
            })
            ->deselectRecordsAfterCompletion()
            ->closeModalByClickingAway(false);
    }
}
