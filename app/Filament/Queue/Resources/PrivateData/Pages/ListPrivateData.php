<?php

namespace App\Filament\Queue\Resources\PrivateData\Pages;

use App\Filament\Queue\Resources\PrivateData\PrivateDataResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPrivateData extends ListRecords
{
    protected static string $resource = PrivateDataResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
