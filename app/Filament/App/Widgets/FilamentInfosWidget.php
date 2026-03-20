<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use Filament\Widgets\Widget;

class FilamentInfosWidget extends Widget
{
    protected static ?int $sort = -1;

    protected static bool $isLazy = false;

    /**
     * @var view-string
     */
    protected string $view = 'filament.admin.widgets.filament-infos-widget';

    public function getColumnSpan(): int|array
    {
        return [
            'default' => 'full',
            'lg' => '1/2',
        ];
    }
}
