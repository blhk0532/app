import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/{record}/edit'
*/
const EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.url(args, options),
    method: 'get',
})

EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-templates/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/{record}/edit'
*/
EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/{record}/edit'
*/
EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/{record}/edit'
*/
EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/{record}/edit'
*/
const EditNotificationTemplate369558cb32059de010fbfcf64b10e6ecForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/{record}/edit'
*/
EditNotificationTemplate369558cb32059de010fbfcf64b10e6ecForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/notify/notification-templates/{record}/edit'
*/
EditNotificationTemplate369558cb32059de010fbfcf64b10e6ecForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec.form = EditNotificationTemplate369558cb32059de010fbfcf64b10e6ecForm
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/super/notification-templates/{record}/edit'
*/
const EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.url(args, options),
    method: 'get',
})

EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-templates/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/super/notification-templates/{record}/edit'
*/
EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/super/notification-templates/{record}/edit'
*/
EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/super/notification-templates/{record}/edit'
*/
EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/super/notification-templates/{record}/edit'
*/
const EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/super/notification-templates/{record}/edit'
*/
EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Resources\NotificationTemplateResource\Pages\EditNotificationTemplate::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Resources/NotificationTemplateResource/Pages/EditNotificationTemplate.php:7
* @route '/nds/super/notification-templates/{record}/edit'
*/
EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702.form = EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702Form

const EditNotificationTemplate = {
    '/nds/notify/notification-templates/{record}/edit': EditNotificationTemplate369558cb32059de010fbfcf64b10e6ec,
    '/nds/super/notification-templates/{record}/edit': EditNotificationTemplate5c833172c379dcf06b1db1e8fd19c702,
}

export default EditNotificationTemplate