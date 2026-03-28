<?php

declare(strict_types=1);

namespace App\Filament\Admin\Pages\Auth;

use Caresome\FilamentAuthDesigner\AuthDesignerPlugin;
use Caresome\FilamentAuthDesigner\Concerns\HasAuthDesignerLayout;
use Caresome\FilamentAuthDesigner\Enums\MediaPosition;
use Filament\Auth\Pages\Login as BaseLogin;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class Login extends BaseLogin
{
    use HasAuthDesignerLayout;

    public function schema(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('login')
                ->label('Email, Name, or Phone')
                ->required()
                ->autocomplete('username'),
            $this->getPasswordFormComponent(),
            $this->getRememberFormComponent(),
        ]);
    }

    protected function getCredentialsFromFormData(array $data): array
    {
        $login = (string) ($data['login'] ?? '');

        if (filter_var($login, FILTER_VALIDATE_EMAIL)) {
            return [
                'email' => $login,
                'password' => $data['password'],
            ];
        }

        // Check if login is a phone number (contains only digits, optional leading +)
        $normalizedPhone = preg_replace('/[^0-9+]/', '', $login);
        if (preg_match('/^\+?[0-9]+$/', $normalizedPhone)) {
            return [
                'phone' => $login,
                'password' => $data['password'],
            ];
        }

        // Default to name
        return [
            'name' => $login,
            'password' => $data['password'],
        ];
    }

    protected function getAuthDesignerPageKey(): string
    {
        return 'login';
    }
}

// In your panel provider:
AuthDesignerPlugin::make()
    ->login(fn ($config) => $config
        ->media(asset('assets/background.jpg'))
        ->mediaPosition(MediaPosition::Cover)
        ->usingPage(Login::class)
    );
