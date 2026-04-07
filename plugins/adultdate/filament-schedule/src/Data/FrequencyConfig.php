<?php

declare(strict_types=1);

namespace Adultdate\Schedule\Data;

use Adultdate\Schedule\Models\Schedule;
use Carbon\CarbonInterface;
use Illuminate\Contracts\Support\Arrayable;

abstract class FrequencyConfig implements Arrayable
{
    abstract public static function fromArray(array $data): self;

    abstract public function getNextRecurrence(CarbonInterface $current): CarbonInterface;

    abstract public function shouldCreateInstance(CarbonInterface $date): bool;

    abstract public function shouldCreateRecurringInstance(Schedule $schedule, CarbonInterface $date): bool;

    final public function setStartFromStartDate(CarbonInterface $startDate): self
    {
        return $this;
    }

    final public function toArray(): array
    {
        return get_object_vars($this);
    }
}
