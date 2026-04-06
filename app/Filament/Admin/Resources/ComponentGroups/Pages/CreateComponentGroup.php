<?php

namespace App\Filament\Admin\Resources\ComponentGroups\Pages;

use App\Filament\Admin\Resources\ComponentGroups\ComponentGroupResource;
use Filament\Resources\Pages\CreateRecord;

class CreateComponentGroup extends CreateRecord
{
    protected static string $resource = ComponentGroupResource::class;
}
