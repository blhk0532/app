<?php

declare(strict_types=1);

namespace Adultdate\Schedule\Data;

use Adultdate\Schedule\Models\Schedule;
use Carbon\CarbonInterface;

class DailyFrequencyConfig extends FrequencyConfig
{
    public static function fromArray(array $data): FrequencyConfig
    {
        return new self;
    }

    public function getNextRecurrence(CarbonInterface $current): CarbonInterface
    {
        return $current->copy()->addDay();
    }

    public function shouldCreateInstance(CarbonInterface $date): bool
    {
        return true;
    }

    public function shouldCreateRecurringInstance(Schedule $schedule, CarbonInterface $date): bool
    {
        return true;
    }
}
