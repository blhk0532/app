<?php

declare(strict_types=1);

namespace App\Filament\App\Pages;

use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Enums\Width;
use Illuminate\Support\Facades\Auth;
use UnitEnum;
use Illuminate\Support\Str;

class GoogleCalendar extends Page
{
    protected string $view = 'filament.app.pages.google-calendar';

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-calendar-days';

    protected static ?string $navigationLabel = 'GoogleCAL';

    protected static ?string $title = '';

    protected static ?int $navigationSort = 5;

    protected static ?string $slug = 'google-calendar';

    // protected static string|UnitEnum|null $navigationGroup = '';

    public function getMaxContentWidth(): Width
    {
        return Width::Full;
    }

    public static function getNavigationGroup(): ?string
    {
        $team = filament()->getTenant()?->name;
        $name = \Illuminate\Support\Str::ucwords($team);

         return $name ? ' TEAM | ' . $name : 'TEAM | Administration';
        // return filament()->getTenant()?->name ? filament()->getTenant()?->name : 'Administration';
    }

    public static function shouldRegisterNavigation(): bool
    {
        // if (filament()->getTenant()->getAttribute('is_admin') !== true) {
        //     return false;
        // }
        if (Auth::user()->role === 'admin' || Auth::user()->role === 'super' || Auth::user()->role === 'manager') {
            return true;
        }

        return false;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'success';
    }

    public static function getNavigationBadge(): ?string
    {
        return 'OK';
    }
}
