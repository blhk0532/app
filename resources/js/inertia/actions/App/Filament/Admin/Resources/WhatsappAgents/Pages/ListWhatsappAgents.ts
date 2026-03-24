import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/{tenant}/whatsapp-agents'
*/
const ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.url(args, options),
    method: 'get',
})

ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/whatsapp-agents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/{tenant}/whatsapp-agents'
*/
const ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6.form = ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6Form
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
const ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'get',
})

ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-agents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url = (options?: RouteQueryOptions) => {
    return ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
const ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.form = ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4Form

const ListWhatsappAgents = {
    '/admin/{tenant}/whatsapp-agents': ListWhatsappAgentsd257a7cf7ad2433f16164daeac400fb6,
    '/nds/super/whatsapp-agents': ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4,
}

export default ListWhatsappAgents