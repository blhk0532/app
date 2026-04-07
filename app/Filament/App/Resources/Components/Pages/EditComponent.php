<?php

namespace App\Filament\App\Resources\Components\Pages;

use App\Filament\App\Resources\Components\ComponentResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Contracts\Support\Htmlable;

class EditComponent extends EditRecord
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
