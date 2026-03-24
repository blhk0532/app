import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/notify/whatsapp-webhooks'
*/
const ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.url(options),
    method: 'get',
})

ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-webhooks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/notify/whatsapp-webhooks'
*/
ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.url = (options?: RouteQueryOptions) => {
    return ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/notify/whatsapp-webhooks'
*/
ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/notify/whatsapp-webhooks'
*/
ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/notify/whatsapp-webhooks'
*/
const ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/notify/whatsapp-webhooks'
*/
ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/notify/whatsapp-webhooks'
*/
ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b.form = ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673bForm
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/super/whatsapp-webhooks'
*/
const ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.url(options),
    method: 'get',
})

ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-webhooks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/super/whatsapp-webhooks'
*/
ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.url = (options?: RouteQueryOptions) => {
    return ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/super/whatsapp-webhooks'
*/
ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/super/whatsapp-webhooks'
*/
ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/super/whatsapp-webhooks'
*/
const ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/super/whatsapp-webhooks'
*/
ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappWebhookResource\Pages\ListWhatsappWebhooks::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappWebhookResource/Pages/ListWhatsappWebhooks.php:7
* @route '/nds/super/whatsapp-webhooks'
*/
ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36.form = ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36Form

const ListWhatsappWebhooks = {
    '/nds/notify/whatsapp-webhooks': ListWhatsappWebhooks18a68c0029733531a3927a46fa4c673b,
    '/nds/super/whatsapp-webhooks': ListWhatsappWebhooksff58216bdd7060dd818633ba1c970e36,
}

export default ListWhatsappWebhooks