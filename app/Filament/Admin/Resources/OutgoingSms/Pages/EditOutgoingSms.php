<?php

namespace App\Filament\Admin\Resources\OutgoingSms\Pages;

use App\Filament\Admin\Resources\OutgoingSms\OutgoingSmsResource;
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
