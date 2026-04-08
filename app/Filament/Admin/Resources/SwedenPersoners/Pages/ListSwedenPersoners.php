<?php

namespace App\Filament\Admin\Resources\SwedenPersoners\Pages;

use App\Filament\Admin\Resources\SwedenPersoners\SwedenPersonerResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListSwedenPersoners extends ListRecords
{
    protected static string $resource = SwedenPersonerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
