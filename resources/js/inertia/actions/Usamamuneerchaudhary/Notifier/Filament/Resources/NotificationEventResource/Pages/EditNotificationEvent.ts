import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/notify/notification-events/{record}/edit'
*/
const EditNotificationEvente2aa9b572b27acd194682af974cedc03 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationEvente2aa9b572b27acd194682af974cedc03.url(args, options),
    method: 'get',
})

EditNotificationEvente2aa9b572b27acd194682af974cedc03.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-events/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/notify/notification-events/{record}/edit'
*/
EditNotificationEvente2aa9b572b27acd194682af974cedc03.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditNotificationEvente2aa9b572b27acd194682af974cedc03.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/notify/notification-events/{record}/edit'
*/
EditNotificationEvente2aa9b572b27acd194682af974cedc03.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationEvente2aa9b572b27acd194682af974cedc03.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/notify/notification-events/{record}/edit'
*/
EditNotificationEvente2aa9b572b27acd194682af974cedc03.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditNotificationEvente2aa9b572b27acd194682af974cedc03.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/notify/notification-events/{record}/edit'
*/
const EditNotificationEvente2aa9b572b27acd194682af974cedc03Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationEvente2aa9b572b27acd194682af974cedc03.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/notify/notification-events/{record}/edit'
*/
EditNotificationEvente2aa9b572b27acd194682af974cedc03Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationEvente2aa9b572b27acd194682af974cedc03.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/notify/notification-events/{record}/edit'
*/
EditNotificationEvente2aa9b572b27acd194682af974cedc03Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationEvente2aa9b572b27acd194682af974cedc03.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditNotificationEvente2aa9b572b27acd194682af974cedc03.form = EditNotificationEvente2aa9b572b27acd194682af974cedc03Form
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/super/notification-events/{record}/edit'
*/
const EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.url(args, options),
    method: 'get',
})

EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-events/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/super/notification-events/{record}/edit'
*/
EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/super/notification-events/{record}/edit'
*/
EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/super/notification-events/{record}/edit'
*/
EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/super/notification-events/{record}/edit'
*/
const EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/super/notification-events/{record}/edit'
*/
EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\EditNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/EditNotificationEvent.php:7
* @route '/nds/super/notification-events/{record}/edit'
*/
EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87.form = EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87Form

const EditNotificationEvent = {
    '/nds/notify/notification-events/{record}/edit': EditNotificationEvente2aa9b572b27acd194682af974cedc03,
    '/nds/super/notification-events/{record}/edit': EditNotificationEventf718958a3cac1b22bb87b58a9ac53c87,
}

export default EditNotificationEvent