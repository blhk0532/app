<?php

namespace App\Filament\Admin\Resources\OutgoingEmails\Pages;

use App\Filament\Admin\Resources\OutgoingEmails\OutgoingEmailResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListOutgoingEmails extends ListRecords
{
    protected static string $resource = OutgoingEmailResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
