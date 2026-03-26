<?php

namespace App\Filament\Admin\Pages;

use Filament\Panel;
use Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage;

class Profile extends EditProfilePage
{
    public static function getSlug(?Panel $panel = null): string
    {
        return 'profile';
    }
}
