<?php

declare(strict_types=1);

namespace App\Filament\Admin\Pages;

use App\Filament\Admin\Widgets\AccountInfoStackWidget;
use App\Filament\Admin\Widgets\WorldClockWidget;
use Illuminate\Contracts\Support\Htmlable;
use MDDev\DynamicDashboard\Pages\DynamicDashboard;
use Shreejan\DashArrange\Traits\HasDashArrange;

class Dashboard extends DynamicDashboard
{
    use HasDashArrange;

    protected string $view = 'dash-arrange::dashboard';

    public static function getNavigationLabel(): string
    {
        return 'Administration';
    }

    public static function getNavigationBadge(): ?string
    {
        return now()->timezone('Asia/Bangkok')->format('H:i');
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'white';
    }

    public static function getNavigationIcon(): ?string
    {
        return 'heroicon-o-shield-check';
    }

    public function mount(): void
    {
        // Initialize DashArrange functionality
        $this->mountHasDashArrange();
    }

    public function getTitle(): string|Htmlable
    {
        return '';
    }

    public function getWidgets(): array
    {
        return [

        ];
    }

    public function getHeaderWidgets(): array
    {

        return [
            AccountInfoStackWidget::class,
            WorldClockWidget::class,
        ];
    }
}
