<?php

declare(strict_types=1);

it('registers the cachet tenant profile page for team settings', function (): void {
    $contents = file_get_contents('/home/baba/apps/app_new/app/Providers/Filament/CachetPanelProvider.php');

    expect($contents)
        ->toContain('use App\\Filament\\App\\Pages\\Tenancy\\EditTeamProfile;')
        ->toContain('->tenantProfile(EditTeamProfile::class)');
});

it('hides the topbar close sidebar button for the cachet panel', function (): void {
    $contents = file_get_contents('/home/baba/apps/app_new/resources/views/vendor/filament-panels/livewire/topbar.blade.php');

    expect($contents)
        ->toContain("\$shouldShowTopbarCloseSidebarButton = filament()->getId() !== 'cachet';")
        ->toContain('@if ($shouldShowTopbarCloseSidebarButton)')
        ->toContain('class="fi-topbar-close-sidebar-btn"');
});
