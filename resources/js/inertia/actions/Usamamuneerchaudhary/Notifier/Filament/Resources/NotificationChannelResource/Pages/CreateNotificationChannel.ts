import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
const CreateNotificationChannelcdfea96a248a6e0748283480058bc23b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.url(options),
    method: 'get',
})

CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-channels/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.url = (options?: RouteQueryOptions) => {
    return CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
const CreateNotificationChannelcdfea96a248a6e0748283480058bc23bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
CreateNotificationChannelcdfea96a248a6e0748283480058bc23bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/notify/notification-channels/create'
*/
CreateNotificationChannelcdfea96a248a6e0748283480058bc23bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateNotificationChannelcdfea96a248a6e0748283480058bc23b.form = CreateNotificationChannelcdfea96a248a6e0748283480058bc23bForm
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/super/notification-channels/create'
*/
const CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.url(options),
    method: 'get',
})

CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-channels/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/super/notification-channels/create'
*/
CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.url = (options?: RouteQueryOptions) => {
    return CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/super/notification-channels/create'
*/
CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/super/notification-channels/create'
*/
CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/super/notification-channels/create'
*/
const CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/super/notification-channels/create'
*/
CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationChannelResource\Pages\CreateNotificationChannel::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationChannelResource/Pages/CreateNotificationChannel.php:7
* @route '/nds/super/notification-channels/create'
*/
CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f.form = CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27fForm

const CreateNotificationChannel = {
    '/nds/notify/notification-channels/create': CreateNotificationChannelcdfea96a248a6e0748283480058bc23b,
    '/nds/super/notification-channels/create': CreateNotificationChannelf29ead6ffa30be4ba9150fe57a06a27f,
}

export default CreateNotificationChannel