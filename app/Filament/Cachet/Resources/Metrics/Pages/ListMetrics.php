<?php

namespace App\Filament\Cachet\Resources\Metrics\Pages;

use App\Filament\Cachet\Resources\Metrics\MetricResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListMetrics extends ListRecords
{
    protected static string $resource = MetricResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
