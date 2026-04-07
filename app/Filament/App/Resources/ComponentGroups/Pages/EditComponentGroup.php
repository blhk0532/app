<?php

namespace App\Filament\App\Resources\ComponentGroups\Pages;

use App\Filament\App\Resources\ComponentGroups\ComponentGroupResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditComponentGroup extends EditRecord
{
    protected static string $resource = ComponentGroupResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
