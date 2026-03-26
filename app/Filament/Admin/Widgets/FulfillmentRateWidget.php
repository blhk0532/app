<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use LaravelDaily\FilaWidgets\Widgets\CompletionRateWidget;

class FulfillmentRateWidget extends CompletionRateWidget
{
    protected ?string $widgetLabel = 'Fulfillment Rate';

    protected function getCounts(): array
    {
        $dateRange = DashboardDateRange::fromFilter($this->getRangeFilter());
        [$start, $end] = $dateRange->currentPeriod();

        $completed = Order::query()
            ->where('status', OrderStatus::Completed->value)
            ->whereBetween('created_at', [$start, $end])
            ->count();

        $total = Order::query()
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
