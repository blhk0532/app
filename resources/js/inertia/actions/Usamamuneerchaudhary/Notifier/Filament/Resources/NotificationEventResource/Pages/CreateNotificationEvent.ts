import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/notify/notification-events/create'
*/
const CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.url(options),
    method: 'get',
})

CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-events/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/notify/notification-events/create'
*/
CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.url = (options?: RouteQueryOptions) => {
    return CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/notify/notification-events/create'
*/
CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/notify/notification-events/create'
*/
CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/notify/notification-events/create'
*/
const CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/notify/notification-events/create'
*/
CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/notify/notification-events/create'
*/
CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f.form = CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10fForm
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/super/notification-events/create'
*/
const CreateNotificationEvent6380dad05993879b0185b3348510ce89 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationEvent6380dad05993879b0185b3348510ce89.url(options),
    method: 'get',
})

CreateNotificationEvent6380dad05993879b0185b3348510ce89.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-events/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/super/notification-events/create'
*/
CreateNotificationEvent6380dad05993879b0185b3348510ce89.url = (options?: RouteQueryOptions) => {
    return CreateNotificationEvent6380dad05993879b0185b3348510ce89.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/super/notification-events/create'
*/
CreateNotificationEvent6380dad05993879b0185b3348510ce89.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationEvent6380dad05993879b0185b3348510ce89.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/super/notification-events/create'
*/
CreateNotificationEvent6380dad05993879b0185b3348510ce89.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateNotificationEvent6380dad05993879b0185b3348510ce89.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/super/notification-events/create'
*/
const CreateNotificationEvent6380dad05993879b0185b3348510ce89Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationEvent6380dad05993879b0185b3348510ce89.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/super/notification-events/create'
*/
CreateNotificationEvent6380dad05993879b0185b3348510ce89Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationEvent6380dad05993879b0185b3348510ce89.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationEventResource\Pages\CreateNotificationEvent::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationEventResource/Pages/CreateNotificationEvent.php:7
* @route '/nds/super/notification-events/create'
*/
CreateNotificationEvent6380dad05993879b0185b3348510ce89Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationEvent6380dad05993879b0185b3348510ce89.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateNotificationEvent6380dad05993879b0185b3348510ce89.form = CreateNotificationEvent6380dad05993879b0185b3348510ce89Form

const CreateNotificationEvent = {
    '/nds/notify/notification-events/create': CreateNotificationEvent3ab81bcbcae59f850ada3314038dd10f,
    '/nds/super/notification-events/create': CreateNotificationEvent6380dad05993879b0185b3348510ce89,
}

export default CreateNotificationEvent