<?php

declare(strict_types=1);

namespace App\Providers\Filament;

use Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\BookingCalendarResource;
use Adultdate\FilamentBooking\FilamentBookingPlugin;
use AdultDate\FilamentWirechat\Filament\Resources\Conversations\ConversationResource;
use AdultDate\FilamentWirechat\Filament\Resources\Messages\MessageResource;
use AdultDate\FilamentWirechat\FilamentWirechatPlugin;
use AlessandroNuunes\FilamentMember\MemberPlugin;
use AlizHarb\ActivityLog\ActivityLogPlugin;
use AlizHarb\ActivityLog\Widgets\LatestActivityWidget;
use Andreia\FilamentUiSwitcher\FilamentUiSwitcherPlugin;
use App\Filament\Admin\Pages\ControlPanel;
use App\Filament\Admin\Pages\Dashboard;
use App\Filament\Admin\Pages\PersonalAccessTokens;
use App\Filament\Admin\Pages\Profile;
use App\Filament\Admin\Widgets\AccountInfoStackWidget;
use App\Filament\App\Pages\TeamInvitationAccept;
use App\Filament\App\Resources\TeamUsers\TeamUserResource;
use App\Filament\Widgets\ControlPanelWidget;
use App\Http\Middleware\ApplyTenantScopes;
use App\Http\Middleware\CurrentTenant;
use App\Http\Middleware\FilamentPanelAccess;
use App\Http\Middleware\FilamentResourceAccess;
use App\Models\Team;
use App\Models\User;
use Asmit\ResizedColumn\ResizedColumnPlugin;
// use Emuniq\FilamentCollapsibleSubnav\CollapsibleSubnavPlugin;
use Awcodes\Overlook\OverlookPlugin;
use Awcodes\Overlook\Widgets\OverlookWidget;
use BezhanSalleh\FilamentShield\FilamentShieldPlugin;
use Caresome\FilamentAuthDesigner\AuthDesignerPlugin;
use Caresome\FilamentAuthDesigner\Enums\MediaPosition;
use Devletes\FilamentPinnableNavigation\PinnableNavigationPlugin;
use Devonab\FilamentEasyFooter\EasyFooterPlugin;
use Devtical\Sanctum\Pages\Sanctum;
use Filament\Actions\Action;
use Filament\AdvancedExport\AdvancedExportPlugin;
use Filament\Enums\ThemeMode;
use Filament\Facades\Filament;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Navigation\NavigationGroup;
use Filament\Navigation\NavigationItem;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Enums\Width;
use Filament\View\PanelsRenderHook;
use Filament\Widgets;
use Hydrat\TableLayoutToggle\Persisters\LocalStoragePersister;
use Hydrat\TableLayoutToggle\TableLayoutTogglePlugin;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
// use TallCms\Cms\TallCmsPlugin;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use JeffersonGoncalves\Filament\WhatsappWidget\WhatsappWidgetPlugin;
use Joaopaulolndev\FilamentEditProfile\FilamentEditProfilePlugin;
use Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage;
use Joaopaulolndev\FilamentGeneralSettings\FilamentGeneralSettingsPlugin;
use Leandrocfe\FilamentApexCharts\FilamentApexChartsPlugin;
use lockscreen\FilamentLockscreen\Lockscreen;
use MmesDesign\FilamentFileManager\FileManagerPlugin;
use Relaticle\Comments\CommentsPlugin;
use WallaceMartinss\FilamentEvolution\FilamentEvolutionPlugin;
// use Wallo\FilamentCompanies\Pages\User\Profile;
// use Rupadana\ApiService\ApiServicePlugin;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;
use Wallacemartinss\FilamentIconPicker\FilamentIconPickerPlugin;
use Wallo\FilamentCompanies\FilamentCompanies;
use AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard;
class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('auth/admin')
            ->homeUrl(fn () => ControlPanel::getUrl())
            ->tenant(Team::class, slugAttribute: 'slug', ownershipRelationship: null)
            ->viteTheme('resources/css/filament/admin/theme.css')
            // ->login(fn ($config) => $config
            //     ->media(asset('video/853789-hd_1920_1080_25fps.mp4'))
            // )
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
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->brandName('Noridic Digital')
            ->defaultThemeMode(ThemeMode::Dark)
            ->revealablePasswords(true)
            ->passwordReset()
            ->emailChangeVerification()
            ->spaUrlExceptions(['tel:*', 'mailto:*'])
            ->navigationGroups([
                NavigationGroup::make('Boknings Kalendrar')
                    ->icon('heroicon-o-calendar-days'),
            ])

            ->sidebarFullyCollapsibleOnDesktop()
            // ->discoverClusters(in: app_path('Filament/Admin/Clusters'), for: 'App\\Filament\\Admin\\Clusters')
            ->discoverPages(in: app_path('Filament/Admin/Pages'), for: 'App\\Filament\\Admin\\Pages')
            ->discoverResources(in: app_path('Filament/Admin/Resources'), for: 'App\\Filament\\Admin\\Resources')
            //    ->discoverResources(in: app_path('Filament/Cachet/Resources'), for: 'App\\Filament\\Cachet\\Resources')
            // ->discoverWidgets(in: app_path('Filament/Admin/Widgets'), for: 'App\\Filament\\Admin\\Widgets')
            // ->discoverResources(in: app_path('../plugins/adultdate/filament-booking/src/Filament/Resources'), for: 'Adultdate\\FilamentBooking\\Filament\\Resources')

            ->pages([
                //    Sanctum::class,
                TeamInvitationAccept::class,
                Profile::class,
                //    ControlPanel::class,
                PersonalAccessTokens::class,
            ])
            // ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            // ->discoverWidgets(in: app_path('Filament/Admin/Widgets'), for: 'App\Filament\Admin\Widgets')
            ->widgets([
                //    AccountInfoStackWidget::class,
                //    OverlookWidget::class,
                //    LatestActivityWidget::class,
                ControlPanelWidget::class,
            ])
            ->resources([
                //    BookingCalendarResource::class,
                TeamUserResource::class,
                config('filament-logger.activity_resource'),
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
            // ->plugin(TallCmsPlugin::make())
            ->plugins([
                FilamentApexChartsPlugin::make(),
                FilamentEvolutionPlugin::make(),
                //    MemberPlugin::make(),
                AdvancedExportPlugin::make(),
                //    ApiServicePlugin::make()
            ])
            ->plugins([
                FileManagerPlugin::make()
                    ->defaultDisk('public')
                    ->navigationGroup('System LOGS')
                    ->navigationIcon('heroicon-o-folder')
                    ->navigationSort(5),
            ])
            ->plugin(PinnableNavigationPlugin::make())
            ->plugins([
                //    FilamentGeneralSettingsPlugin::make()
                //        ->canAccess(fn () => Auth::user()->role === 'super')
                //        ->setSort(3)
                //        ->setIcon('heroicon-o-cog')
                //        ->setNavigationGroup('Settings')
                //        ->setTitle('Settings')
                //        ->setNavigationLabel('Settings'),
            ])
            ->plugins([])
            ->plugins([
                OverlookPlugin::make()
                    ->sort(2)
                    ->columns([
                        'default' => 1,
                        'sm' => 2,
                        'md' => 3,
                        'lg' => 4,
                        'xl' => 5,
                        '2xl' => null,
                    ]),
            ])
            ->plugins($this->optionalPanelPlugins())
            ->plugins([
                //  WhatsappWidgetPlugin::make(),
            ])
            ->plugins([
                //    ActivityLogPlugin::make()
                //        ->label('Log')
                //        ->pluralLabel('Logs')
                //        ->navigationGroup('System'),
            ])
        //    ->plugins([
        //        EasyFooterPlugin::make()
        //            ->hiddenFromPagesEnabled()
        //            ->hiddenFromPages(['sample-page', 'another-page', 'admin/login', 'admin/forgot-password', 'admin/register'])
        //            ->withBorder()
        //            ->withLoadTime()
        //            ->withLogo(
        //                'https://static.cdnlogo.com/logos/l/23/laravel.svg', // Path to logo
        //                null,                                                // No link
        //                null,                                                // No text
        //                24                                                   // Logo height in pixels
        //            )
        //            ->withLinks([
        //                ['title' => 'ndsth.com', 'url' => 'https://ndsth.com', 'target' => '_blank'],
        //            ]),
        //    ])
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
                FilamentEditProfilePlugin::make()
                    ->slug('my-profile')
                    ->setTitle(__(' '))
                    ->setNavigationLabel(__(' '))
                    ->setNavigationGroup(__(' '))
                    ->setIcon('heroicon-o-user')
                    ->setSort(10)
                    ->shouldRegisterNavigation(false)
                    ->shouldShowEmailForm()
                    ->shouldShowLocaleForm(options: [
                        'en' => __('🇺🇸 English'),
                        'es' => __('🇪🇸 Svenska'),
                    ])
                    ->shouldShowThemeColorForm()
                    ->shouldShowSanctumTokens()
                    ->shouldShowMultiFactorAuthentication()
                    ->shouldShowBrowserSessionsForm()
                    ->shouldShowAvatarForm(true, 'attachments'),
            ])
            ->plugins([
                ResizedColumnPlugin::make(),
                FilamentIconPickerPlugin::make(),
                Lockscreen::make()
                    ->enableRateLimit() // Enable rate limit for the lockscreen. Default: Enable, 5 attempts in 1 minute.
                    ->enableIdleTimeout() // Enable auto lock during idle time. Default: Enable, 30 minutes.
                    ->disableDisplayName() // Display the name of the user based on the attribute supplied. Default: name
                    ->enablePlugin(), // Enable the plugin.
            ])
            ->plugins([
                FilamentBookingPlugin::make(),
            ])
            ->plugins([
                CommentsPlugin::make(),
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
            ->userMenuItems([
                'profile' => Action::make('profile')
                    ->label(fn () => Str::ucfirst(Auth::user()->getNdsUserName()))
                    ->url(function (): string {
                        $panel = Filament::getCurrentOrDefaultPanel();
                        $tenant = filament()->getTenant();

                        if (! $tenant) {
                            $user = Filament::auth()->user();

                            if ($user && method_exists($user, 'getDefaultTenant')) {
                                $tenant = $user->getDefaultTenant($panel);
                            }

                        }

                        if ($tenant) {
                            return EditProfilePage::getUrl(tenant: $tenant);
                        }

                        return $panel?->getUrl() ?? url('/');
                    })
                    ->icon('heroicon-o-user-circle'),
                Action::make('sanctum')
                    ->label(trans('Auth Tokens'))
                    ->url('/auth/admin/'.config('filament-sanctum.navigation.slug'))
                    ->icon(config('filament-sanctum.navigation.icon', 'heroicon-o-finger-print')),
                Action::make('company')
                    ->label('Company')
                    ->icon('heroicon-o-building-office')
                    ->visible(fn () => FilamentCompanies::hasCompanyPanel())
                    ->url(static fn () => Dashboard::getUrl(panel: FilamentCompanies::getCompanyPanel(), tenant: Auth::user()->personalCompany())),
            ])
            ->navigationItems([
                NavigationItem::make('Access Tokens')
                    ->icon('heroicon-o-finger-print')
                    ->badge(fn () => Auth::user()->tokens()->count())
                    ->url(static fn () => PersonalAccessTokens::getUrl()),
            ])
            ->tenantMiddleware([
                ApplyTenantScopes::class,
                CurrentTenant::class,
            ], isPersistent: true)
            ->tenantMenuItems([
                'team-users' => Action::make('team-users')
                    ->label('Dashboard')
                    ->badge(fn () => now()->timezone('Asia/Bangkok')->format('H:i').' 🇹🇭')
                    ->icon(Remix::RiDashboard2Line)
                    ->url(fn () => TeamUserResource::getUrl())
                    ->sort(-1)
                    ->visible(false),
                'register' => fn (Action $action) => $action->label('Register team')
                    ->icon('heroicon-m-user-plus')
                    ->visible(fn () => User::canManageTeam() !== false && ! filament()->getTenant()),
                'invitations' => Action::make('invitations')
                    ->label('Team Invitation')
                    ->url(fn (): string => TeamInvitationAccept::getUrl())
                    ->icon('heroicon-m-users')
                    ->sort(-1)
                    ->visible(fn () => User::canManageTeam() !== false),
                'profile' => fn (Action $action) => $action->label('Team Settings')
                    ->sort(-1)
                    ->visible(fn () => User::canManageTeam() !== false),
            ])
        //    ->plugin(
        //        FilamentShieldPlugin::make()
        //            ->navigationLabel('Roles')                  // string|Closure|null
        //            ->navigationIcon('heroicon-o-shield-check')         // string|Closure|null
        //            ->activeNavigationIcon('heroicon-s-shield-check')   // string|Closure|null
        //            ->navigationGroup('Användare')                  // string|Closure|null
        //            ->navigationSort(10)                        // int|Closure|null
        //            ->navigationBadge('Roles')                      // string|Closure|null
        //            ->navigationBadgeColor('success')           // string|array|Closure|null
        //        //    ->scopeToTenant(true)
        //    )
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
                ->withModeSwitcher()
                ->iconRenderHook(PanelsRenderHook::USER_MENU_BEFORE))
            ->unsavedChangesAlerts()
            ->passwordReset()
            ->databaseNotifications()
            ->databaseNotificationsPolling('30s');
    }

    /**
     * @return array<int, mixed>
     */
    private function optionalPanelPlugins(): array
    {
        $plugins = [];
        $collapsibleSubnavPluginClass = 'Emuniq\\FilamentCollapsibleSubnav\\CollapsibleSubnavPlugin';

        if (class_exists($collapsibleSubnavPluginClass)) {
            $plugins[] = $collapsibleSubnavPluginClass::make();
        }

        return $plugins;
    }
}
