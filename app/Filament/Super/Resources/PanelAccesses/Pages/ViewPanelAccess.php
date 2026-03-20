<?php

declare(strict_types=1);

namespace App\Filament\Super\Resources\PanelAccesses\Pages;

use App\Filament\Super\Resources\PanelAccesses\PanelAccessResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewPanelAccess extends ViewRecord
{
    protected static string $resource = PanelAccessResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
