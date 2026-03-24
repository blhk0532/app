import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ListNotifications::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ListNotifications.php:7
* @route '/nds/notify/notifications'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notifications/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const notifications = {
    index: Object.assign(index, index),
    view: Object.assign(view, view),
}

export default notifications