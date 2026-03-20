<?php

namespace App\Providers\Filament;

use Adultdate\FilamentBooking\FilamentBookingPlugin;
use AdultDate\FilamentWirechat\Filament\Resources\Conversations\ConversationResource;
use AdultDate\FilamentWirechat\Filament\Resources\Messages\MessageResource;
use AdultDate\FilamentWirechat\FilamentWirechatPlugin;
use App\Filament\Pages\SwedenKommuner;
use App\Filament\Pages\SwedenPostnummer;
use App\Filament\Pages\SwedenPostorter;
use App\Http\Middleware\FilamentPanelAccess;
use Caresome\FilamentAuthDesigner\AuthDesignerPlugin;
use Caresome\FilamentAuthDesigner\Enums\MediaPosition;
use Devonab\FilamentEasyFooter\EasyFooterPlugin;
use Filament\Enums\ThemeMode;
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

class GeoPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('geo')
            ->path('geo')
            ->viteTheme('resources/css/filament/geo/theme.css')
            ->login()
            ->colors([
                'primary' => Color::Amber,
            ])
            ->colors([
                'primary' => Color::Orange,
            ])
            ->spa()
            ->maxContentWidth(Width::Full)
            ->spaUrlExceptions(['tel:*', 'mailto:*'])
            ->sidebarCollapsibleOnDesktop(true)
            ->brandLogo(fn () => view('filament.app.logo'))
            ->favicon(fn () => asset('favicon.svg'))
            ->brandLogoHeight('34px')
            ->viteTheme('resources/css/filament/admin/theme.css')
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
                AccountWidget::class,
                FilamentInfoWidget::class,
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
                EasyFooterPlugin::make()
                    ->hiddenFromPagesEnabled()
                    ->hiddenFromPages(['sample-page', 'another-page', 'admin/login', 'admin/forgot-password', 'admin/register'])
                    ->withBorder()
                    ->withLoadTime()
                    ->withLogo(
                        'https://static.cdnlogo.com/logos/l/23/laravel.svg', // Path to logo
                        null,                                                // No link
                        null,                                                // No text
                        24                                                   // Logo height in pixels
                    )
                    ->withLinks([
                        ['title' => 'ndsth.com', 'url' => 'https://ndsth.com', 'target' => '_blank'],
                    ]),
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
