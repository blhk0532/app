<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use App\Enums\BookingStatus;
use App\Filament\Admin\Support\DashboardDateRange;
use App\Models\Booking;
use LaravelDaily\FilaWidgets\Data\HeatmapCalendarWidgetData;
use LaravelDaily\FilaWidgets\Widgets\HeatmapCalendarWidget;

class RevenueGoalWidget extends HeatmapCalendarWidget
{
    protected ?string $widgetLabel = 'Daily Revenue';

    protected function getData(): HeatmapCalendarWidgetData
    {

        $dateRange = DashboardDateRange::getDateRange(
            now()->subMonths(3)->toDateString()
        );
        $start = $dateRange->start;
        $end = $dateRange->end;

        $entries = Booking::query()
            ->where('status', BookingStatus::Booked)
            ->whereBetween('created_at', [$start, $end])
            ->selectRaw('DATE(created_at) as date, SUM(total_price) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->pluck('total', 'date')
            ->map(fn ($value): float => round((float) $value, 2))
            ->all();

        return new HeatmapCalendarWidgetData(
            entries: $entries,  // ['2026-03-20' => 500.00, ...]
            description: 'Daily revenue for ',
        );
    }

    protected function getWeeksToShow(): int
    {
        return 9;
    }
}
