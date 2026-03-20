<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\PostNums\Actions;

use App\Filament\Actions\PostNummerChecks\CheckDbCountsAction;
use App\Models\PostNum;
use Filament\Actions\BulkAction;
use Filament\Notifications\Notification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class CheckDbCountsBulkAction extends BulkAction
{
    public static function make(?string $name = 'checkDbCounts'): static
    {
        return parent::make($name)
            ->label('Check Counts')
            ->icon('heroicon-o-calculator')
            ->color('info')
            ->requiresConfirmation()
            ->modalHeading('Database Count Check')
            ->modalDescription('This will count records in hitta_data, ratsit_data, and merinfo_data tables for each selected post number and update the respective count columns.')
            ->modalSubmitActionLabel('Check Counts')
            ->action(function (Collection $records): void {
                Log::info('CheckDbCountsBulkAction started', ['record_count' => $records->count()]);

                // Ensure we only process PostNum records
                $records = $records->filter(fn ($record) => $record instanceof PostNum);

                $count = 0;
                $errors = [];
                foreach ($records as $record) {
                    try {
                        CheckDbCountsAction::execute($record, false);
                        $count++;
                    } catch (\Exception $e) {
                        Log::error('CheckDbCountsBulkAction error', [
                            'post_nummer' => $record->post_nummer ?? 'unknown',
                            'error' => $e->getMessage(),
                        ]);
                        $errors[] = $record->post_nummer ?? 'unknown';
                    }
                }

                if (count($errors) > 0) {
                    Notification::make()
                        ->warning()
                        ->title('Database Counts Partially Updated')
                        ->body("Processed {$count} records. Errors: ".implode(', ', $errors))
                        ->send();
                } else {
                    Notification::make()
                        ->success()
                        ->title('Database Counts Updated')
                        ->body("Successfully checked and updated database counts for {$count} post nummer(s).")
                        ->send();
                }
            })
            ->deselectRecordsAfterCompletion()
            ->closeModalByClickingAway(false);
    }
}
