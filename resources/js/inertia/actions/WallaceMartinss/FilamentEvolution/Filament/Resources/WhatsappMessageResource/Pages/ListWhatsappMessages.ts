import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/notify/whatsapp-messages'
*/
const ListWhatsappMessages003570a3753293384aa06244529796fd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappMessages003570a3753293384aa06244529796fd.url(options),
    method: 'get',
})

ListWhatsappMessages003570a3753293384aa06244529796fd.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/notify/whatsapp-messages'
*/
ListWhatsappMessages003570a3753293384aa06244529796fd.url = (options?: RouteQueryOptions) => {
    return ListWhatsappMessages003570a3753293384aa06244529796fd.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/notify/whatsapp-messages'
*/
ListWhatsappMessages003570a3753293384aa06244529796fd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappMessages003570a3753293384aa06244529796fd.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/notify/whatsapp-messages'
*/
ListWhatsappMessages003570a3753293384aa06244529796fd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappMessages003570a3753293384aa06244529796fd.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/notify/whatsapp-messages'
*/
const ListWhatsappMessages003570a3753293384aa06244529796fdForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappMessages003570a3753293384aa06244529796fd.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/notify/whatsapp-messages'
*/
ListWhatsappMessages003570a3753293384aa06244529796fdForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappMessages003570a3753293384aa06244529796fd.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/notify/whatsapp-messages'
*/
ListWhatsappMessages003570a3753293384aa06244529796fdForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappMessages003570a3753293384aa06244529796fd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappMessages003570a3753293384aa06244529796fd.form = ListWhatsappMessages003570a3753293384aa06244529796fdForm
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/super/whatsapp-messages'
*/
const ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.url(options),
    method: 'get',
})

ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/super/whatsapp-messages'
*/
ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.url = (options?: RouteQueryOptions) => {
    return ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/super/whatsapp-messages'
*/
ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/super/whatsapp-messages'
*/
ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/super/whatsapp-messages'
*/
const ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/super/whatsapp-messages'
*/
ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappMessageResource\Pages\ListWhatsappMessages::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappMessageResource/Pages/ListWhatsappMessages.php:7
* @route '/nds/super/whatsapp-messages'
*/
ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96.form = ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96Form

const ListWhatsappMessages = {
    '/nds/notify/whatsapp-messages': ListWhatsappMessages003570a3753293384aa06244529796fd,
    '/nds/super/whatsapp-messages': ListWhatsappMessagesa2795db56ff938d01b76fb44ab28fa96,
}

export default ListWhatsappMessages