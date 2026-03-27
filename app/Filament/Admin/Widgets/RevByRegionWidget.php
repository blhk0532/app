<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use App\Enums\BookingStatus;
use App\Filament\Admin\Support\DashboardDateRange;
use App\Models\Booking;
use Carbon\Carbon;
use Illuminate\Support\Collection;
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
        $start = Carbon::now()->subMonths(3);
        $end = Carbon::now();
        $dateRange = DashboardDateRange::getDateRange($start->toDateString(), $end->toDateString());
        $currentStart = $dateRange->start;
        $currentEnd = $dateRange->end;
        $previousStart = $dateRange->start;
        $previousEnd = $dateRange->end;

        $currentItems = $this->getBookingsByRegion($currentStart, $currentEnd);
        $previousItems = $this->getBookingsByRegion($previousStart, $previousEnd);

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
            description: 'Country mix for '.strtolower('ok'),
        );
    }

    private function getBookingsByRegion(Carbon $start, Carbon $end): Collection
    {
        return Booking::query()
            ->whereBetween('created_at', [$start, $end])
            ->where('status', BookingStatus::Booked->value)
            ->selectRaw('service_user_id, SUM(total_price) as total')
            ->groupBy('service_user_id')
            ->pluck('total', 'service_user_id');
    }

    private function countryName(string $countryCode): string
    {
        return $countryCode;
    }
}
