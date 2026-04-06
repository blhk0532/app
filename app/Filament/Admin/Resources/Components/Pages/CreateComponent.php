<?php

namespace App\Filament\Admin\Resources\Components\Pages;

use App\Filament\Admin\Resources\Components\ComponentResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Contracts\Support\Htmlable;

class CreateComponent extends CreateRecord
{
    protected static string $resource = ComponentResource::class;


    protected function getHeaderActions(): array
    {
        return [];
    }
    public function getHeading(): string|Htmlable|null
    {
        return null;
    }
    public function getBreadcrumbs(): array
    {
        return [];
    }

}
