<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\PostNums\Actions;

use App\Jobs\RunHittaSearchPersonsJob;
use Filament\Actions\BulkAction;
use Filament\Notifications\Notification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;

class RunHittaPersonerBulkAction extends BulkAction
{
    public static function make(?string $name = 'runHittaPersoner'): static
    {
        return parent::make($name)
            ->label('Hitta Personer')
            ->icon('heroicon-o-users')
            ->color('info')
            ->requiresConfirmation()
            ->modalHeading('Bulk Queue Hitta Personer Search')
            ->modalDescription('This will create a job batch to run hittaSearchPersons.mjs script for all selected post numbers. Each search will scrape person data from Hitta.se and may take several minutes per post number.')
            ->modalSubmitActionLabel('Queue Batch')
            ->action(function (Collection $records): void {
                // Update status for all selected records
                $records->each(function ($record) {
                    $record->update(['status' => 'running', 'hitta_personer_queue' => true]);
                });

                // Create jobs for each record
                $jobs = $records->map(function ($record) {
                    return new RunHittaSearchPersonsJob($record->id, false); // false = no ratsit
                })->toArray();

                // Create job batch
                $batch = Bus::batch($jobs)
                    ->name('Bulk Hitta Personer - '.now()->format('Y-m-d H:i:s'))
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

                // Note: avoid direct `jobs` table manipulation — batch metadata is used instead.

                Notification::make()
                    ->title('Bulk Hitta Personer Started')
                    ->body("Created job batch with {$records->count()} Hitta personer searches. Batch ID: {$batch->id}")
                    ->info()
                    ->send();
            })
            ->deselectRecordsAfterCompletion()
            ->closeModalByClickingAway(false);
    }
}
