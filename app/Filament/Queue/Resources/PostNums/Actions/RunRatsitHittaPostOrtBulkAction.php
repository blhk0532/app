<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\PostNums\Actions;

use App\Jobs\RunRatsitHittaPostOrtJob;
use Filament\Actions\BulkAction;
use Filament\Notifications\Notification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;

class RunRatsitHittaPostOrtBulkAction extends BulkAction
{
    public static function make(?string $name = 'runRatsitHittaPostOrt'): static
    {
        return parent::make($name)
            ->label('Ratsit Hitta PostOrt')
            ->icon('heroicon-o-play')
            ->color('success')
            ->requiresConfirmation()
            ->modalHeading('Bulk Queue Ratsit Hitta PostOrt Search')
            ->modalDescription('This will create a job batch to run ratsit_hitta_postort.mjs script with --post-ort option for each selected post_ort. The script will process ALL post_nummer values for each post_ort and update ratsit/hitta counts in post_nums table.')
            ->modalSubmitActionLabel('Queue Batch')
            ->action(function (Collection $records): void {
                // Group records by post_ort to avoid duplicate processing
                $postOrts = $records->groupBy('post_ort')->keys()->toArray();

                // Update status for all selected records
                $records->each(function ($record) {
                    $record->update([
                        'status' => 'running',
                        'ratsit_personer_queue' => true,
                    ]);
                });

                // Create jobs for each unique post_ort
                $jobsData = [];
                foreach ($postOrts as $postOrt) {
                    // Find the first PostNum record for this post_ort to track status
                    $postNumRecord = $records->firstWhere('post_ort', $postOrt);
                    if ($postNumRecord) {
                        $jobsData[] = [
                            'job' => new RunRatsitHittaPostOrtJob($postOrt, $postNumRecord->id),
                            'postOrt' => $postOrt,
                        ];
                    }
                }

                // Get current max job ID before dispatching
                $maxJobIdBefore = DB::table('jobs')->max('id') ?? 0;

                // Extract jobs for the batch
                $jobs = array_column($jobsData, 'job');

                // Create job batch
                $batch = Bus::batch($jobs)
                    ->name('Bulk Ratsit Hitta PostOrt - '.now()->format('Y-m-d H:i:s'))
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

                // Update job names for newly created jobs
                $newJobs = DB::table('jobs')
                    ->where('queue', 'scrape')
                    ->where('id', '>', $maxJobIdBefore)
                    ->orderBy('id')
                    ->get();

                foreach ($jobsData as $index => $data) {
                    if (isset($newJobs[$index])) {
                        DB::table('jobs')
                            ->where('id', $newJobs[$index]->id)
                            ->update(['name' => "RatsitHittaPostOrt: {$data['postOrt']}"]);
                    }
                }

                Notification::make()
                    ->title('Bulk Ratsit Hitta PostOrt Started')
                    ->body("Created job batch for {$records->count()} post number(s) (".count($jobs)." unique post_ort). Batch ID: {$batch->id}. Each job will process all post_nummer values for its post_ort.")
                    ->info()
                    ->send();
            })
            ->deselectRecordsAfterCompletion()
            ->closeModalByClickingAway(false);
    }
}
