import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/notify/whatsapp-messages/{record}'
*/
const ViewWhatsappMessage157abf587d47188e55800e36b4077630 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappMessage157abf587d47188e55800e36b4077630.url(args, options),
    method: 'get',
})

ViewWhatsappMessage157abf587d47188e55800e36b4077630.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-messages/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/notify/whatsapp-messages/{record}'
*/
ViewWhatsappMessage157abf587d47188e55800e36b4077630.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewWhatsappMessage157abf587d47188e55800e36b4077630.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/notify/whatsapp-messages/{record}'
*/
ViewWhatsappMessage157abf587d47188e55800e36b4077630.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappMessage157abf587d47188e55800e36b4077630.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/notify/whatsapp-messages/{record}'
*/
ViewWhatsappMessage157abf587d47188e55800e36b4077630.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappMessage157abf587d47188e55800e36b4077630.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/notify/whatsapp-messages/{record}'
*/
const ViewWhatsappMessage157abf587d47188e55800e36b4077630Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappMessage157abf587d47188e55800e36b4077630.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/notify/whatsapp-messages/{record}'
*/
ViewWhatsappMessage157abf587d47188e55800e36b4077630Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappMessage157abf587d47188e55800e36b4077630.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/notify/whatsapp-messages/{record}'
*/
ViewWhatsappMessage157abf587d47188e55800e36b4077630Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappMessage157abf587d47188e55800e36b4077630.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappMessage157abf587d47188e55800e36b4077630.form = ViewWhatsappMessage157abf587d47188e55800e36b4077630Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/super/whatsapp-messages/{record}'
*/
const ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.url(args, options),
    method: 'get',
})

ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-messages/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/super/whatsapp-messages/{record}'
*/
ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/super/whatsapp-messages/{record}'
*/
ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/super/whatsapp-messages/{record}'
*/
ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/super/whatsapp-messages/{record}'
*/
const ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdbForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/super/whatsapp-messages/{record}'
*/
ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdbForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ViewWhatsappMessage::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ViewWhatsappMessage.php:7
* @route '/nds/super/whatsapp-messages/{record}'
*/
ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdbForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb.form = ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdbForm

const ViewWhatsappMessage = {
    '/nds/notify/whatsapp-messages/{record}': ViewWhatsappMessage157abf587d47188e55800e36b4077630,
    '/nds/super/whatsapp-messages/{record}': ViewWhatsappMessagec5a2bc92f65569fbfb5bd6d87ef06cdb,
}

export default ViewWhatsappMessage