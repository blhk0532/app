import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
const NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.url(options),
    method: 'get',
})

NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.url = (options?: RouteQueryOptions) => {
    return NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
const NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88.form = NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88Form
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
const NotificationSettings671c4805e8bd63f52b514c30e7054b70 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotificationSettings671c4805e8bd63f52b514c30e7054b70.url(options),
    method: 'get',
})

NotificationSettings671c4805e8bd63f52b514c30e7054b70.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
NotificationSettings671c4805e8bd63f52b514c30e7054b70.url = (options?: RouteQueryOptions) => {
    return NotificationSettings671c4805e8bd63f52b514c30e7054b70.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
NotificationSettings671c4805e8bd63f52b514c30e7054b70.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotificationSettings671c4805e8bd63f52b514c30e7054b70.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
NotificationSettings671c4805e8bd63f52b514c30e7054b70.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NotificationSettings671c4805e8bd63f52b514c30e7054b70.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
const NotificationSettings671c4805e8bd63f52b514c30e7054b70Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotificationSettings671c4805e8bd63f52b514c30e7054b70.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
NotificationSettings671c4805e8bd63f52b514c30e7054b70Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotificationSettings671c4805e8bd63f52b514c30e7054b70.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
NotificationSettings671c4805e8bd63f52b514c30e7054b70Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotificationSettings671c4805e8bd63f52b514c30e7054b70.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

NotificationSettings671c4805e8bd63f52b514c30e7054b70.form = NotificationSettings671c4805e8bd63f52b514c30e7054b70Form

const NotificationSettings = {
    '/nds/notify/notification-settings': NotificationSettingsa56cb3e16b116c6b45e0f34db55abf88,
    '/nds/super/notification-settings': NotificationSettings671c4805e8bd63f52b514c30e7054b70,
}

export default NotificationSettings