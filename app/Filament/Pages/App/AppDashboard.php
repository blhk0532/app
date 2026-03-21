<?php

declare(strict_types=1);

namespace App\Filament\Pages\App;

use Filament\Pages\Dashboard as BaseDashboard;
use Illuminate\Database\Eloquent\Model;

class AppDashboard extends BaseDashboard
{
    // Compatibility shim for the alternate namespace that some
    // plugins / Livewire expect. Prevent this shim from registering
    // navigation items or Spotlight entries for the admin panel.

    // Prevent this shim from being auto-discovered/registered by panels.
    protected static bool $isDiscovered = false;

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    public static function shouldRegisterSpotlight(): bool
    {
        return false;
    }

    public static function getUrl(array $parameters = [], bool $isAbsolute = true, ?string $panel = null, ?Model $tenant = null, bool $shouldGuessMissingParameters = false, ?string $configuration = null): string
    {
        return parent::getUrl($parameters, $isAbsolute, $panel ?? 'app', $tenant, $shouldGuessMissingParameters, $configuration);
    }
}
