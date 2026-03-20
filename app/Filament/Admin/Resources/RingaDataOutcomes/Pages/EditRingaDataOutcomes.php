<?php

namespace App\Filament\Admin\Resources\RingaDataOutcomes\Pages;

use App\Filament\Admin\Resources\RingaDataOutcomes\RingaDataOutcomesResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditRingaDataOutcomes extends EditRecord
{
    protected static string $resource = RingaDataOutcomesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
