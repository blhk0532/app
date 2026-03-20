<?php

declare(strict_types=1);

namespace App\Filament\Super\Widgets;

use Leandrocfe\FilamentApexCharts\Widgets\ApexChartWidget;

class UserRadar extends ApexChartWidget
{
    /**
     * Chart Id
     */
    protected static ?string $chartId = 'userRadar';

    /**
     * Widget Title
     */
    protected static ?string $heading = 'UserRadar';

    /**
     * Chart options (series, labels, types, size, animations...)
     * https://apexcharts.com/docs/options
     */
    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'radar',
                'height' => 300,
            ],
            'series' => [
                [
                    'name' => 'UserRadar',
                    'data' => [2, 4, 6, 10, 14],
                ],
            ],
            'xaxis' => [
                'categories' => ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                'labels' => [
                    'style' => [
                        'fontFamily' => 'inherit',
                    ],
                ],
            ],
            'yaxis' => [
                'labels' => [
                    'style' => [
                        'fontFamily' => 'inherit',
                    ],
                ],
            ],
            'colors' => ['#f59e0b'],
        ];
    }
}
