<?php

use App\Providers\AppServiceProvider;
use App\Providers\Adultdate\ChatsPanelProvider;
use App\Providers\Filament\AdminPanelProvider;
use App\Providers\Filament\AppPanelProvider;
use App\Providers\Filament\BookingPanelProvider;
use App\Providers\Filament\CachetPanelProvider;
use App\Providers\Filament\CalendarPanelProvider;
use App\Providers\Filament\ChatPanelProvider;
use App\Providers\Filament\DataPanelProvider;
use App\Providers\Filament\DevPanelProvider;
use App\Providers\Filament\DialerPanelProvider;
use App\Providers\Filament\EmailPanelProvider;
use App\Providers\Filament\FinancePanelProvider;
use App\Providers\Filament\GeoPanelProvider;
use App\Providers\Filament\ManagerPanelProvider;
use App\Providers\Filament\NotifyPanelProvider;
use App\Providers\Filament\PartnerPanelProvider;
use App\Providers\Filament\QueuePanelProvider;
use App\Providers\Filament\ScriptPanelProvider;
use App\Providers\Filament\SheetsPanelProvider;
use App\Providers\Filament\StatsPanelProvider;
use App\Providers\Filament\SuperPanelProvider;
use App\Providers\Filament\ToolsPanelProvider;
use App\Providers\Filament\SystemPanelProvider;
use App\Providers\Filament\CompanyPanelProvider;
use App\Providers\Filament\PrivatePanelProvider;
use App\Providers\FortifyServiceProvider;
use Cachet\CachetCoreServiceProvider;

return [
    AppServiceProvider::class,
    CachetCoreServiceProvider::class,
    CachetPanelProvider::class,
    AdminPanelProvider::class,
    AppPanelProvider::class,
    BookingPanelProvider::class,
    FortifyServiceProvider::class,
    ChatsPanelProvider::class,
    ChatPanelProvider::class,
    EmailPanelProvider::class,
    GeoPanelProvider::class,
    QueuePanelProvider::class,
    CalendarPanelProvider::class,
    DataPanelProvider::class,
    DevPanelProvider::class,
    ToolsPanelProvider::class,
    NotifyPanelProvider::class,
    SuperPanelProvider::class,
    DialerPanelProvider::class,
    FinancePanelProvider::class,
    ManagerPanelProvider::class,
    PartnerPanelProvider::class,
    ScriptPanelProvider::class,
    SheetsPanelProvider::class,
    StatsPanelProvider::class,
    SystemPanelProvider::class,
    CompanyPanelProvider::class,
    PrivatePanelProvider::class,
];
