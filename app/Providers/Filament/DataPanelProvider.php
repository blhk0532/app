<?php

declare(strict_types=1);

namespace App\Providers\Filament;

use Adultdate\FilamentBooking\FilamentBookingPlugin;
use AdultDate\FilamentWirechat\Filament\Resources\Conversations\ConversationResource;
use AdultDate\FilamentWirechat\Filament\Resources\Messages\MessageResource;
use AdultDate\FilamentWirechat\FilamentWirechatPlugin;
use App\Http\Middleware\FilamentPanelAccess;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Enums\Width;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class DataPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('data')
            ->path('data')
            ->viteTheme('resources/css/filament/data/theme.css')
            ->colors([
                'primary' => Color::Amber,
            ])
            ->authGuard('web')
            ->brandName('Noridic Digital')
            ->sidebarCollapsibleOnDesktop(true)
            ->brandLogo(fn () => view('filament.app.logo'))
            ->favicon(fn () => asset('favicon.svg'))
            ->unsavedChangesAlerts()
            ->databaseNotifications()
            ->maxContentWidth(Width::Full)
            ->databaseNotificationsPolling('30s')
            ->discoverResources(in: app_path('Filament/Data/Resources'), for: 'App\Filament\Data\Resources')
            ->discoverPages(in: app_path('Filament/Data/Pages'), for: 'App\Filament\Data\Pages')
            ->pages([
                //    Dashboard::class,
            ])
        //    ->discoverWidgets(in: app_path('Filament/Data/Widgets'), for: 'App\\Filament\\Data\\Widgets')
            ->widgets([
                //    AccountWidget::class,
                //    FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                PreventRequestForgery::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
                FilamentPanelAccess::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->plugins([
                FilamentBookingPlugin::make(),
                //   FilamentDialerPlugin::make(),

            ])
            ->plugins([
                FilamentWirechatPlugin::make()
                    ->onlyPages([])
                    ->excludeResources([
                        ConversationResource::class,
                        MessageResource::class,
                    ]),
            ]);
    }
}
