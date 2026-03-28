<?php

declare(strict_types=1);

namespace App\Exports;

use App\Models\HittaSe;
use Filament\Actions\Exports\ExportColumn;
use Filament\Actions\Exports\Exporter;
use Filament\Actions\Exports\Models\Export;

class HittaSeExporter extends Exporter
{
    protected static ?string $model = HittaSe::class;

    public static function getColumns(): array
    {
        return [
            ExportColumn::make('id')
                ->label('ID'),

        ];
    }

    public static function getCompletedNotificationBody(Export $export): string
    {
        return "HittaSe exporten är klar. {$export->total_rows} rader exposrterades.";
    }

    public static function getFailedNotificationBody(Export $export): string
    {
        return "HittaSe exporten misslyckades. {$export->total_rows} rader kunde inte exporteras.";
    }
}
