<?php

declare(strict_types=1);

namespace App\Providers\Filament;

use AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard;
use AdultDate\FilamentWirechat\Filament\Resources\Conversations\ConversationResource;
use AdultDate\FilamentWirechat\Filament\Resources\Messages\MessageResource;
use AdultDate\FilamentWirechat\FilamentWirechatPlugin;
use App\Filament\App\Pages\Tenancy\EditTeamProfile;
use App\Http\Middleware\ApplyTenantScopes;
use App\Http\Middleware\CurrentTenant;
use App\Http\Middleware\FilamentResourceAccess;
use App\Models\Team;
use App\Models\User;
use App\Support\Filament\AppPanelRedirect;
use Cachet\Cachet;
use Cachet\Filament\Pages\EditProfile;
use Cachet\Filament\Pages\TenantProfile;
use Cachet\Filament\Widgets\AnnouncementEditorWidget;
use Cachet\Filament\Widgets\AnnouncementWidget;
use Cachet\Http\Middleware\SetAppLocale;
use Cachet\Settings\AppSettings;
use Devletes\FilamentPinnableNavigation\PinnableNavigationPlugin;
use Filament\Actions\Action;
use Filament\Enums\ThemeMode;
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
use Filament\Support\Enums\Width;
use Filament\Support\Facades\FilamentView;
use Filament\View\PanelsRenderHook;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Route;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use lockscreen\FilamentLockscreen\Lockscreen;

class CachetPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        $appSettings = app(AppSettings::class);

        return $panel
            ->id('cachet')
            ->path('cachet')
            ->tenant(Team::class, slugAttribute: 'slug', ownershipRelationship: null)
            ->when(
                ! $this->app->runningInConsole() && $appSettings->enable_external_dependencies,
                fn (Panel $cachetPanel): Panel => $cachetPanel->font('switzer', 'https://fonts.cdnfonts.com/css/switzer'),
                fn (Panel $cachetPanel): Panel => $cachetPanel->font('ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', provider: LocalFontProvider::class),
            )
            ->login()
            ->passwordReset()
            ->profile(EditProfile::class)
            ->tenantProfile(EditTeamProfile::class)
            ->homeUrl(fn () => AppPanelRedirect::urlFor(Auth::user()))
            ->brandLogo(fn () => view('cachet::filament.brand-logo'))
            ->brandLogoHeight('2rem')
            ->brandName('Noridic Digital')
            ->defaultThemeMode(ThemeMode::Dark)
            ->maxContentWidth(Width::Full)
            ->spa()
            ->colors([
                'primary' => Color::generateV3Palette('rgb(4, 193, 71)'),
                'purple' => Color::Purple,
                'gray' => Color::Zinc,
            ])
            ->sidebarCollapsibleOnDesktop()
            ->sidebarWidth('21rem')
            ->favicon('/vendor/cachethq/cachet/favicon.ico')
            ->viteTheme('resources/css/filament/cachet/theme.css')
            ->discoverResources(__DIR__.'/../../../plugins/cachethq/core/src/Filament/Resources', 'Cachet\\Filament\\Resources')
            ->discoverPages(__DIR__.'/../../../plugins/cachethq/core/src/Filament/Pages', 'Cachet\Filament\Pages')
            ->tenantRoutes(function () {
                Route::get('my-profile', TenantProfile::class)
                    ->name('profile');
            })
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
            //        ->navigationItems([
            //            NavigationItem::make()
            //                ->label('status')
            //                ->url(Cachet::path())
            //                ->visible(false)
            //                ->group(' ')
            //                ->icon('cachet-component-performance-issues'),
            //        ])
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
                FilamentResourceAccess::class,
            ])
            ->tenantMiddleware([
                ApplyTenantScopes::class,
                CurrentTenant::class,
            ], isPersistent: true)
            ->authMiddleware([
                Authenticate::class,
            ])
            ->tenantMenuItems([
                'profile' => fn (Action $action) => $action->label('Team Settings')
                    ->sort(-1)
                    ->visible(fn () => User::canManageTeam() !== false && filament()->getTenant()),
            ])
       //      ->plugin(PinnableNavigationPlugin::make())
            ->plugin(
                Lockscreen::make()
                    ->enablePlugin(),
            )
            ->path(Cachet::dashboardPath())
            ->plugins([
                FilamentWirechatPlugin::make()
                    ->onlyPages([ChatDashboard::class])
                    ->excludeResources([
                        ConversationResource::class,
                        MessageResource::class,
                    ]),
            ])
            ->widgets([
                AnnouncementWidget::class,
                AnnouncementEditorWidget::class,
            ])
            ->bootUsing(function (): void {
                Section::configureUsing(fn (Section $section): Section => $section->columnSpanFull());
            })
            ->databaseNotifications()
            ->databaseNotificationsPolling('30s');
    }

    public function boot(): void
    {

        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::GLOBAL_SEARCH_BEFORE,
        //        function (): \Illuminate\View\View {
        //            return view('filament.app.global-outcome-history-trigger');
        //        }
        //    );

        FilamentView::registerRenderHook(
            PanelsRenderHook::TOPBAR_LOGO_AFTER,
            fn () => Blade::render('@livewire(\'filament-ui-switcher\', [\'hasModeSwitcher\' => true])'),
        );
        FilamentView::registerRenderHook(
            PanelsRenderHook::SIDEBAR_LOGO_AFTER,
            fn () => Blade::render('@livewire(\'filament-ui-switcher\', [\'hasModeSwitcher\' => true])'),
        );

        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::TOPBAR_LOGO_AFTER,
        //        fn () => view('filament.app.user-notes-icon-topbar')
        //    );
        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::BODY_START,
        //        fn () => view('filament.app.manus-modal-container')
        //    );
        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::GLOBAL_SEARCH_BEFORE,
        //        function (): \Illuminate\View\View {
        //            return view('filament.app.global-ai-search-trigger');
        //        }
        //    );

        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::GLOBAL_SEARCH_BEFORE,
        //        function (): \Illuminate\View\View {
        //            return view('filament.app.global-calendar-search-trigger');
        //        }
        //    );

        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::GLOBAL_SEARCH_BEFORE,
        //        function (): \Illuminate\View\View {
        //            return view('filament.app.global-ringa-data-search-trigger');
        //        }
        //    );

        //             FilamentView::registerRenderHook(
        //         PanelsRenderHook::CONTENT_BEFORE,
        //         fn () => view('filament.app.content-before')
        //     );
    }
}
