<?php

namespace App\Filament\Super\Resources\ResourceAccesses\Pages;

use App\Filament\Super\Resources\ResourceAccesses\ResourceAccessResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListResourceAccesses extends ListRecords
{
    protected static string $resource = ResourceAccessResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
