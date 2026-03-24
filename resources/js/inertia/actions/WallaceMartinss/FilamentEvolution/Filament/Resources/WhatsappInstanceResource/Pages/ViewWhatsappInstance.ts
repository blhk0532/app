import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.url(args, options),
    method: 'get',
})

ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/whatsapp-instances/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/{record}'
*/
ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/{record}'
*/
ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/{record}'
*/
ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance1a39caff11e2431516e5f01b1951751eForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/{record}'
*/
ViewWhatsappInstance1a39caff11e2431516e5f01b1951751eForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/{record}'
*/
ViewWhatsappInstance1a39caff11e2431516e5f01b1951751eForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e.form = ViewWhatsappInstance1a39caff11e2431516e5f01b1951751eForm
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance4000635695f943fbf9995296ee29c986 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'get',
})

ViewWhatsappInstance4000635695f943fbf9995296ee29c986.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-instances/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewWhatsappInstance4000635695f943fbf9995296ee29c986.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance4000635695f943fbf9995296ee29c986Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappInstance4000635695f943fbf9995296ee29c986.form = ViewWhatsappInstance4000635695f943fbf9995296ee29c986Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance3cfb53917855120c5220569eb407f49e = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'get',
})

ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-instances/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance3cfb53917855120c5220569eb407f49eForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49eForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49eForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.form = ViewWhatsappInstance3cfb53917855120c5220569eb407f49eForm

const ViewWhatsappInstance = {
    '/admin/{tenant}/whatsapp-instances/{record}': ViewWhatsappInstance1a39caff11e2431516e5f01b1951751e,
    '/nds/notify/whatsapp-instances/{record}': ViewWhatsappInstance4000635695f943fbf9995296ee29c986,
    '/nds/super/whatsapp-instances/{record}': ViewWhatsappInstance3cfb53917855120c5220569eb407f49e,
}

export default ViewWhatsappInstance