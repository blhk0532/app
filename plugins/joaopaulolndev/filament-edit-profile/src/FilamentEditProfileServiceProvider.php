<?php

declare(strict_types=1);

namespace Joaopaulolndev\FilamentEditProfile;

use Joaopaulolndev\FilamentEditProfile\Commands\FilamentEditProfileCommand;
use Joaopaulolndev\FilamentEditProfile\Livewire\BrowserSessionsForm;
use Joaopaulolndev\FilamentEditProfile\Livewire\CustomFieldsForm;
use Joaopaulolndev\FilamentEditProfile\Livewire\DeleteAccountForm;
use Joaopaulolndev\FilamentEditProfile\Livewire\EditPasswordForm;
use Joaopaulolndev\FilamentEditProfile\Livewire\EditProfileForm;
use Joaopaulolndev\FilamentEditProfile\Livewire\MultiFactorAuthentication;
use Joaopaulolndev\FilamentEditProfile\Livewire\SanctumTokens;
use Livewire\Livewire;
use Spatie\LaravelPackageTools\Commands\InstallCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentEditProfileServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-edit-profile';

    public static string $viewNamespace = 'filament-edit-profile';

    public static function migrationFileExists(string $migrationFileName): bool
    {
        $len = mb_strlen($migrationFileName);
        foreach (glob(database_path('migrations/*.php.stub')) as $filename) {
            if ((mb_substr($filename, -$len) === $migrationFileName)) {
                return true;
            }
        }

        return false;
    }

    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package->name(self::$name)
            ->hasCommands($this->getCommands())
            ->hasInstallCommand(function (InstallCommand $command) {
                $command
                    ->publishConfigFile()
                    ->publishMigrations()
                    ->askToRunMigrations()
                    ->askToStarRepoOnGitHub('joaopaulolndev/filament-edit-profile');
            });

        $configFileName = $package->shortName();

        if (file_exists($package->basePath("/../config/{$configFileName}.php"))) {
            $package->hasConfigFile();
        }

        if (file_exists($package->basePath('/../database/migrations'))) {
            $package->hasMigrations($this->getMigrations());
        }

        if (file_exists($package->basePath('/../resources/lang'))) {
            $package->hasTranslations();
        }

        if (file_exists($package->basePath('/../resources/views'))) {
            $package->hasViews(self::$viewNamespace);
        }
    }

    private function registerLivewireComponents(): void
    {
        Livewire::component('edit_profile_form', EditProfileForm::class);
        Livewire::component('edit_password_form', EditPasswordForm::class);
        Livewire::component('delete_account_form', DeleteAccountForm::class);
        Livewire::component('multi_factor_authentication', MultiFactorAuthentication::class);
        Livewire::component('sanctum_tokens', SanctumTokens::class);
        Livewire::component('browser_sessions_form', BrowserSessionsForm::class);

        if (config('filament-edit-profile.show_custom_fields') && ! empty(config('filament-edit-profile.custom_fields'))) {
            Livewire::component('custom_fields_form', CustomFieldsForm::class);
        }
    }

    protected function getAssetPackageName(): ?string
    {
        return 'Joaopaulolndev/filament-edit-profile';
    }

    /**
     * @return array<class-string>
     */
    protected function getCommands(): array
    {
        return [
            FilamentEditProfileCommand::class,
        ];
    }

    /**
     * @return array<string>
     */
    protected function getMigrations(): array
    {
        return [
            'add_custom_fields_to_users_table',
            'add_avatar_url_to_users_table',
            'add_locale_to_users_table',
            'add_theme_color_to_users_table',
        ];
    }
}
