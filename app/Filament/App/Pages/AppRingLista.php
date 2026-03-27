<?php

declare(strict_types=1);

namespace App\Filament\App\Pages;

use App\Filament\Admin\Widgets\AccountInfoStackWidget;
use App\Filament\Admin\Widgets\WorldClockWidget;
use App\Filament\App\Resources\RingaListan\RingaListanResource;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataStatsWidget;
use App\Filament\App\Widgets\MyRinglistaWidget;
use BackedEnum;
use Filament\Pages\Dashboard\Concerns\HasFiltersForm;
use Filament\Pages\Page;
use Filament\Schemas\Schema;
use UnitEnum;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class AppRingLista extends Page
{
    use HasFiltersForm;

    protected static ?string $title = '';

    protected static ?string $slug = 'ring-listor';

    protected string $view = 'filament.app.pages.ring-lista';

    //  protected static string|UnitEnum|null $navigationGroup = '';

    protected static ?int $navigationSort = 10;

    protected static ?int $sort = 10;

    protected static string|BackedEnum|null $navigationIcon = Remix::RiTimerFlashLine;

    protected static string|BackedEnum|null $activeNavigationIcon = Remix::RiTimerFlashFill;

    // Prevent this app-level Dashboard from being auto-discovered so that
    // the explicit `AdminDashboard` can be registered as the admin panel root.
    protected static bool $isDiscovered = true;

    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }

    public static function getNavigationLabel(): string
    {
        return 'Ringlistor';
    }

    public static function getNavigationBadgeColor(): ?string
    {
        $count = RingaListanResource::getRingAgainCount();

        return $count ? 'warning' : 'success';
    }

    public static function getNavigationBadge(): ?string
    {
        $count = RingaListanResource::getRingAgainCount();

        return $count ? (string) $count : '❍';
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

    public function filtersForm(Schema $schema): Schema
    {
        return $schema
            ->components([

            ]);
    }

    public function getColumns(): int
    {
        // Use fewer columns so widgets are wider and not visually compressed.
        return 2;
    }

    public function getWidgets(): array
    {
        return [

            //     \App\Filament\App\Widgets\BookingStats::class,
        ];
    }

    public function getHeaderWidgets(): array
    {

        return [
            MyRinglistaWidget::class,

            //    AccountInfoStackWidget::class,
            //    WorldClockWidget::class,
        ];
    }

    public function getFooterWidgets(): array
    {

        return [
            RingaDataStatsWidget::class,
            //    MultiCalendar2::class,
            //    MultiCalendar3::class,
            //    \App\Filament\App\Widgets\LatestOrders::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        return [];
    }

    protected function getHeaderTitle(): string
    {
        return '';
    }
}
