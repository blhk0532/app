<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use App\Enums\BookingStatus;
use App\Filament\Admin\Support\DashboardDateRange;
use App\Models\Booking;
use LaravelDaily\FilaWidgets\Widgets\CompletionRateWidget;

class FulfillmentRateWidget extends CompletionRateWidget
{
    protected ?string $widgetLabel = 'Fulfillment Rate';

    protected function getCounts(): array
    {
        $dateRange = DashboardDateRange::getDateRange(
            now()->subMonths(3)->toDateString()
        );
        $start = $dateRange->start;
        $end = $dateRange->end;

        $completed = Booking::query()
            ->where('status', BookingStatus::Booked->value)
            ->whereBetween('created_at', [$start, $end])
            ->count();

        $total = Booking::query()
            ->whereBetween('created_at', [$start, $end])
            ->count();

        return ['completed' => $completed, 'total' => $total];
    }

    protected function getThresholds(): array
    {
        return [
            ['threshold' => 50, 'color' => 'danger', 'label' => 'Critical'],
            ['threshold' => 75, 'color' => 'warning', 'label' => 'Needs attention'],
            ['threshold' => 100, 'color' => 'success', 'label' => 'Healthy'],
        ];
    }
}
