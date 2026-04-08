<?php

namespace App\Filament\Admin\Resources\SwedenPersoners\Pages;

use App\Filament\Admin\Resources\SwedenPersoners\SwedenPersonerResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditSwedenPersoner extends EditRecord
{
    protected static string $resource = SwedenPersonerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}
