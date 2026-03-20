<?php

declare(strict_types=1);

namespace App\Filament\Super\Widgets;

use Leandrocfe\FilamentApexCharts\Widgets\ApexChartWidget;

class UserRadialbar extends ApexChartWidget
{
    /**
     * Chart Id
     */
    protected static ?string $chartId = 'userRadialbar';

    /**
     * Widget Title
     */
    protected static ?string $heading = 'UserRadialbar';

    /**
     * Chart options (series, labels, types, size, animations...)
     * https://apexcharts.com/docs/options
     */
    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'radialBar',
                'height' => 300,
            ],
            'series' => [75],
            'plotOptions' => [
                'radialBar' => [
                    'hollow' => [
                        'size' => '70%',
                    ],
                    'dataLabels' => [
                        'show' => true,
                        'name' => [
                            'show' => true,
                            'fontFamily' => 'inherit',
                        ],
                        'value' => [
                            'show' => true,
                            'fontFamily' => 'inherit',
                            'fontWeight' => 600,
                            'fontSize' => '20px',
                        ],
                    ],

                ],
            ],
            'stroke' => [
                'lineCap' => 'round',
            ],
            'labels' => ['UserRadialbar'],
            'colors' => ['#f59e0b'],
        ];
    }
}
