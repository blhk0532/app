<?php

declare(strict_types=1);

namespace App\Providers\Filament;

use Adultdate\FilamentBooking\FilamentBookingPlugin;
// use AdultDate\FilamentDialer\FilamentDialerPlugin;
use AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard;
use AdultDate\FilamentWirechat\Filament\Pages\ChatsDashboard;
use AdultDate\FilamentWirechat\Filament\Resources\Conversations\ConversationResource;
use AdultDate\FilamentWirechat\Filament\Resources\Messages\MessageResource;
use AdultDate\FilamentWirechat\FilamentWirechatPlugin;
use Andreia\FilamentUiSwitcher\FilamentUiSwitcherPlugin;
use App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2;
use App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4;
use App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6;
use App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3 as AppBookingMultiCalendar;
use App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3 as Scheman;
use App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar as AppBookingSinleCalendar;
use App\Filament\App\Pages\AppChatDashboard;
use App\Filament\App\Pages\AppDashboard;
use App\Filament\App\Pages\AppDataHistory;
use App\Filament\App\Pages\AppRingLista;
use App\Filament\App\Pages\ArbetslistaDashboard;
use App\Filament\App\Pages\InertiaCalendar;
use App\Filament\App\Pages\TeamInvitationAccept;
// use App\Filament\Data\Resources\RatsitDatas\RatsitDataResource;
use App\Filament\App\Pages\Tenancy\EditTeamProfile;
use App\Filament\App\Pages\Tenancy\RegisterTeam;
use App\Filament\App\Resources\BookingDataLeads\BookingDataLeadResource;
use App\Filament\App\Resources\RingaData\RingaDataResource;
use App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData;
use App\Filament\App\Resources\TeamUsers\TeamUserResource;
use App\Filament\App\Resources\Users\UserResource;
use App\Filament\Pages\FlowForge\FlowForgePage;
// use App\Http\Middleware\EnforceUserResourceNavigation;
use App\Filament\Widgets\RatsitDataStatsWidget;
use App\Http\Middleware\ApplyTenantScopes;
use App\Http\Middleware\CurrentTenant;
use App\Http\Middleware\FilamentPanelAccess;
use App\Models\Team;
use App\Models\User;
use App\Support\Filament\AppPanelRedirect;
use Arshaviras\WeatherWidget\Widgets\WeatherWidget;
use Asmit\ResizedColumn\ResizedColumnPlugin;
use Caresome\FilamentAuthDesigner\AuthDesignerPlugin;
use Caresome\FilamentAuthDesigner\Data\AuthPageConfig;
use Caresome\FilamentAuthDesigner\Enums\MediaPosition;
use Caresome\FilamentAuthDesigner\View\AuthDesignerRenderHook;
use Cmsmaxinc\FilamentErrorPages\FilamentErrorPagesPlugin;
use Devonab\FilamentEasyFooter\EasyFooterPlugin;
use Filament\Actions\Action;
use Filament\AdvancedExport\AdvancedExportPlugin;
use Filament\Enums\ThemeMode;
use Filament\Facades\Filament;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Navigation\NavigationGroup;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Enums\Width;
use Filament\Support\Facades\FilamentView;
use Filament\Support\Icons\Heroicon;
use Filament\View\PanelsRenderHook;
use Hammadzafar05\MobileBottomNav\MobileBottomNav;
use Hammadzafar05\MobileBottomNav\MobileBottomNavItem;
use Hydrat\TableLayoutToggle\Persisters\LocalStoragePersister;
use Hydrat\TableLayoutToggle\TableLayoutTogglePlugin;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use JeffersonGoncalves\Filament\RefreshSidebar\RefreshSidebarPlugin;
use Joaopaulolndev\FilamentEditProfile\FilamentEditProfilePlugin;
use Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage;
use Leandrocfe\FilamentApexCharts\FilamentApexChartsPlugin;
use Leek\FilamentDiceBear\DiceBearPlugin;
use Leek\FilamentDiceBear\DiceBearProvider;
use Leek\FilamentDiceBear\Enums\DiceBearStyle;
use Muazzam\SlickScrollbar\SlickScrollbarPlugin;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;
use Wallacemartinss\FilamentIconPicker\Enums\Tabler;
use Wallacemartinss\FilamentIconPicker\FilamentIconPickerPlugin;

class AppPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('app')
            ->path('app')
            ->login()
            ->authGuard('web')
            ->colors([
                'primary' => Color::Blue,
            ])
            ->passwordReset()
            ->databaseNotifications()
            ->databaseTransactions()
            ->databaseNotificationsPolling('30s')
            ->tenant(Team::class, slugAttribute: 'slug', ownershipRelationship: null)
            ->tenantRoutePrefix('team')
            ->maxContentWidth(Width::Full)
            ->tenantRegistration(RegisterTeam::class)
            ->tenantProfile(EditTeamProfile::class)
            ->tenantSwitcher(fn () => Auth::user()->role === 'super' || Auth::user()->role === 'admin' ? true : false)
            ->tenantMenu(fn () => Auth::user()->role === 'super' || Auth::user()->role === 'admin' ? true : false)
            ->homeUrl(fn () => AppPanelRedirect::urlFor(Auth::user()))
            ->favicon(fn () => asset('favicon.svg'))
            ->brandLogo(fn () => view('filament.app.logo'))
            ->brandLogoHeight(fn () => request()->is('admin/login', 'admin/password-reset/*') ? '68px' : '34px')
            ->viteTheme('resources/css/filament/app/theme.css')
            ->defaultThemeMode(ThemeMode::Dark)
            //    ->discoverClusters(in: app_path('Filament/App/Clusters'), for: 'App\\Filament\\App\\Clusters')
            ->profile(null)
            ->spa()
            ->sidebarFullyCollapsibleOnDesktop()
            ->spaUrlExceptions(['tel:*', 'mailto:*'])
            ->registerErrorNotification(
                title: 'Oops!',
                body: '/ᐠ •̀ ˕ •́ マ',
            )
            ->homeUrl(fn () => AppPanelRedirect::urlFor(Auth::user()))
            ->sidebarCollapsibleOnDesktop(true)
            ->globalSearchKeyBindings(['command+k', 'ctrl+k'])
            ->favicon(fn () => asset('favicon.svg'))
            ->brandLogo(fn () => view('filament.app.logo'))
            ->brandLogoHeight(fn () => request()->is('admin/login', 'admin/password-reset/*') ? '68px' : '34px')
            ->viteTheme('resources/css/filament/app/theme.css')
            ->defaultThemeMode(ThemeMode::Dark)
            ->databaseNotificationsPolling('30s')
            //    ->discoverClusters(in: app_path('Filament/App/Clusters'), for: 'App\\Filament\\App\\Clusters')
            ->discoverPages(in: app_path('Filament/App/Pages'), for: 'App\\Filament\\App\\Pages')
            ->discoverResources(in: app_path('Filament/App/Resources'), for: 'App\\Filament\\App\\Resources')
            ->discoverWidgets(in: app_path('Filament/App/Widgets'), for: 'App\\Filament\\App\\Widgets')
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->profile(null)
            ->spa()
            ->sidebarFullyCollapsibleOnDesktop()
            ->spaUrlExceptions(['tel:*', 'mailto:*'])
            ->registerErrorNotification(
                title: 'Oops!',
                body: '/ᐠ •̀ ˕ •́ マ',
            )
            ->navigationGroups([
                NavigationGroup::make('Administration')
                    ->extraSidebarAttributes(['class' => 'featured-sidebar-group'])
                    ->collapsed()
                    ->icon(Tabler::ShieldCheckF),
                NavigationGroup::make('Team Admin')
                    ->extraSidebarAttributes(['class' => 'featured-sidebar-group'])
                    ->collapsed()
                    ->label('Team Admin')
                    ->icon(Tabler::ShieldCheckF),
                NavigationGroup::make('Mina Sidor')
                    ->extraSidebarAttributes(['class' => 'featured-sidebar-group'])
                    ->collapsed()
                    ->icon(Tabler::UserSquareRounded),
                NavigationGroup::make('Kalendrar')
                    ->collapsed()
                    ->icon('heroicon-c-squares-plus'),
                NavigationGroup::make('Samtalslistor')
                    ->collapsed()
                    ->icon('heroicon-o-queue-list'),
                NavigationGroup::make('Bokningar Admin')
                    ->collapsed()
                    ->icon('heroicon-o-document-text'),
                NavigationGroup::make(filament()->getTenant()?->id ? filament()->getTenant()?->name : 'Admin')
                    ->collapsed()
                    ->icon(Tabler::UserSquareRounded),
                NavigationGroup::make('Kalender')
                    ->extraSidebarAttributes(['class' => 'featured-sidebar-group'])
                    ->icon('heroicon-o-calendar-days')
                    ->collapsed()
                    ->icon(Tabler::UserSquareRounded),

            ])
            ->pages([
                AppDashboard::class,
                AppChatDashboard::class,
                //    ChatDashboard::class,
                //    ChatsDashboard::class,
                InertiaCalendar::class,
                AppBookingSinleCalendar::class,
                AppBookingMultiCalendar::class,
                QueueRingaData::class,
                Scheman::class,
                ArbetslistaDashboard::class,
                AppDataHistory::class,
                //    \App\Filament\Data\Pages\KommunerMap::class,
                //    \App\Filament\Pages\TaskBoard::class,

                //    AppRingLista::class,
                //    BookingCalendersX2::class,
                //    BookingCalendersX4::class,
                //    BookingCalendersX2::class,
                //    BookingCalendersX4::class,
                //    BookingCalendersX6::class,
                FlowForgePage::class, // FlowForge integration
            ])
            ->widgets([
                WeatherWidget::class,
                RatsitDataStatsWidget::class,
            ])
            ->resources([
                //    BookingDataLeadResource::class,
                // RatsitDataResource::class,
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
                //    WeatherWidget::make(),
                SlickScrollbarPlugin::make(),
                FilamentErrorPagesPlugin::make()
                    ->routes([
                        'nds/*',
                        'nds/app/*',
                        'nds/app/team/*',
                    ]),
            ])
            ->plugins([
                MobileBottomNav::make()
                    ->items([
                        MobileBottomNavItem::make('Home')
                            ->icon('heroicon-o-home')
                            ->activeIcon('heroicon-s-home')
                            ->url('/admin')
                            ->isActive(fn () => request()->is('admin')),
                        MobileBottomNavItem::make('Inbox')
                            ->icon('heroicon-o-inbox')
                            ->url('/admin/inbox')
                            ->badge(5, 'danger'),
                        MobileBottomNavItem::make('Profile')
                            ->icon('heroicon-o-user')
                            ->url('/admin/profile'),
                    ]),

            ])
            ->plugins([
                //    FilamentShieldPlugin::make(),
            ])
            ->plugins([
                RefreshSidebarPlugin::make(),
                FilamentApexChartsPlugin::make(),
            ])
            ->plugins([
                // ... other plugins
                ResizedColumnPlugin::make()
                    ->preserveOnDB(), // Enable database storage (optional)
            ])
            ->plugins([
                EasyFooterPlugin::make()
                    ->hiddenFromPagesEnabled()
                    ->hiddenFromPages(['sample-page', 'another-page', 'admin/login', 'admin/forgot-password', 'admin/register'])
                    ->withBorder()
                    ->withFooterPosition('sidebar.footer')
                    ->withLogo(
                        'https://static.cdnlogo.com/logos/l/23/laravel.svg', // Path to logo
                        null,                                                // No link
                        null,                                                // No text
                        24                                                   // Logo height in pixels
                    ),
                //    ->withLinks([
                //        ['title' => 'ndsth.com', 'url' => 'https://ndsth.com', 'target' => '_blank'],
                //    ]),
            ])
            ->plugins([
                AdvancedExportPlugin::make(),
            ])
            ->plugins([
                TableLayoutTogglePlugin::make()
                    ->setDefaultLayout('grid') // default layout for user seeing the table for the first time
                    ->persistLayoutUsing(
                        persister: LocalStoragePersister::class, // chose a persister to save the layout preference of the user
                        cacheStore: 'redis', // optional, change the cache store for the Cache persister
                        cacheTtl: 60 * 24, // optional, change the cache time for the Cache persister
                    )
                    ->shareLayoutBetweenPages(false) // allow all tables to share the layout option for this user
                    ->displayToggleAction() // used to display the toggle action button automatically
                    ->toggleActionHook('tables::toolbar.search.after') // chose the Filament view hook to render the button on
                    ->listLayoutButtonIcon('heroicon-o-list-bullet')
                    ->gridLayoutButtonIcon('heroicon-o-squares-2x2'),
            ])
            ->plugins([
                FilamentIconPickerPlugin::make(),
                FilamentEditProfilePlugin::make()
                    ->slug('my-profile')
                    ->setTitle(__('My Profile'))
                    ->setNavigationLabel(__('Inställningar'))
                    ->setNavigationGroup(__('Mina Sidor'))
                    ->setIcon('heroicon-o-user')
                    ->setSort(100)
                    ->shouldRegisterNavigation(false)
                    ->shouldShowEmailForm()
                    ->shouldShowLocaleForm(options: [
                        'en' => __('🇺🇸 English'),
                        'sv' => __('🇸🇪 Svenska'),
                        'th' => __('🇹🇭 ภาษาไทย'),
                    ])
                    ->shouldShowThemeColorForm(false)
                    ->shouldShowSanctumTokens()
                    ->shouldShowMultiFactorAuthentication()
                    ->shouldShowBrowserSessionsForm()
                    ->shouldShowAvatarForm(true, 'attachments')
                    ->customProfileComponents([]),
            ])
            ->userMenuItems([
                'profile' => Action::make('profile')
                    ->label(fn () => Str::ucfirst(Auth::user()->getNdsUserName()))
                    ->url(function (): string {
                        $panel = Filament::getCurrentOrDefaultPanel();
                        $tenant = filament()->getTenant();

                        if (! $tenant) {
                            $user = Filament::auth()->user();

                            if ($user instanceof User && method_exists($user, 'getDefaultTenant')) {
                                $tenant = $user->getDefaultTenant($panel);
                            }

                            if (! $tenant && $user instanceof User && method_exists($user, 'getTenants')) {
                                $tenant = collect($user->getTenants($panel))->first();
                            }
                        }

                        $tenantSlug = $tenant instanceof Team
                            ? $tenant->slug
                            : (is_string($tenant) ? $tenant : null);

                        if (filled($tenantSlug)) {
                            return EditProfilePage::getUrl(parameters: ['tenant' => $tenantSlug]);
                        }

                        return $panel?->getUrl() ?? url('/');
                    })
                    ->icon('heroicon-o-user-circle'),
                'wirechat' => Action::make('chats')
                    ->label('Chat')
                    ->url(function (): string {
                        $panel = Filament::getCurrentOrDefaultPanel();
                        $tenant = filament()->getTenant();

                        if (! $tenant) {
                            $user = Filament::auth()->user();

                            if ($user instanceof User && method_exists($user, 'getDefaultTenant')) {
                                $tenant = $user->getDefaultTenant($panel);
                            }

                            if (! $tenant && $user instanceof User && method_exists($user, 'getTenants')) {
                                $tenant = collect($user->getTenants($panel))->first();
                            }
                        }

                        $tenantSlug = $tenant instanceof Team
                            ? $tenant->slug
                            : (is_string($tenant) ? $tenant : null);

                        if (filled($tenantSlug)) {
                            return ChatDashboard::getUrl(parameters: ['tenant' => $tenantSlug]);
                        }

                        return $panel?->getUrl() ?? url('/');
                    })
                    ->icon('heroicon-o-chat-bubble-left-right'),

            ])

            ->tenantMiddleware([
                ApplyTenantScopes::class,
                CurrentTenant::class,
            ], isPersistent: true)
            ->tenantMenuItems([
                'dashboard' => Action::make('dashboard')
                    ->label('Dashboard')
                    ->badge(fn () => now()->timezone('Asia/Bangkok')->format('H:i').' 🇹🇭')
                    ->icon(Remix::RiDashboard2Line)
                    ->url(fn () => TeamUserResource::getUrl())
                    ->sort(-1)
                    ->visible(false),
                'register' => fn (Action $action) => $action->label('Register team')
                    ->icon('heroicon-m-user-plus')
                    ->visible(fn () => User::canManageTeam() !== false && ! filament()->getTenant()),
                //    'invitations' => Action::make('invitations')
                //        ->label('Team Invitation')
                //        ->url(fn (): string => TeamInvitationAccept::getUrl())
                //        ->icon('heroicon-m-users')
                //        ->sort(-1)
                //        ->visible(fn () => User::canManageTeam() !== false),
                'profile' => fn (Action $action) => $action->label('Team Settings')
                    ->sort(-1)
                    ->url(fn (): string => filament()->getTenant()->slug.'/profile')
                    ->visible(false),
                'nummer.lista' => Action::make('nummer.lista')
                    ->label('Nummerlista')
                    ->icon('heroicon-o-queue-list')
                    ->badge(fn () => RingaDataResource::getEloquentQuery()->count())
                    ->url(fn () => RingaDataResource::getUrl())
                    ->sort(-1)
                    ->visible(fn () => User::canManageTeam() !== false),
                'users' => Action::make('Users')
                    ->label('Användare')
                    ->icon(Heroicon::UserGroup)
                    ->badge(fn () => UserResource::getEloquentQuery()->count())
                    ->sort(-1)
                    ->url(fn () => UserResource::getUrl())
                    ->visible(fn () => User::canManageTeam() !== false),
            ])
            ->defaultAvatarProvider(DiceBearProvider::class)
            ->plugins([
                DiceBearPlugin::make()
                    ->style(DiceBearStyle::Thumbs),
            ])
        //    ->plugin(
        //        AuthDesignerPlugin::make()
        //            ->login(
        //                fn (AuthPageConfig $config) => $config
        //                    ->media(asset('assets/bangkok.jpg'))
        //                    ->mediaPosition(MediaPosition::Left)
        //                    ->blur(1)
        //                    ->themeToggle()
        //                    ->renderHook(AuthDesignerRenderHook::MediaOverlay, fn () => view('filament.app-logo-auth'))
        //            )
        //    )
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
                    ->onlyPages([ChatDashboard::class])
                    ->excludeResources([
                        ConversationResource::class,
                        MessageResource::class,
                    ]),
            ])
            ->plugin(FilamentUiSwitcherPlugin::make()
                ->withModeSwitcher());
    }

    public function boot(): void
    {

        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::GLOBAL_SEARCH_BEFORE,
        //        function (): \Illuminate\View\View {
        //            return view('filament.app.global-outcome-history-trigger');
        //        }
        //    );

        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::TOPBAR_LOGO_AFTER,
        //        fn () => Blade::render('@livewire(\'filament-ui-switcher\', [\'hasModeSwitcher\' => true])'),
        //    );
        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::SIDEBAR_LOGO_AFTER,
        //        fn () => Blade::render('@livewire(\'filament-ui-switcher\', [\'hasModeSwitcher\' => true])'),
        //    );
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
