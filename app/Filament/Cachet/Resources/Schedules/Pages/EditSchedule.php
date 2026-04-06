<?php

namespace App\Filament\Cachet\Resources\Schedules\Pages;

use App\Filament\Cachet\Resources\Schedules\ScheduleResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Contracts\Support\Htmlable;

class EditSchedule extends EditRecord
{
    protected static string $resource = ScheduleResource::class;

protected function getHeaderActions(): array
    {
        return [];
    }
    public function getHeading(): string|Htmlable|null
    {
        return null;
    }
    public function getBreadcrumbs(): array
    {
        return [];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $data['completed_at'] = $data['completed_at'] ?? null;

        return $data;
    }
}
