<?php

namespace App\Filament\Queue\Resources\RatsitPostorts\Pages;

use App\Filament\Queue\Resources\RatsitPostorts\RatsitPostortResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditRatsitPostort extends EditRecord
{
    protected static string $resource = RatsitPostortResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}
