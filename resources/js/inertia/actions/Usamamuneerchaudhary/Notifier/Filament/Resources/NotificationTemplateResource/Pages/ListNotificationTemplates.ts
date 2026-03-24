import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/notify/notification-templates'
*/
const ListNotificationTemplates12409655682d3c3853bcc420371e0774 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationTemplates12409655682d3c3853bcc420371e0774.url(options),
    method: 'get',
})

ListNotificationTemplates12409655682d3c3853bcc420371e0774.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/notify/notification-templates'
*/
ListNotificationTemplates12409655682d3c3853bcc420371e0774.url = (options?: RouteQueryOptions) => {
    return ListNotificationTemplates12409655682d3c3853bcc420371e0774.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/notify/notification-templates'
*/
ListNotificationTemplates12409655682d3c3853bcc420371e0774.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationTemplates12409655682d3c3853bcc420371e0774.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/notify/notification-templates'
*/
ListNotificationTemplates12409655682d3c3853bcc420371e0774.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationTemplates12409655682d3c3853bcc420371e0774.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/notify/notification-templates'
*/
const ListNotificationTemplates12409655682d3c3853bcc420371e0774Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationTemplates12409655682d3c3853bcc420371e0774.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/notify/notification-templates'
*/
ListNotificationTemplates12409655682d3c3853bcc420371e0774Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationTemplates12409655682d3c3853bcc420371e0774.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/notify/notification-templates'
*/
ListNotificationTemplates12409655682d3c3853bcc420371e0774Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationTemplates12409655682d3c3853bcc420371e0774.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListNotificationTemplates12409655682d3c3853bcc420371e0774.form = ListNotificationTemplates12409655682d3c3853bcc420371e0774Form
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/super/notification-templates'
*/
const ListNotificationTemplates4aac2aa41629446a5f2b92140d705976 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.url(options),
    method: 'get',
})

ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/super/notification-templates'
*/
ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.url = (options?: RouteQueryOptions) => {
    return ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/super/notification-templates'
*/
ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/super/notification-templates'
*/
ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/super/notification-templates'
*/
const ListNotificationTemplates4aac2aa41629446a5f2b92140d705976Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/super/notification-templates'
*/
ListNotificationTemplates4aac2aa41629446a5f2b92140d705976Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\ListNotificationTemplates::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/ListNotificationTemplates.php:7
* @route '/nds/super/notification-templates'
*/
ListNotificationTemplates4aac2aa41629446a5f2b92140d705976Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListNotificationTemplates4aac2aa41629446a5f2b92140d705976.form = ListNotificationTemplates4aac2aa41629446a5f2b92140d705976Form

const ListNotificationTemplates = {
    '/nds/notify/notification-templates': ListNotificationTemplates12409655682d3c3853bcc420371e0774,
    '/nds/super/notification-templates': ListNotificationTemplates4aac2aa41629446a5f2b92140d705976,
}

export default ListNotificationTemplates