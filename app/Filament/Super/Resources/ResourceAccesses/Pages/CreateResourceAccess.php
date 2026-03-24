<?php

namespace App\Filament\Super\Resources\ResourceAccesses\Pages;

use App\Filament\Super\Resources\ResourceAccesses\ResourceAccessResource;
use Filament\Resources\Pages\CreateRecord;

class CreateResourceAccess extends CreateRecord
{
    protected static string $resource = ResourceAccessResource::class;
}
