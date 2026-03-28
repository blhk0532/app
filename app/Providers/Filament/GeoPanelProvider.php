<?php

namespace App\Providers\Filament;

use Adultdate\FilamentBooking\FilamentBookingPlugin;
use AdultDate\FilamentWirechat\Filament\Resources\Conversations\ConversationResource;
use AdultDate\FilamentWirechat\Filament\Resources\Messages\MessageResource;
use AdultDate\FilamentWirechat\FilamentWirechatPlugin;
use App\Filament\Geo\Pages\Dashboard;
use App\Filament\Geo\Widgets\GeoMapWidget;
use App\Filament\Pages\SwedenKommuner;
use App\Filament\Pages\SwedenPostnummer;
use App\Filament\Pages\SwedenPostorter;
use App\Filament\Widgets\LocationMapPickerWidgetFull;
use App\Filament\Widgets\SwedenMapWidget;
use App\Http\Middleware\FilamentPanelAccess;
use App\Http\Middleware\FilamentResourceAccess;
use Caresome\FilamentAuthDesigner\AuthDesignerPlugin;
use Caresome\FilamentAuthDesigner\Enums\MediaPosition;
use Filament\Enums\ThemeMode;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Enums\Width;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class GeoPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('geo')
            ->path('auth/geo')
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->login()
            ->colors([
                'primary' => Color::Orange,
            ])
            ->spa()
            ->maxContentWidth(Width::Full)
            ->spaUrlExceptions(['tel:*', 'mailto:*'])
            ->sidebarCollapsibleOnDesktop(true)
            ->favicon(fn () => asset('favicon.svg'))
            ->brandLogo(fn () => view('filament.app.logo'))
            ->brandLogoHeight('32px')
            ->sidebarWidth('21rem')
            ->brandName('Noridic Digital')
            ->defaultThemeMode(ThemeMode::Dark)
            ->revealablePasswords(true)
            ->passwordReset()
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            //    ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
                SwedenPostnummer::class,
                SwedenKommuner::class,
                SwedenPostorter::class,
            ])
            //    ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([
                GeoMapWidget::class,
                LocationMapPickerWidgetFull::class,
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
                FilamentResourceAccess::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->plugin(
                AuthDesignerPlugin::make()
                    ->defaults(
                        fn ($config) => $config
                            ->media(asset('assets/auth-bg.jpg'))
                            ->mediaPosition(MediaPosition::Cover)
                            ->blur(10)
                    )
                    ->login(
                        fn ($config) => $config
                            ->media(asset('video/853789-hd_1920_1080_25fps.mp4'))
                    )
                    ->registration()
                    ->passwordReset()
                    ->emailVerification()
                    ->themeToggle()
            )
            ->plugins([
                FilamentBookingPlugin::make(),
                //   FilamentDialerPlugin::make(),

            ])
            ->plugins([
                FilamentWirechatPlugin::make()
                    ->excludeResources([
                        ConversationResource::class,
                        MessageResource::class,
                    ]),
            ]);
    }
}
