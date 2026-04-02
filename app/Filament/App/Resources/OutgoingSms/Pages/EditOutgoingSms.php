<?php

namespace App\Filament\App\Resources\OutgoingSms\Pages;

use App\Filament\App\Resources\OutgoingSms\OutgoingSmsResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditOutgoingSms extends EditRecord
{
    protected static string $resource = OutgoingSmsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
