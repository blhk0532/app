<?php

namespace App\Filament\Queue\Resources\SwedenPostorters\Pages;

use App\Filament\Queue\Resources\SwedenPostorters\SwedenPostorterResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewSwedenPostorter extends ViewRecord
{
    protected static string $resource = SwedenPostorterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
