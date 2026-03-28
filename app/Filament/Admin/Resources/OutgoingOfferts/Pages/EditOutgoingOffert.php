<?php

namespace App\Filament\Admin\Resources\OutgoingOfferts\Pages;

use App\Filament\Admin\Resources\OutgoingOfferts\OutgoingOffertResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditOutgoingOffert extends EditRecord
{
    protected static string $resource = OutgoingOffertResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
