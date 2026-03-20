<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\RatsitDatas\Pages;

use App\Filament\Queue\Resources\RatsitDatas\RatsitDataResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditRatsitData extends EditRecord
{
    protected static string $resource = RatsitDataResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
