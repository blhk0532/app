<?php

namespace App\Filament\Admin\Resources\OutgoingConfirmations\Pages;

use App\Filament\Admin\Resources\OutgoingConfirmations\OutgoingConfirmationResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditOutgoingConfirmation extends EditRecord
{
    protected static string $resource = OutgoingConfirmationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
