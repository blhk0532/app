<?php

declare(strict_types=1);

namespace App\Filament\Stats\Pages;

use BackedEnum;
use Filament\Pages\Page;

class UmamiAnalytics extends Page
{
    protected string $view = 'filament.stats.pages.umami-analytics';

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-chart-bar';

    protected static ?string $navigationLabel = 'Umami Analytics';

    protected static ?string $title = '';

    protected static ?string $slug = 'umami-analytics';
}
