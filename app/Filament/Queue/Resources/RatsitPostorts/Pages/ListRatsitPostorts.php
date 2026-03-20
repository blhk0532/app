<?php

namespace App\Filament\Queue\Resources\RatsitPostorts\Pages;

use App\Filament\Queue\Resources\RatsitPostorts\RatsitPostortResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListRatsitPostorts extends ListRecords
{
    protected static string $resource = RatsitPostortResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
