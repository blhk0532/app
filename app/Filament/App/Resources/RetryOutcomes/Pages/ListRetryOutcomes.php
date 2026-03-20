<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Pages;

use App\Filament\App\Resources\RetryOutcomes\RetryOutcomeResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class ListRetryOutcomes extends ListRecords
{
    protected static string $resource = RetryOutcomeResource::class;

    protected static ?string $title = 'Väntande';

    protected static UnitEnum|string|null $navigationGroup = '';

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    protected function getTableQuery(): ?Builder
    {
        return RetryOutcomeResource::getEloquentQuery()
            ->where('user_id', auth()->id())
            ->orderByDesc('created_at');
    }
}
