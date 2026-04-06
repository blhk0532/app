<?php

namespace App\Filament\Cachet\Resources\Metrics\Pages;

use App\Filament\Cachet\Resources\Metrics\MetricResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditMetric extends EditRecord
{
    protected static string $resource = MetricResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
