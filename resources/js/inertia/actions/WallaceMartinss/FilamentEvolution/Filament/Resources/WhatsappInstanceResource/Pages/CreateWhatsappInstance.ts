import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/create'
*/
const CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.url(args, options),
    method: 'get',
})

CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/create'
*/
const CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773.form = CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
const CreateWhatsappInstancef7b543919563566c182d668cc91f9c28 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'get',
})

CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
const CreateWhatsappInstancef7b543919563566c182d668cc91f9c28Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.form = CreateWhatsappInstancef7b543919563566c182d668cc91f9c28Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
const CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'get',
})

CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
const CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.form = CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68Form

const CreateWhatsappInstance = {
    '/admin/{tenant}/whatsapp-instances/create': CreateWhatsappInstance82e0560388ca07ebcea9ecf9da548773,
    '/nds/notify/whatsapp-instances/create': CreateWhatsappInstancef7b543919563566c182d668cc91f9c28,
    '/nds/super/whatsapp-instances/create': CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68,
}

export default CreateWhatsappInstance