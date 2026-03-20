<?php

declare(strict_types=1);

namespace App\Filament\Super\Resources\PanelAccesses\Pages;

use App\Filament\Super\Resources\PanelAccesses\PanelAccessResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePanelAccess extends CreateRecord
{
    protected static string $resource = PanelAccessResource::class;
}
