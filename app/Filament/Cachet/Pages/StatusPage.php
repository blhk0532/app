<?php

declare(strict_types=1);

namespace App\Filament\Cachet\Pages;

use App\Filament\Cachet\Widgets\StatusAboutWidget;
use App\Filament\Cachet\Widgets\StatusAnnouncementWidget;
use App\Filament\Cachet\Widgets\StatusBarWidget;
use App\Filament\Cachet\Widgets\StatusComponentsWidget;
use App\Filament\Cachet\Widgets\StatusGroupsWidget;
use App\Filament\Cachet\Widgets\StatusScheduleWidget;
use App\Filament\Cachet\Widgets\StatusTimelineWidget;
use Filament\Pages\Page;

class StatusPage extends Page
{
    protected static string|\BackedEnum|null $navigationIcon = 'cachet-component-performance-issues';

    protected static ?string $slug = 'status-page';

    protected static bool $shouldRegisterNavigation = false;

    protected string $view = 'cachet::filament.pages.status';

    protected static ?string $title = '';

    protected function getHeaderWidgets(): array
    {
        return [
            StatusBarWidget::class,
            StatusAnnouncementWidget::class,
            StatusAboutWidget::class,
            StatusGroupsWidget::class,
            StatusComponentsWidget::class,
            StatusScheduleWidget::class,
            StatusTimelineWidget::class,
        ];
    }

    public function getHeaderWidgetsColumns(): int|array
    {
        return 1;
    }

    public static function getNavigationLabel(): string
    {
        return __('Status Page');
    }

    public static function getNavigationGroup(): ?string
    {
        return __('cachet::navigation.resources.label');
    }

    public function getTitle(): string
    {
        return __('');
    }
}
