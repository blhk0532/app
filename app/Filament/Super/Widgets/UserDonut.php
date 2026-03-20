<?php

declare(strict_types=1);

namespace App\Filament\Super\Widgets;

use Leandrocfe\FilamentApexCharts\Widgets\ApexChartWidget;

class UserDonut extends ApexChartWidget
{
    /**
     * Chart Id
     */
    protected static ?string $chartId = 'userDonut';

    /**
     * Widget Title
     */
    protected static ?string $heading = 'UserDonut';

    /**
     * Chart options (series, labels, types, size, animations...)
     * https://apexcharts.com/docs/options
     */
    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'donut',
                'height' => 300,
            ],
            'series' => [2, 4, 6, 10, 14],
            'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            'legend' => [
                'labels' => [
                    'fontFamily' => 'inherit',
                ],
            ],
        ];
    }
}
