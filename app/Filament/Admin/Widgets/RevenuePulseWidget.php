<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use App\Models\Booking\Booking;
use Carbon\Carbon;
use LaravelDaily\FilaWidgets\Data\HeatmapCalendarWidgetData;
use LaravelDaily\FilaWidgets\Widgets\HeatmapCalendarWidget;

class RevenuePulseWidget extends HeatmapCalendarWidget
{
    protected ?string $widgetLabel = 'Bokningar';

    protected function getData(): HeatmapCalendarWidgetData
    {

        [$start, $end] = [Carbon::now()->subMonths(3), Carbon::now()];

        $entries = Booking::query()
            ->where('is_active', true)
            ->whereBetween('created_at', [$start, $end])
            ->selectRaw('DATE(created_at) as date, SUM(total_price) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->pluck('total', 'date')
            ->map(fn ($value): float => round((float) $value, 2))
            ->all();

        return new HeatmapCalendarWidgetData(
            entries: $entries,  // ['2026-03-20' => 500.00, ...]
            description: 'Senaste ' . $this->getWeeksToShow().' veckorna',
        );
    }

    protected function getWeeksToShow(): int
    {
        return 9;
    }
}
