import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/{tenant}/whatsapp-agents/create'
*/
const CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.url(args, options),
    method: 'get',
})

CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/whatsapp-agents/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/{tenant}/whatsapp-agents/create'
*/
const CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6fForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6fForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6fForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f.form = CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6fForm
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
const CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'get',
})

CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-agents/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
const CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.form = CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4fForm

const CreateWhatsappAgent = {
    '/admin/{tenant}/whatsapp-agents/create': CreateWhatsappAgentb7c20bbd94ef114e6fe67fe37aec1b6f,
    '/nds/super/whatsapp-agents/create': CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f,
}

export default CreateWhatsappAgent