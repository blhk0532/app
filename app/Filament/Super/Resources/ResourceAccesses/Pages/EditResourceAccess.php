<?php

namespace App\Filament\Super\Resources\ResourceAccesses\Pages;

use App\Filament\Super\Resources\ResourceAccesses\ResourceAccessResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditResourceAccess extends EditRecord
{
    protected static string $resource = ResourceAccessResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
