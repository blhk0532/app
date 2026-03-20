<?php

namespace App\Filament\Queue\Resources\SwedenPostorters\Pages;

use App\Filament\Queue\Resources\SwedenPostorters\SwedenPostorterResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditSwedenPostorter extends EditRecord
{
    protected static string $resource = SwedenPostorterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}
