<?php

declare(strict_types=1);

namespace App\Providers\Filament;

use Cachet\Cachet;
use Cachet\Filament\Pages\EditProfile;
use Cachet\Http\Middleware\SetAppLocale;
use Cachet\Settings\AppSettings;
use Filament\FontProviders\LocalFontProvider;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Navigation\NavigationGroup;
use Filament\Navigation\NavigationItem;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Schemas\Components\Section;
use Filament\Support\Colors\Color;
use Filament\View\PanelsRenderHook;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use lockscreen\FilamentLockscreen\Lockscreen;

class CachetPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        $appSettings = app(AppSettings::class);

        return $panel
            ->id('cachet')
            ->when(
                ! $this->app->runningInConsole() && $appSettings->enable_external_dependencies,
                fn (Panel $cachetPanel): Panel => $cachetPanel->font('switzer', 'https://fonts.cdnfonts.com/css/switzer'),
                fn (Panel $cachetPanel): Panel => $cachetPanel->font('ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', provider: LocalFontProvider::class),
            )
            ->login()
            ->passwordReset()
            ->profile(EditProfile::class)
            ->brandLogo(fn () => view('cachet::filament.brand-logo'))
            ->brandLogoHeight('2rem')
            ->colors([
                'primary' => Color::generateV3Palette('rgb(4, 193, 71)'),
                'purple' => Color::Purple,
                'gray' => Color::Zinc,
            ])
            ->favicon('/vendor/cachethq/cachet/favicon.ico')
            ->viteTheme('resources/css/dashboard/theme.css', 'vendor/cachethq/cachet/build')
            ->discoverResources(__DIR__.'/../../../plugins/cachethq/core/src/Filament/Resources', 'Cachet\\Filament\\Resources')
            ->discoverPages(__DIR__.'/../../../plugins/cachethq/core/src/Filament/Pages', 'Cachet\\Filament\\Pages')
            ->discoverWidgets(__DIR__.'/../../../plugins/cachethq/core/src/Filament/Widgets', 'Cachet\\Filament\\Widgets')
            ->navigationGroups([
                NavigationGroup::make()
                    ->label(fn (): string => __('cachet::navigation.settings.label'))
                    ->collapsed()
                    ->icon('cachet-settings'),
                NavigationGroup::make()
                    ->label(fn (): string => __('cachet::navigation.integrations.label'))
                    ->collapsed(),
                NavigationGroup::make()
                    ->label(fn (): string => __('cachet::navigation.resources.label'))
                    ->collapsible(false),
            ])
            ->navigationItems([
                NavigationItem::make(fn (): string => __('cachet::navigation.resources.items.status_page'))
                    ->url(Cachet::path())
                    ->visible(false)
                    ->group(' ')
                    ->icon('cachet-component-performance-issues'),
            ])
            ->renderHook(PanelsRenderHook::GLOBAL_SEARCH_AFTER, fn () => view('cachet::filament.widgets.add-incident-button'))
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
                SetAppLocale::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->plugin(
                Lockscreen::make()
                    ->enablePlugin(),
            )
            ->path(Cachet::dashboardPath())
            ->bootUsing(function (): void {
                Section::configureUsing(fn (Section $section): Section => $section->columnSpanFull());
            });
    }
}
