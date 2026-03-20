<?php

declare(strict_types=1);

namespace App\Filament\Super\Widgets;

use Leandrocfe\FilamentApexCharts\Widgets\ApexChartWidget;

class UserTreemap extends ApexChartWidget
{
    /**
     * Chart Id
     */
    protected static ?string $chartId = 'userTreemap';

    /**
     * Widget Title
     */
    protected static ?string $heading = 'UserTreemap';

    /**
     * Chart options (series, labels, types, size, animations...)
     * https://apexcharts.com/docs/options
     */
    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'treemap',
                'height' => 300,
            ],
            'series' => [
                [
                    'data' => [
                        ['x' => 'Code', 'y' => 40],
                        ['x' => 'Test', 'y' => 20],
                        ['x' => 'Validation', 'y' => 60],
                        ['x' => 'Deployment', 'y' => 10],
                    ],
                ],
            ],
            'colors' => ['#f59e0b'],
            'legend' => [
                'show' => false,
            ],
        ];
    }
}
