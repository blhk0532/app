import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
const EditNotificationChanneld469bd107bc41e81baede4256c17422b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationChanneld469bd107bc41e81baede4256c17422b.url(args, options),
    method: 'get',
})

EditNotificationChanneld469bd107bc41e81baede4256c17422b.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-channels/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
EditNotificationChanneld469bd107bc41e81baede4256c17422b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditNotificationChanneld469bd107bc41e81baede4256c17422b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
EditNotificationChanneld469bd107bc41e81baede4256c17422b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationChanneld469bd107bc41e81baede4256c17422b.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
EditNotificationChanneld469bd107bc41e81baede4256c17422b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditNotificationChanneld469bd107bc41e81baede4256c17422b.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
const EditNotificationChanneld469bd107bc41e81baede4256c17422bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationChanneld469bd107bc41e81baede4256c17422b.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
EditNotificationChanneld469bd107bc41e81baede4256c17422bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationChanneld469bd107bc41e81baede4256c17422b.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
EditNotificationChanneld469bd107bc41e81baede4256c17422bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationChanneld469bd107bc41e81baede4256c17422b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditNotificationChanneld469bd107bc41e81baede4256c17422b.form = EditNotificationChanneld469bd107bc41e81baede4256c17422bForm
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/super/notification-channels/{record}/edit'
*/
const EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.url(args, options),
    method: 'get',
})

EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-channels/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/super/notification-channels/{record}/edit'
*/
EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/super/notification-channels/{record}/edit'
*/
EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/super/notification-channels/{record}/edit'
*/
EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/super/notification-channels/{record}/edit'
*/
const EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/super/notification-channels/{record}/edit'
*/
EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/super/notification-channels/{record}/edit'
*/
EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0.form = EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0Form

const EditNotificationChannel = {
    '/nds/notify/notification-channels/{record}/edit': EditNotificationChanneld469bd107bc41e81baede4256c17422b,
    '/nds/super/notification-channels/{record}/edit': EditNotificationChanneld627ba6a8b80e8c8adbbc75ed8cda2b0,
}

export default EditNotificationChannel