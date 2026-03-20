<?php

declare(strict_types=1);

use Adultdate\FilamentAuth\Filament\Pages\AuthLogin;
use App\Filament\Admin\Pages\Auth\Login as AdminLogin;

it('maps login email input to email credentials in filament auth login', function (): void {
    $loginPage = new class extends AuthLogin
    {
        /**
         * @param  array<string, mixed>  $data
         * @return array<string, mixed>
         */
        public function exposedCredentials(array $data): array
        {
            return $this->getCredentialsFromFormData($data);
        }
    };

    $credentials = $loginPage->exposedCredentials([
        'login' => 'jane@example.com',
        'password' => 'secret',
    ]);

    expect($credentials)->toBe([
        'email' => 'jane@example.com',
        'password' => 'secret',
    ]);
});

it('maps login name input to name credentials in filament auth login', function (): void {
    $loginPage = new class extends AuthLogin
    {
        /**
         * @param  array<string, mixed>  $data
         * @return array<string, mixed>
         */
        public function exposedCredentials(array $data): array
        {
            return $this->getCredentialsFromFormData($data);
        }
    };

    $credentials = $loginPage->exposedCredentials([
        'login' => 'jane-doe',
        'password' => 'secret',
    ]);

    expect($credentials)->toBe([
        'name' => 'jane-doe',
        'password' => 'secret',
    ]);
});

it('maps login email input to email credentials in admin login page', function (): void {
    $loginPage = new class extends AdminLogin
    {
        /**
         * @param  array<string, mixed>  $data
         * @return array<string, mixed>
         */
        public function exposedCredentials(array $data): array
        {
            return $this->getCredentialsFromFormData($data);
        }
    };

    $credentials = $loginPage->exposedCredentials([
        'login' => 'john@example.com',
        'password' => 'secret',
    ]);

    expect($credentials)->toBe([
        'email' => 'john@example.com',
        'password' => 'secret',
    ]);
});

it('maps login name input to name credentials in admin login page', function (): void {
    $loginPage = new class extends AdminLogin
    {
        /**
         * @param  array<string, mixed>  $data
         * @return array<string, mixed>
         */
        public function exposedCredentials(array $data): array
        {
            return $this->getCredentialsFromFormData($data);
        }
    };

    $credentials = $loginPage->exposedCredentials([
        'login' => 'john-doe',
        'password' => 'secret',
    ]);

    expect($credentials)->toBe([
        'name' => 'john-doe',
        'password' => 'secret',
    ]);
});
