<?php

declare(strict_types=1);

namespace App\Filament\Data\Resources\PostNums\Actions;

use App\Console\Commands\RunRatsitHittaCommand;
use Filament\Actions\BulkAction;
use Filament\Notifications\Notification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;

class RunRatsitHittaBulkAction extends BulkAction
{
    public static function make(?string $name = 'runRatsitHitta'): static
    {
        return parent::make($name)
            ->label('Ratsit Hitta')
            ->icon('heroicon-o-calculator')
            ->requiresConfirmation()
            ->modalHeading('Bulk Queue Ratsit.se Hitta Checks')
            ->modalDescription('This will create a job batch to run ratsit_hitta.mjs script for all selected post numbers to get Personer and Företag counts from Ratsit.se and update the database.')
            ->modalSubmitActionLabel('Queue Batch')
            ->action(function (Collection $records): void {
                // Update status for all selected records
                $records->each(function ($record) {
                    $record->update(['status' => 'running']);
                });

                // Create jobs for each record
                $jobs = $records->map(function ($record) {
                    return new RunRatsitHittaCommand($record->post_nummer);
                })->toArray();

                // Create job batch
                $batch = Bus::batch($jobs)
                    ->name('Bulk Ratsit Hitta - '.now()->format('Y-m-d H:i:s'))
                    ->onQueue('default')
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

                // Note: we intentionally avoid manipulating the `jobs` table directly
                // because queue drivers and job id formats may vary (numeric vs UUID).
                // The batch is created and its `job_batches` entry is updated above.

                Notification::make()
                    ->title('Bulk Ratsit.se Hitta Started')
                    ->body("Created job batch with {$records->count()} Ratsit.se Hitta checks. Batch ID: {$batch->id}. The jobs will run in the background. Refresh the page after a few minutes to see the updated counts.")
                    ->info()
                    ->send();
            })
            ->deselectRecordsAfterCompletion()
            ->closeModalByClickingAway(false);
    }
}
