<?php

namespace App\Filament\Admin\Resources\OutgoingOfferts\Pages;

use App\Filament\Admin\Resources\OutgoingOfferts\OutgoingOffertResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListOutgoingOfferts extends ListRecords
{
    protected static string $resource = OutgoingOffertResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
