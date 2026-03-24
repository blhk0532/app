<?php

declare(strict_types=1);

use App\Filament\App\Pages\Tenancy\EditTeamProfile;
use App\Providers\Filament\CachetPanelProvider;
use Cachet\Settings\AppSettings;
use Filament\Panel;

it('configures the cachet panel tenant profile page for team settings', function (): void {
    app()->instance(AppSettings::class, new class
    {
        public bool $enable_external_dependencies = false;
    });

    $provider = new CachetPanelProvider(app());
    $panel = $provider->panel(new Panel);

    expect($panel->getTenantProfilePage())->toBe(EditTeamProfile::class)
        ->and($panel->hasTenantProfile())->toBeTrue();
});
