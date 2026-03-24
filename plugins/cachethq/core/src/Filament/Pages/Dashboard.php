<?php

declare(strict_types=1);

namespace Cachet\Filament\Pages;

use Filament\Support\Enums\Width;

class Dashboard extends \Filament\Pages\Dashboard
{
    protected static string|\BackedEnum|null $navigationIcon = 'cachet-dashboard';

    protected static ?string $navigationLabel = 'Dashboard';

    protected static ?string $title = '';

    protected Width|string|null $maxContentWidth = Width::Full;
}
