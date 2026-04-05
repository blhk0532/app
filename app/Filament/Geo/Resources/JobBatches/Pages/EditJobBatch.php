<?php

declare(strict_types=1);

namespace App\Filament\Geo\Resources\JobBatches\Pages;

use App\Filament\Geo\Resources\JobBatches\JobBatchResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditJobBatch extends EditRecord
{
    protected static string $resource = JobBatchResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}
