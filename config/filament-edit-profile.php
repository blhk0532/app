<?php

declare(strict_types=1);

return [
    'locales' => [
    ],
    'locale_column' => 'locale',
    'theme_color_column' => 'theme_color',
    'avatar_column' => 'avatar_url',
    'disk' => 'public',
    'visibility' => 'public', // or replace by filesystem disk visibility with fallback value
    'show_custom_fields' => true,
    'custom_fields' => [
        'telavox_token' => [
            'type' => 'text',
            'label' => 'Telavox Token',
            'placeholder' => 'Enter your Telavox token',
        ],
    ],
];
