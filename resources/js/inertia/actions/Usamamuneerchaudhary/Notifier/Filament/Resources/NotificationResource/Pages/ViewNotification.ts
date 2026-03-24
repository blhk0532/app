import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
const ViewNotificationd496f5c27a7f973dc63a6dc77df95c85 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.url(args, options),
    method: 'get',
})

ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notifications/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
const ViewNotificationd496f5c27a7f973dc63a6dc77df95c85Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
ViewNotificationd496f5c27a7f973dc63a6dc77df95c85Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/notify/notifications/{record}'
*/
ViewNotificationd496f5c27a7f973dc63a6dc77df95c85Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewNotificationd496f5c27a7f973dc63a6dc77df95c85.form = ViewNotificationd496f5c27a7f973dc63a6dc77df95c85Form
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/super/notifications/{record}'
*/
const ViewNotification2fc1dfcf273935c5d73537ec3de4c573 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewNotification2fc1dfcf273935c5d73537ec3de4c573.url(args, options),
    method: 'get',
})

ViewNotification2fc1dfcf273935c5d73537ec3de4c573.definition = {
    methods: ["get","head"],
    url: '/nds/super/notifications/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/super/notifications/{record}'
*/
ViewNotification2fc1dfcf273935c5d73537ec3de4c573.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewNotification2fc1dfcf273935c5d73537ec3de4c573.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/super/notifications/{record}'
*/
ViewNotification2fc1dfcf273935c5d73537ec3de4c573.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewNotification2fc1dfcf273935c5d73537ec3de4c573.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/super/notifications/{record}'
*/
ViewNotification2fc1dfcf273935c5d73537ec3de4c573.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewNotification2fc1dfcf273935c5d73537ec3de4c573.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/super/notifications/{record}'
*/
const ViewNotification2fc1dfcf273935c5d73537ec3de4c573Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewNotification2fc1dfcf273935c5d73537ec3de4c573.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/super/notifications/{record}'
*/
ViewNotification2fc1dfcf273935c5d73537ec3de4c573Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewNotification2fc1dfcf273935c5d73537ec3de4c573.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationResource\Pages\ViewNotification::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationResource/Pages/ViewNotification.php:7
* @route '/nds/super/notifications/{record}'
*/
ViewNotification2fc1dfcf273935c5d73537ec3de4c573Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewNotification2fc1dfcf273935c5d73537ec3de4c573.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewNotification2fc1dfcf273935c5d73537ec3de4c573.form = ViewNotification2fc1dfcf273935c5d73537ec3de4c573Form

const ViewNotification = {
    '/nds/notify/notifications/{record}': ViewNotificationd496f5c27a7f973dc63a6dc77df95c85,
    '/nds/super/notifications/{record}': ViewNotification2fc1dfcf273935c5d73537ec3de4c573,
}

export default ViewNotification