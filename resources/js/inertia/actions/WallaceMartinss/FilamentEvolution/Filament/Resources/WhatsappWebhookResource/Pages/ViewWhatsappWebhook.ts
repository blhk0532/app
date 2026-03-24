import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/notify/whatsapp-webhooks/{record}'
*/
const ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.url(args, options),
    method: 'get',
})

ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-webhooks/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/notify/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/notify/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/notify/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/notify/whatsapp-webhooks/{record}'
*/
const ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/notify/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/notify/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268.form = ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/super/whatsapp-webhooks/{record}'
*/
const ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.url(args, options),
    method: 'get',
})

ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-webhooks/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/super/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/super/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/super/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/super/whatsapp-webhooks/{record}'
*/
const ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/super/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ViewWhatsappWebhook::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ViewWhatsappWebhook.php:7
* @route '/nds/super/whatsapp-webhooks/{record}'
*/
ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11.form = ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11Form

const ViewWhatsappWebhook = {
    '/nds/notify/whatsapp-webhooks/{record}': ViewWhatsappWebhookc80841ae1e899e17b9df396cd2ef7268,
    '/nds/super/whatsapp-webhooks/{record}': ViewWhatsappWebhook6f2eac2cb5b00022e7171af09eeedf11,
}

export default ViewWhatsappWebhook