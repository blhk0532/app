import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
const ListNotificationsb765ca4f006a421444226bc0029369ca = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationsb765ca4f006a421444226bc0029369ca.url(options),
    method: 'get',
})

ListNotificationsb765ca4f006a421444226bc0029369ca.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
ListNotificationsb765ca4f006a421444226bc0029369ca.url = (options?: RouteQueryOptions) => {
    return ListNotificationsb765ca4f006a421444226bc0029369ca.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
ListNotificationsb765ca4f006a421444226bc0029369ca.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationsb765ca4f006a421444226bc0029369ca.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
ListNotificationsb765ca4f006a421444226bc0029369ca.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationsb765ca4f006a421444226bc0029369ca.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
const ListNotificationsb765ca4f006a421444226bc0029369caForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationsb765ca4f006a421444226bc0029369ca.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
ListNotificationsb765ca4f006a421444226bc0029369caForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationsb765ca4f006a421444226bc0029369ca.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
ListNotificationsb765ca4f006a421444226bc0029369caForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationsb765ca4f006a421444226bc0029369ca.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListNotificationsb765ca4f006a421444226bc0029369ca.form = ListNotificationsb765ca4f006a421444226bc0029369caForm
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/super/notifications'
*/
const ListNotifications029e2a467d8ec10bfe75829758a4f1d6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotifications029e2a467d8ec10bfe75829758a4f1d6.url(options),
    method: 'get',
})

ListNotifications029e2a467d8ec10bfe75829758a4f1d6.definition = {
    methods: ["get","head"],
    url: '/nds/super/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/super/notifications'
*/
ListNotifications029e2a467d8ec10bfe75829758a4f1d6.url = (options?: RouteQueryOptions) => {
    return ListNotifications029e2a467d8ec10bfe75829758a4f1d6.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/super/notifications'
*/
ListNotifications029e2a467d8ec10bfe75829758a4f1d6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotifications029e2a467d8ec10bfe75829758a4f1d6.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/super/notifications'
*/
ListNotifications029e2a467d8ec10bfe75829758a4f1d6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotifications029e2a467d8ec10bfe75829758a4f1d6.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/super/notifications'
*/
const ListNotifications029e2a467d8ec10bfe75829758a4f1d6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotifications029e2a467d8ec10bfe75829758a4f1d6.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/super/notifications'
*/
ListNotifications029e2a467d8ec10bfe75829758a4f1d6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotifications029e2a467d8ec10bfe75829758a4f1d6.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/super/notifications'
*/
ListNotifications029e2a467d8ec10bfe75829758a4f1d6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotifications029e2a467d8ec10bfe75829758a4f1d6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListNotifications029e2a467d8ec10bfe75829758a4f1d6.form = ListNotifications029e2a467d8ec10bfe75829758a4f1d6Form

const ListNotifications = {
    '/nds/notify/notifications': ListNotificationsb765ca4f006a421444226bc0029369ca,
    '/nds/super/notifications': ListNotifications029e2a467d8ec10bfe75829758a4f1d6,
}

export default ListNotifications