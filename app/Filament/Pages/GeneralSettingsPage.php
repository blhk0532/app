<?php

namespace App\Filament\Pages;

use Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage as BaseGeneralSettingsPage;

class GeneralSettingsPage extends BaseGeneralSettingsPage
{
    public function mount(): void
    {
        parent::mount();

        // Initialize site_description if not set
        $this->data['site_description'] = $this->data['site_description'] ?? '';
    }
}
