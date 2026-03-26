<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use LaravelDaily\FilaWidgets\Data\HeatmapCalendarWidgetData;
use LaravelDaily\FilaWidgets\Widgets\HeatmapCalendarWidget;

class RevenuePulseWidget extends HeatmapCalendarWidget
{
    protected ?string $widgetLabel = 'Daily Revenue';

    protected function getData(): HeatmapCalendarWidgetData
    {
        $dateRange = DashboardDateRange::fromFilter($this->getRangeFilter());
        [$start, $end] = $dateRange->currentPeriod();

        $entries = Order::query()
            ->where('status', OrderStatus::Completed)
            ->whereBetween('created_at', [$start, $end])
            ->selectRaw('DATE(created_at) as date, SUM(amount) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->pluck('total', 'date')
            ->map(fn ($value): float => round((float) $value, 2))
            ->all();

        return new HeatmapCalendarWidgetData(
            entries: $entries,  // ['2026-03-20' => 500.00, ...]
            description: 'Daily revenue for '.strtolower($dateRange->label()),
        );
    }

    protected function getWeeksToShow(): int
    {
        return 9;
    }
}
