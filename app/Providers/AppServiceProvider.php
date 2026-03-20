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

            $panelSwitch
                ->panels(['admin', 'app'])
                ->modalWidth('sm')
                ->slideOver()
                ->labels([
                    'app' => Str::ucfirst(Str::limit($name, 10)),
                    'admin' => 'Admin',
                    'booking' => 'Bokning',
                    'calendar' => 'Calendar',
                    'chat' => 'Chat',
                    'data' => 'Data',
                    'email' => 'Email',
                    'notify' => 'Notify',
                    'geo' => 'Geo',
                    'queue' => 'Queue',
                    'super' => 'Super',
                    'tools' => 'Tools',
                    'dev' => 'Dev',

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
                    'queue' => 'heroicon-c-queue-list',
                    'tools' => 'heroicon-s-bolt',
                    'dev' => 'heroicon-o-code-bracket',
                    'geo' => 'heroicon-o-map',
                ]);

            if ($user?->role && $user?->role === 'booking') {
                $panelSwitch
                    ->panels(['app', 'booking', 'calendar', 'chat'])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::GLOBAL_SEARCH_BEFORE)
                    ->sort('asc');
            }

            if ($user?->role && $user?->role === 'manager') {
                $panelSwitch
                    ->panels(['app', 'admin', 'booking', 'calendar', 'chat', 'email',  'notify', 'queue', 'geo'])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::GLOBAL_SEARCH_BEFORE)
                    ->sort('asc');
            }

            if ($user?->role && $user?->role === 'admin') {
                $panelSwitch
                    ->panels(['app', 'admin', 'booking', 'calendar', 'chat', 'email',  'notify', 'queue', 'geo'])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::GLOBAL_SEARCH_BEFORE)
                    ->sort('asc');
            }

            if ($user?->role && $user?->role === 'super') {
                $panelSwitch
                    ->panels(['app', 'admin', 'booking', 'calendar', 'chat', 'data', 'email', 'geo', 'notify', 'queue', 'dev', 'tools'])
                    ->iconSize(20)
                    ->renderHook(PanelsRenderHook::GLOBAL_SEARCH_BEFORE)
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

        Password::defaults(fn (): ?Password => app()->isProduction()
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
