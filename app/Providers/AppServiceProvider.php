<?php

namespace App\Providers;

use Andreia\FilamentUiSwitcher\FilamentUiSwitcherServiceProvider;
use BezhanSalleh\PanelSwitch\PanelSwitch;
use Carbon\CarbonImmutable;
use Cheesegrits\FilamentGoogleMaps\FilamentGoogleMapsServiceProvider;
use Filament\View\PanelsRenderHook;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->register(FilamentGoogleMapsServiceProvider::class);
        $this->app->register(FilamentUiSwitcherServiceProvider::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDefaults();

        if (app()->environment('production')) {
            URL::forceScheme('https');
        }

        PanelSwitch::configureUsing(function (PanelSwitch $panelSwitch) {

            $user = Auth::user();
            $name = $user?->name ? $user?->name : 'App';

            $panels = ['app', 'admin', 'booking', 'cachet', 'calendar', 'chat', 'data', 'email', 'geo', 'notify', 'queue', 'dev', 'tools', 'super', 'dialer', 'finance', 'manager', 'partner', 'script', 'sheets', 'stats', 'company', 'private', 'system'];
            sort($panels);

            $panelSwitch
                ->panels(['app', 'admin', 'booking', 'cachet', 'calendar', 'chat', 'company', 'data', 'dev', 'dialer', 'email', 'finance', 'geo', 'manager', 'notify', 'partner', 'private', 'queue', 'script', 'sheets', 'stats', 'super', 'system', 'tools'])
                ->modalWidth('sm')
                ->slideOver()
                ->labels([
                    'app' => Str::ucfirst(Str::limit($name, 10)),
                    'admin' => 'Admin',
                    'booking' => 'Bokning',
                    'calendar' => 'Calender',
                    'chat' => 'Chatt',
                    'data' => 'Data',
                    'email' => 'Email',
                    'notify' => 'Notify',
                    'geo' => 'Kartor',
                    'queue' => 'Queue',
                    'super' => 'Super',
                    'tools' => 'Tools',
                    'dev' => 'Content',
                    'cachet' => 'Cache',
                    'super' => 'System',
                    'dialer' => 'Dialer',
                    'finance' => 'Finance',
                    'manager' => 'Manager',
                    'partner' => 'Partner',
                    'script' => 'Script',
                    'sheets' => 'Sheets',
                    'stats' => 'Stats',
                    'company' => 'Company',
                    'private' => 'Private',
                    'system' => 'Settings',
                ])
                ->icons([
                    'app' => 'heroicon-o-user-circle',
                    'admin' => 'heroicon-o-shield-check',
                    'booking' => 'heroicon-o-check-circle',
                    'calendar' => 'heroicon-o-calendar-days',
                    'chat' => 'heroicon-o-chat-bubble-left-right',
                    'data' => 'heroicon-o-list-bullet',
                    'email' => 'heroicon-m-at-symbol',
                    'notify' => 'heroicon-o-megaphone',
                    'queue' => 'heroicon-o-clock',
                    'tools' => 'heroicon-o-bolt',
                    'dev' => 'heroicon-o-code-bracket',
                    'geo' => 'heroicon-o-map',
                    'cachet' => 'heroicon-o-chart-bar',
                    'super' => 'heroicon-o-star',
                    'dialer' => 'heroicon-o-phone',
                    'finance' => 'heroicon-o-currency-dollar',
                    'manager' => 'heroicon-o-briefcase',
                    'partner' => 'heroicon-o-user-group',
                    'script' => 'heroicon-o-document-text',
                    'sheets' => 'heroicon-o-table-cells',
                    'stats' => 'heroicon-o-chart-pie',
                    'company' => 'heroicon-o-building-office',
                    'private' => 'heroicon-o-lock-closed',
                    'system' => 'heroicon-o-cog-6-tooth',
                ]);

            if ($user?->role && $user?->role === 'booking') {
                $panelSwitch
                    ->panels([
                        'app',
                        'admin',
                        'booking',
                        'cachet',
                        'calendar',
                        'chat',
                        'company',
                        'data',
                        'dev',
                        'dialer',
                        'email',
                        'finance',
                        'geo',
                        'manager',
                        'notify',
                        'partner',
                        'private',
                        'queue',
                        'script',
                        'sheets',
                        'stats',
                        'super',
                        'system',
                        'tools',
                    ])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::TOPBAR_LOGO_AFTER)
                    ->sort('asc');
            }

            if ($user?->role && $user?->role === 'manager') {
                $panelSwitch
                    ->panels([
                        'app',
                        'admin',
                        'booking',
                        'cachet',
                        'calendar',
                        'chat',
                        'company',
                        'data',
                        'dev',
                        'dialer',
                        'email',
                        'finance',
                        'geo',
                        'manager',
                        'notify',
                        'partner',
                        'private',
                        'queue',
                        'script',
                        'sheets',
                        'stats',
                        'super',
                        'system',
                        'tools',
                    ])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::TOPBAR_LOGO_AFTER)
                    ->sort('asc');
            }
            if ($user?->role && $user?->role === 'admin') {
                $panelSwitch
                    ->panels([
                        'app',
                        'admin',
                        'booking',
                        'cachet',
                        'calendar',
                        'chat',
                        'company',
                        'data',
                        'dev',
                        'dialer',
                        'email',
                        'finance',
                        'geo',
                        'manager',
                        'notify',
                        'partner',
                        'private',
                        'queue',
                        'script',
                        'sheets',
                        'stats',
                        'super',
                        'system',
                        'tools',
                    ])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::TOPBAR_LOGO_AFTER)
                    ->sort('asc');
            }

            if ($user?->role && $user?->role === 'super') {
                $panelSwitch
                    ->panels([
                        'app',
                        'admin',
                        'booking',
                        'cachet',
                        'calendar',
                        'chat',
                        'company',
                        'data',
                        'dev',
                        'dialer',
                        'email',
                        'finance',
                        'geo',
                        'manager',
                        'notify',
                        'partner',
                        'private',
                        'queue',
                        'script',
                        'sheets',
                        'stats',
                        'super',
                        'system',
                        'tools',
                    ])->iconSize(20)
                    ->renderHook(PanelsRenderHook::TOPBAR_LOGO_AFTER)
                    ->modalWidth('sm');
            }
        });
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(
            fn(): ?Password => app()->isProduction()
                ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
                : null,
        );
    }
}
