<?php

declare(strict_types=1);

namespace App\Filament\Admin\Support;

use Carbon\Carbon;

class DashboardDateRange
{
    public function __construct(
        public Carbon $start,
        public Carbon $end,
    ) {}

    public static function getDateRange(?string $startDate = null, ?string $endDate = null): self
    {
        if ($startDate && $endDate) {
            $start = Carbon::parse($startDate);
            $end = Carbon::parse($endDate);
        } else {
            $start = Carbon::now()->subMonths(3);
            $end = Carbon::now();
        }

        return new self($start, $end);
    }

    public static function fromFilter($filter): self
    {
        // For now, ignore the filter and return the last 3 months
        return self::getDateRange();
    }

    public static function fromArray(array $dates): self
    {
        if (isset($dates[0]) && isset($dates[1])) {
            return self::getDateRange(
                $dates[0] instanceof Carbon ? $dates[0]->toDateString() : $dates[0],
                $dates[1] instanceof Carbon ? $dates[1]->toDateString() : $dates[1]
            );
        }

        return self::getDateRange();
    }

    public function toArray(): array
    {
        return [$this->start, $this->end];
    }

    public function __destructure(): array
    {
        return [$this->start, $this->end];
    }

    public function currentPeriod(): self
    {
        return $this;
    }
}
