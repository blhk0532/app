<?php

use Cachet\Settings\AppSettings;
use Cachet\Settings\CustomizationSettings;
use Cachet\Settings\Repositories\TenantAwareDatabaseRepository;
use Cachet\Settings\ThemeSettings;

return [

    /*
     * Each settings class used in your application must be registered, you can
     * put them (manually) here.
     */
    'settings' => [
        AppSettings::class,
        CustomizationSettings::class,
        ThemeSettings::class,
    ],

    /*
     * The path where the settings classes will be created.
     */
    'setting_class_path' => app_path('Settings'),

    /*
     * In these directories settings migrations will be stored and ran when migr
ating. A settings
     * migration created via the make:settings-migration command will be stored in the first path or
     * a custom defined path when running the command.
     */
    'migrations_paths' => [
        database_path('settings'),
    ],

    /*
     * When no repository was set for a settings class the following repository
     * will be used for loading and saving settings.
     */
    'default_repository' => 'tenant-aware-database',

    /*
     * Settings will be stored and loaded from these repositories.
     */
    'repositories' => [
        'tenant-aware-database' => [
            'type' => TenantAwareDatabaseRepository::class,
            'model' => null,
            'table' => null,
        ],
    ],

];
