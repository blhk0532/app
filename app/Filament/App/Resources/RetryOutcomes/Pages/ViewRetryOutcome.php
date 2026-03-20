<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Pages;

use App\Filament\App\Resources\RetryOutcomes\RetryOutcomeResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewRetryOutcome extends ViewRecord
{
    protected static string $resource = RetryOutcomeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
