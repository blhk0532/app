<?php

namespace App\Filament\Queue\Resources\SwedenKommuners\Pages;

use App\Filament\Queue\Resources\SwedenKommuners\SwedenKommunerResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewSwedenKommuner extends ViewRecord
{
    protected static string $resource = SwedenKommunerResource::class;

    protected static ?string $title = 'View Kommun';

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
