<?php

namespace App\Filament\Admin\Resources\OutgoingSms\Pages;

use App\Filament\Admin\Resources\OutgoingSms\OutgoingSmsResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListOutgoingSms extends ListRecords
{
    protected static string $resource = OutgoingSmsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
