<?php

namespace App\Filament\Data\Resources\PrivateData\Pages;

use App\Filament\Data\Resources\PrivateData\PrivateDataResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPrivateData extends EditRecord
{
    protected static string $resource = PrivateDataResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
