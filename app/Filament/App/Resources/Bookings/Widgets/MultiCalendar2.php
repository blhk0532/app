<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Bookings\Widgets;

use App\Filament\App\Clusters\Services\Resources\Bookings\Widgets\MultiCalendar2 as BaseMultiCalendar2;
use App\Models\BookingCalendar;

class MultiCalendar2 extends BaseMultiCalendar2
{
    public function getHeading(): string
    {
        $calendarName = $this->selectedTechnician ? BookingCalendar::find($this->selectedTechnician)?->name : 'All Tekniker';

        return '#2 ◴ '.$calendarName;
    }
}
