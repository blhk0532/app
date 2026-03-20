<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\RatsitStreets\Pages;

use App\Filament\Queue\Resources\RatsitStreets\RatsitStreetResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewRatsitStreet extends ViewRecord
{
    protected static string $resource = RatsitStreetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
