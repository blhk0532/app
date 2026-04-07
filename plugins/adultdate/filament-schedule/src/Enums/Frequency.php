<?php

declare(strict_types=1);

namespace Adultdate\Schedule\Enums;

use Adultdate\Schedule\Data\AnnuallyFrequencyConfig;
use Adultdate\Schedule\Data\BiMonthlyFrequencyConfig;
use Adultdate\Schedule\Data\BiWeeklyFrequencyConfig;
use Adultdate\Schedule\Data\DailyFrequencyConfig;
use Adultdate\Schedule\Data\FrequencyConfig;
use Adultdate\Schedule\Data\MonthlyFrequencyConfig;
use Adultdate\Schedule\Data\QuarterlyFrequencyConfig;
use Adultdate\Schedule\Data\SemiAnnuallyFrequencyConfig;
use Adultdate\Schedule\Data\WeeklyFrequencyConfig;
use Carbon\CarbonInterface;

enum Frequency: string
{
    case DAILY = 'daily';
    case WEEKLY = 'weekly';
    case BIWEEKLY = 'biweekly';
    case MONTHLY = 'monthly';
    case BIMONTHLY = 'bimonthly';
    case QUARTERLY = 'quarterly';
    case SEMIANNUALLY = 'semiannually';
    case ANNUALLY = 'annually';

    public static function filteredByWeekday(): array
    {
        return [
            self::WEEKLY,
            self::BIWEEKLY,
        ];
    }

    public static function filteredByDaysOfMonth(): array
    {
        return [
            self::MONTHLY,
            self::BIMONTHLY,
            self::QUARTERLY,
            self::SEMIANNUALLY,
            self::ANNUALLY,
        ];
    }

    public function getNextRecurrence(CarbonInterface $current): CarbonInterface
    {
        return match ($this) {
            self::DAILY => $current->copy()->addDay(),
            self::WEEKLY => $current->copy()->addWeek(),
            self::BIWEEKLY => $current->copy()->addWeeks(2),
            self::MONTHLY => $current->copy()->addMonth(),
            self::BIMONTHLY => $current->copy()->addMonths(2),
            self::QUARTERLY => $current->copy()->addMonths(3),
            self::SEMIANNUALLY => $current->copy()->addMonths(6),
            self::ANNUALLY => $current->copy()->addYear(),
        };
    }

    /**
     * @return class-string<FrequencyConfig>
     */
    public function configClass(): string
    {
        return match ($this) {
            self::DAILY => DailyFrequencyConfig::class,
            self::WEEKLY => WeeklyFrequencyConfig::class,
            self::BIWEEKLY => BiWeeklyFrequencyConfig::class,
            self::MONTHLY => MonthlyFrequencyConfig::class,
            self::BIMONTHLY => BiMonthlyFrequencyConfig::class,
            self::QUARTERLY => QuarterlyFrequencyConfig::class,
            self::SEMIANNUALLY => SemiAnnuallyFrequencyConfig::class,
            self::ANNUALLY => AnnuallyFrequencyConfig::class,
        };
    }
}
