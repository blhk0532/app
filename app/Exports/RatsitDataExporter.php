<?php

declare(strict_types=1);

namespace App\Exports;

use App\Models\RatsitData;
use Filament\Actions\Exports\ExportColumn;
use Filament\Actions\Exports\Exporter;
use Filament\Actions\Exports\Models\Export;

class RatsitDataExporter extends Exporter
{
    protected static ?string $model = RatsitData::class;

    public static function getColumns(): array
    {
        return [
            ExportColumn::make('id')
                ->label('ID'),

        ];
    }

    public static function getCompletedNotificationBody(Export $export): string
    {
        return "RatsitData exporten är klar. {$export->total_rows} rader exporterades.";
    }

    public static function getFailedNotificationBody(Export $export): string
    {
        return "RatsitData exporten misslyckades. {$export->total_rows} rader kunde inte exporteras.";
    }
}
