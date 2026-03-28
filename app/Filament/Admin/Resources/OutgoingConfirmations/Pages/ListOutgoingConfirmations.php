<?php

namespace App\Filament\Admin\Resources\OutgoingConfirmations\Pages;

use App\Filament\Admin\Resources\OutgoingConfirmations\OutgoingConfirmationResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListOutgoingConfirmations extends ListRecords
{
    protected static string $resource = OutgoingConfirmationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
