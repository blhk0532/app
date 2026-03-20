<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Contacts\Pages;

use App\Filament\App\Resources\Contacts\ContactResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use UnitEnum;

class ListContacts extends ListRecords
{
    protected static string $resource = ContactResource::class;

    protected static ?string $title = 'Kontakter';

    protected static UnitEnum|string|null $navigationGroup = '';

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
