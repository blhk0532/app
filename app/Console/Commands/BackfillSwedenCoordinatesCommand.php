<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Actions\BackfillSwedenCoordinates;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('sweden:backfill-coordinates {--table= : Limit to one Sweden table} {--chunk=250 : Chunk size for target rows}')]
#[Description('Populate missing latitude and longitude values on Sweden tables from sweden_geo and Ratsit data.')]
class BackfillSwedenCoordinatesCommand extends Command
{
    public function handle(BackfillSwedenCoordinates $backfillSwedenCoordinates): int
    {
        $table = $this->option('table');
        $chunkSize = max(1, (int) $this->option('chunk'));

        $this->info('Backfilling Sweden coordinates...');

        $stats = $backfillSwedenCoordinates->handle(
            table: is_string($table) && $table !== '' ? $table : null,
            chunkSize: $chunkSize,
        );

        if ($stats === []) {
            $this->warn('No matching Sweden tables were processed.');

            return self::FAILURE;
        }

        foreach ($stats as $tableName => $updatedRows) {
            $this->line("{$tableName}: {$updatedRows} rows updated");
        }

        $this->info('Sweden coordinate backfill completed.');

        return self::SUCCESS;
    }
}
