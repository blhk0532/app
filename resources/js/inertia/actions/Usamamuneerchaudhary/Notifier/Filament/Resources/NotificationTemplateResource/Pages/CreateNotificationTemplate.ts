import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/create'
*/
const CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.url(options),
    method: 'get',
})

CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-templates/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/create'
*/
CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.url = (options?: RouteQueryOptions) => {
    return CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/create'
*/
CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/create'
*/
CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/create'
*/
const CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/create'
*/
CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/create'
*/
CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1.form = CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1Form
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/super/notification-templates/create'
*/
const CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.url(options),
    method: 'get',
})

CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-templates/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/super/notification-templates/create'
*/
CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.url = (options?: RouteQueryOptions) => {
    return CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/super/notification-templates/create'
*/
CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/super/notification-templates/create'
*/
CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/super/notification-templates/create'
*/
const CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/super/notification-templates/create'
*/
CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\CreateNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/CreateNotificationTemplate.php:7
* @route '/nds/super/notification-templates/create'
*/
CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6.form = CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6Form

const CreateNotificationTemplate = {
    '/nds/notify/notification-templates/create': CreateNotificationTemplate9087b3f0ddf01ab1c75c1810700c5bf1,
    '/nds/super/notification-templates/create': CreateNotificationTemplatea527ce1d8e0a830098f9903f1c3610d6,
}

export default CreateNotificationTemplate