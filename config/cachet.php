<?php

declare(strict_types=1);

use App\Models\User;

return [
    'enabled' => env('CACHET_ENABLED', true),
    'path' => env('CACHET_PATH', '/status'),
    'domain' => env('CACHET_DOMAIN'),
    'guard' => env('CACHET_GUARD', null),
    'user_model' => env('CACHET_USER_MODEL', User::class),
    'user_migrations' => env('CACHET_USER_MIGRATIONS', true),
    'middleware' => [
        'web',
    ],
    'api_middleware' => [
        'api',
    ],
];
