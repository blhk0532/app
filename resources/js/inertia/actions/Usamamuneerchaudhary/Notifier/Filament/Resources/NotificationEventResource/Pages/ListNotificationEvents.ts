import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/notify/notification-events'
*/
const ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.url(options),
    method: 'get',
})

ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/notify/notification-events'
*/
ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.url = (options?: RouteQueryOptions) => {
    return ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/notify/notification-events'
*/
ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/notify/notification-events'
*/
ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/notify/notification-events'
*/
const ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/notify/notification-events'
*/
ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/notify/notification-events'
*/
ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5.form = ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5Form
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/super/notification-events'
*/
const ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.url(options),
    method: 'get',
})

ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/super/notification-events'
*/
ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.url = (options?: RouteQueryOptions) => {
    return ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/super/notification-events'
*/
ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/super/notification-events'
*/
ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/super/notification-events'
*/
const ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/super/notification-events'
*/
ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\ListNotificationEvents::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/ListNotificationEvents.php:7
* @route '/nds/super/notification-events'
*/
ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4.form = ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4Form

const ListNotificationEvents = {
    '/nds/notify/notification-events': ListNotificationEvents8da1c889a2b0af1a07522fd954d1eae5,
    '/nds/super/notification-events': ListNotificationEvents0ebc0d6fe202cf3dea4dd551139ad9f4,
}

export default ListNotificationEvents