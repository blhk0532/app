<?php

namespace App\Filament\Admin\Pages;

use Filament\Panel;
use Illuminate\Database\Eloquent\Model;
use Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage;
use Wallo\FilamentCompanies\Pages\User\Profile as BaseProfile;

class Profile extends BaseProfile
{
    public static function getSlug(?Panel $panel = null): string
    {
        return 'profile';
    }

    public static function getUrl(array $parameters = [], bool $isAbsolute = true, ?string $panel = null, ?Model $tenant = null, bool $shouldGuessMissingParameters = false, ?string $configuration = null): string
    {
        return EditProfilePage::getUrl($parameters, $isAbsolute, $panel, $tenant, $shouldGuessMissingParameters, $configuration);
    }

    public static function getRouteName(?Panel $panel = null): string
    {
        return EditProfilePage::getRouteName($panel);
    }

    public function mount(): void
    {
        // $this->redirect(EditProfilePage::getUrl(tenant: filament()->getTenant()));
    }
}
