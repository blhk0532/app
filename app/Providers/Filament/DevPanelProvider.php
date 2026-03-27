<?php

declare(strict_types=1);

namespace App\Providers\Filament;

use AdultDate\FilamentWirechat\Filament\Resources\Conversations\ConversationResource;
use AdultDate\FilamentWirechat\Filament\Resources\Messages\MessageResource;
use AdultDate\FilamentWirechat\FilamentWirechatPlugin;
use App\Filament\Dev\Pages\DevDashboard;
use App\Http\Middleware\FilamentPanelAccess;
use App\Http\Middleware\FilamentResourceAccess;
use Caresome\FilamentAuthDesigner\AuthDesignerPlugin;
use Caresome\FilamentAuthDesigner\Data\AuthPageConfig;
use Caresome\FilamentAuthDesigner\Enums\MediaPosition;
use Caresome\FilamentAuthDesigner\View\AuthDesignerRenderHook;
use EslamRedaDiv\FilamentCopilot\FilamentCopilotPlugin;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Enums\Width;
use Filament\View\PanelsRenderHook;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Middleware\ShareErrorsFromSession;
// use TallCms\Cms\TallCmsPlugin;
use Joaopaulolndev\FilamentEditEnv\FilamentEditEnvPlugin;
use Joaopaulolndev\FilamentEditProfile\FilamentEditProfilePlugin;
// use Lartisan\Architect\ArchitectPlugin;
use Joaopaulolndev\FilamentGeneralSettings\FilamentGeneralSettingsPlugin;
use Wallacemartinss\FilamentIconPicker\FilamentIconPickerPlugin;
use Devletes\FilamentPinnableNavigation\PinnableNavigationPlugin;

class DevPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('dev')
            ->path('auth/dev')
     ->viteTheme('resources/css/filament/app/theme.css')
            ->colors([
                'primary' => Color::Gray,
            ])
            ->spa()
            // ->profile()
            ->passwordReset()
            ->unsavedChangesAlerts()
            ->databaseNotifications()
            ->databaseNotificationsPolling('30s')
            ->sidebarCollapsibleOnDesktop(true)
            ->globalSearchKeyBindings(['command+k', 'ctrl+k'])
            ->favicon(fn () => asset('favicon.svg'))
            ->brandLogo(fn () => view('filament.app.logo'))
            ->brandLogoHeight('32px')
            ->sidebarWidth('21rem')
            ->maxContentWidth(Width::Full)
            ->plugin(
                AuthDesignerPlugin::make()
                    ->login(
                        fn (AuthPageConfig $config) => $config
                            ->media(asset('assets/bangkok.jpg'))
                            ->mediaPosition(MediaPosition::Cover)
                            ->blur(1)
                            ->themeToggle()
                            ->renderHook(AuthDesignerRenderHook::CardBefore, fn () => view('filament.logo-auth'))
                    ),
                FilamentIconPickerPlugin::make(),
                FilamentEditProfilePlugin::make()
                    ->slug('my-profile')
                    ->setTitle(__('My Profile'))
                    ->setNavigationLabel(__('My Profile'))
                    ->setNavigationGroup(__('Group Profile'))
                    ->setIcon('heroicon-o-user')
                    ->setSort(10)
                    ->shouldRegisterNavigation(false)
                    ->shouldShowEmailForm()
                    ->shouldShowLocaleForm(options: [
                        'pt_BR' => __('🇧🇷 Portuguese'),
                        'en' => __('🇺🇸 English'),
                        'es' => __('🇪🇸 Spanish'),
                    ])
                    ->shouldShowThemeColorForm()
                    ->shouldShowSanctumTokens()
                    ->shouldShowMultiFactorAuthentication()
                    ->shouldShowBrowserSessionsForm()
                    ->shouldShowAvatarForm(true, 'attachments'),
            )
            ->discoverResources(in: app_path('Filament/Dev/Resources'), for: 'App\Filament\Dev\Resources')
            ->discoverPages(in: app_path('Filament/Dev/Pages'), for: 'App\Filament\Dev\Pages')
            ->discoverResources(in: app_path('Filament/Panels/Resources'), for: 'App\Filament\Panels\Resources')
            ->pages([
                DevDashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Dev/Widgets'), for: 'App\Filament\Dev\Widgets')
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
                FilamentResourceAccess::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
        //    ->plugins([
        //        ArchitectPlugin::make()
        //     ->renderHook(PanelsRenderHook::SIDEBAR_NAV_START)
        //    ])
            ->plugins([
                FilamentGeneralSettingsPlugin::make()
                    ->canAccess(fn () => Auth::user()->role === 'super')
                    ->setSort(3)
                    ->setIcon('heroicon-o-cog')
                    ->setNavigationGroup('Settings')
                    ->setTitle('Settings')
                    ->setNavigationLabel('Settings'),
            ])
            ->plugins([
                FilamentEditEnvPlugin::make()
                    ->showButton(fn () => Auth::user()->role === 'super')
                    ->setIcon('heroicon-o-cog'),
            ])
            ->plugin(FilamentCopilotPlugin::make())
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
