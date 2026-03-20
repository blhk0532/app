<?php

namespace App\Filament\Queue\Resources\RatsitData\Pages;

use App\Filament\Queue\Resources\RatsitData\RatsitDataResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListRatsitData extends ListRecords
{
    protected static string $resource = RatsitDataResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
