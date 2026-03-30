<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use Filament\Widgets\Widget;

class TextTvWidget extends Widget
{
    protected static ?int $sort = -1;

    protected static bool $isLazy = false;

    /**
     * @var view-string
     */
    protected string $view = 'filament.admin.widgets.text-tv-widget';

    public function getColumnSpan(): int|array
    {
        return [
            'default' => 'full',
        ];
    }
}
