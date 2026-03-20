<?php

declare(strict_types=1);

namespace App\Filament\Pages;

use Filament\Pages\Dashboard as BaseDashboard;
use Illuminate\Contracts\Support\Htmlable;
use Shreejan\DashArrange\Traits\HasDashArrange;

class Dashboard extends BaseDashboard
{
    use HasDashArrange;

    protected string $view = 'dash-arrange::dashboard';

    public function mount(): void
    {
        // Initialize DashArrange functionality
        $this->mountHasDashArrange();
    }

    public function getTitle(): string|Htmlable
    {
        return '';
    }
}
