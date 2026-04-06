<?php

namespace App\Filament\Cachet\Resources\Schedules\Pages;

use App\Filament\Cachet\Resources\Schedules\ScheduleResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Contracts\Support\Htmlable;


class CreateSchedule extends CreateRecord
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
}
