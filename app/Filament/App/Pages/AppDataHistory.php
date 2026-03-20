<?php

declare(strict_types=1);

namespace App\Filament\App\Pages;

use App\Filament\Admin\Widgets\AccountInfoStackWidget;
use App\Filament\Admin\Widgets\WorldClockWidget;
use App\Filament\App\Clusters\Services\Resources\Bookings\Widgets\BookingCalendar;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataTableWidget;
use App\Filament\App\Widgets\CustomersChart;
use App\Filament\App\Widgets\OrdersChart;
use App\Filament\App\Widgets\StatsOverviewWidget;
use App\Models\RingaData;
use BackedEnum;
use Filament\Pages\Page;
use Wallacemartinss\FilamentIconPicker\Enums\Tabler;

class AppDataHistory extends Page
{
    protected static ?string $title = 'Historik';

    protected static ?string $slug = 'data-history';

    protected string $view = 'filament.app.pages.data-history';

    protected static ?int $navigationSort = 4;

    protected static ?int $sort = 4;

    protected static string|BackedEnum|null $navigationIcon = Tabler::PhoneRinging;

    // Prevent this app-level Dashboard from being auto-discovered so that
    // the explicit `AdminDashboard` can be registered as the admin panel root.
    protected static bool $isDiscovered = false;

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    public static function getNavigationGroup(): ?string
    {
        return auth()->user()->name ? auth()->user()->name : 'Mina Sidor';
    }

    public static function getNavigationLabel(): string
    {
        return 'Historik';
    }

    public static function getNavigationBadge(): ?string
    {
        $userId = auth()->id();

        if (! $userId) {
            return null;
        }

        $count = RingaData::where(function ($query) use ($userId) {
            $query->where('user_id', (string) $userId)
                ->orWhereRaw('FIND_IN_SET(?, user_id)', [$userId]);
        })
            ->whereNotNull('outcome')
            ->count();

        return $count > 0 ? (string) $count : null;
    }
    //   public static function getNavigationBadgeColor(): ?string
    //   {
    //       return 'success';
    //   }

    //   public static function getNavigationIcon(): ?string
    //   {
    //       return 'heroicon-o-list-bullet';
    //   }

    public static function getNavigationSort(): ?int
    {
        return 4;
    }

    public static function getSort(): ?int
    {
        return 4;
    }

    public function getColumns(): int
    {
        // Use fewer columns so widgets are wider and not visually compressed.
        return 2;
    }

    public function getWidgets(): array
    {
        return [
            RingaDataTableWidget::class,
            BookingCalendar::class,
            StatsOverviewWidget::class,
            OrdersChart::class,
            CustomersChart::class,
            //     \App\Filament\App\Widgets\BookingStats::class,
        ];
    }

    public function getHeaderWidgets(): array
    {

        return [
            RingaDataTableWidget::class,

            //    AccountInfoStackWidget::class,
            //    WorldClockWidget::class,
        ];
    }

    public function getFooterWidgets(): array
    {

        return [
            //   \App\Filament\App\Widgets\LatestOrders::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        return [];
    }
}
