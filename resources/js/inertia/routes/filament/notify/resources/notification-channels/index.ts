import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-channels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\ListNotificationChannels::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/ListNotificationChannels.php:7
* @route '/nds/notify/notification-channels'
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
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-channels/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-channels/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\EditNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/EditNotificationChannel.php:7
* @route '/nds/notify/notification-channels/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const notificationChannels = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default notificationChannels