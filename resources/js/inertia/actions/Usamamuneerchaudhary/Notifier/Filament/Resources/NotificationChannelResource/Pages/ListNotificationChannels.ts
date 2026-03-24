import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
const ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.url(options),
    method: 'get',
})

ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-channels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.url = (options?: RouteQueryOptions) => {
    return ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
const ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4.form = ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4Form
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/super/notification-channels'
*/
const ListNotificationChannelscaa3073dcd669e3efc26afece0838b43 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.url(options),
    method: 'get',
})

ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-channels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/super/notification-channels'
*/
ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.url = (options?: RouteQueryOptions) => {
    return ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/super/notification-channels'
*/
ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/super/notification-channels'
*/
ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/super/notification-channels'
*/
const ListNotificationChannelscaa3073dcd669e3efc26afece0838b43Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/super/notification-channels'
*/
ListNotificationChannelscaa3073dcd669e3efc26afece0838b43Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/super/notification-channels'
*/
ListNotificationChannelscaa3073dcd669e3efc26afece0838b43Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListNotificationChannelscaa3073dcd669e3efc26afece0838b43.form = ListNotificationChannelscaa3073dcd669e3efc26afece0838b43Form

const ListNotificationChannels = {
    '/nds/notify/notification-channels': ListNotificationChannels48bc2a622c763cb1725a2c617035c6f4,
    '/nds/super/notification-channels': ListNotificationChannelscaa3073dcd669e3efc26afece0838b43,
}

export default ListNotificationChannels