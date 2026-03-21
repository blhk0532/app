<?php

namespace App\Filament\Pages;

use Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage as BaseGeneralSettingsPage;

class GeneralSettingsPage extends BaseGeneralSettingsPage
{
    public function mount(): void
    {
        parent::mount();

        $this->data['site_description'] = $this->data['site_description'] ?? '';
        $this->data['google_analytics_id'] = $this->data['google_analytics_id'] ?? '';
        $this->data['posthog_html_snippet'] = $this->data['posthog_html_snippet'] ?? '';
    }
}
