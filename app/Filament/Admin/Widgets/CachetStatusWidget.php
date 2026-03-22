<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use Filament\Widgets\Widget;

class CachetStatusWidget extends Widget
{
    protected static ?int $sort = 1;

    protected static bool $isLazy = false;

    protected static ?string $heading = '';

    /**
     * @var view-string
     */
    protected string $view = 'filament.admin.widgets.cachet-status-widget';

    public function getColumnSpan(): int|string|array
    {
        return 'full';
    }

    public function title()
    {

        return '';
    }
}
