<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use LaravelDaily\FilaWidgets\Data\BreakdownItemData;
use LaravelDaily\FilaWidgets\Data\BreakdownWidgetData;
use LaravelDaily\FilaWidgets\Widgets\BreakdownWidget;

class RevByRegionWidget extends BreakdownWidget
{
    protected ?string $widgetLabel = 'Revenue by Region';
    protected ?int $itemLimit = 4;
    protected bool $groupOther = true;

    protected function getData(): BreakdownWidgetData
    {
        $dateRange = DashboardDateRange::fromFilter($this->getRangeFilter());
        [$currentStart, $currentEnd] = $dateRange->currentPeriod();
        [$previousStart, $previousEnd] = $dateRange->previousPeriod();

        $currentItems = $this->totalsByCountry($currentStart, $currentEnd);
        $previousItems = $this->totalsByCountry($previousStart, $previousEnd);

        $items = $currentItems
            ->keys()
            ->merge($previousItems->keys())
            ->unique()
            ->map(fn (string $country): BreakdownItemData => new BreakdownItemData(
                label: $this->countryName($country),
                value: (float) ($currentItems[$country] ?? 0),
                previousValue: (float) ($previousItems[$country] ?? 0),
            ))
            ->sortByDesc(fn (BreakdownItemData $item): float => $item->value)
            ->values()
            ->all();

        return new BreakdownWidgetData(
            items: $items,
            description: 'Country mix for ' . strtolower($dateRange->label()),
        );
    }
}
