<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages;

use App\Filament\Booking\Clusters\Services\Resources\Bookings\Widgets\MultiCalendar;
use App\Models\BookingCalendar as BookingCalendarModel;
use BackedEnum;
use Closure;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Pages\Dashboard as BaseDashboard;
use Filament\Pages\Dashboard\Concerns\HasFiltersForm;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Str;
use UnitEnum;

class BookingCalendarsX1 extends BaseDashboard
{
    use HasFiltersForm;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCalendarDateRange;

    protected static ?string $navigationLabel = 'NDS Kalender x1';

    protected static ?string $title = '';

    protected static ?int $navigationSort = 1;

    protected static ?int $sort = 1;

    protected static string $routePath = 'nds-kalender-x1-custom';

    public static function isDiscovered(): bool
    {
        return false;
    }

    protected static string|UnitEnum|null $navigationGroup = 'Kalendrar';
    //  protected static ?string $slug = 'dashboard';

    protected string $view = 'filament-booking::pages.page';

    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }

    public static function getNavigationLabel(): string
    {
        return ''.Str::ucfirst('NDS Kalender x1') ?? 'NDS Kalender x1';
    }

    public static function getNavigationBadge(): ?string
    {
        //  return now()->format('H:m');
        return 'x1';
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'gray';
    }

    public static function getNavigationSort(): ?int
    {
        return 1;
    }

    public static function getSort(): ?int
    {
        return 1;
    }

    public function mount(): void
    {
        $this->dispatch('filament-collapse-sidebar');
    }

    public function getWidgets(): array
    {
        return [
            MultiCalendar::class,
        ];
    }

    public function getMaxContentWidth(): Width
    {
        return Width::Full;
    }

    public function filtersForm(Schema $schema): Schema
    {
        $calendarOptions = BookingCalendarModel::pluck('name', 'id')->toArray();
        $calendarIds = array_keys($calendarOptions);

        return $schema
            ->components([
                Section::make()
                    ->schema([
                        Select::make('booking_calendars_1')
                            ->options(fn () => ['all' => 'Show All'] + $calendarOptions)
                            ->label('Tekninker')
                            ->placeholder('Select a calendar owner')
                            ->searchable()
                            ->live()
                            ->live()
                            ->default($calendarIds[0] ?? null)
                            ->afterStateUpdated(function ($state) {
                                $this->dispatch('refreshCalendar');
                            }),

                        DatePicker::make('startDate')
                            ->maxDate(fn (Get $get) => $get('endDate') ?: now()),
                        DatePicker::make('endDate')
                            ->minDate(fn (Get $get) => $get('startDate') ?: now())
                            ->maxDate(now()),
                    ])
                    ->columns(3)
                    ->columnSpanFull(),
            ]);
    }

    public function getPermissionCheckClosure(): Closure
    {
        return fn (string $widgetClass) => true;
    }
}
