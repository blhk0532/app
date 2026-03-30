<?php

declare(strict_types=1);

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class TelavoxSettings extends Settings
{
    public ?string $api_token = null;

    public static function group(): string
    {
        return 'telavox';
    }

    public static function defaults(): array
    {
        \Log::debug('TelavoxSettings defaults called', ['token' => config('telavox.token')]);

        return [
            'api_token' => config('telavox.token'),
        ];
    }
}
