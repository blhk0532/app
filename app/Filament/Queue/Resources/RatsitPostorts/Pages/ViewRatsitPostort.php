<?php

namespace App\Filament\Queue\Resources\RatsitPostorts\Pages;

use App\Filament\Queue\Resources\RatsitPostorts\RatsitPostortResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewRatsitPostort extends ViewRecord
{
    protected static string $resource = RatsitPostortResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
