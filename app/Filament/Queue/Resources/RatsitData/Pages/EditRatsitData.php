<?php

namespace App\Filament\Queue\Resources\RatsitData\Pages;

use App\Filament\Queue\Resources\RatsitData\RatsitDataResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditRatsitData extends EditRecord
{
    protected static string $resource = RatsitDataResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
