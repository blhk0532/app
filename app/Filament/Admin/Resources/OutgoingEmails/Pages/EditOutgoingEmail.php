<?php

namespace App\Filament\Admin\Resources\OutgoingEmails\Pages;

use App\Filament\Admin\Resources\OutgoingEmails\OutgoingEmailResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditOutgoingEmail extends EditRecord
{
    protected static string $resource = OutgoingEmailResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
