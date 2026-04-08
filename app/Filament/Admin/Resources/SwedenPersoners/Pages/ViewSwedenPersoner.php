<?php

namespace App\Filament\Admin\Resources\SwedenPersoners\Pages;

use App\Filament\Admin\Resources\SwedenPersoners\SwedenPersonerResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewSwedenPersoner extends ViewRecord
{
    protected static string $resource = SwedenPersonerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
