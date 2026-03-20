<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Pages;

use App\Filament\App\Resources\RetryOutcomes\RetryOutcomeResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditRetryOutcome extends EditRecord
{
    protected static string $resource = RetryOutcomeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
