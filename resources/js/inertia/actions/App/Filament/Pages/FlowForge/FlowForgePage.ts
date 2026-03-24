import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
const FlowForgePage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FlowForgePage.url(args, options),
    method: 'get',
})

FlowForgePage.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/flow-forge-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
FlowForgePage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return FlowForgePage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
FlowForgePage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FlowForgePage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
FlowForgePage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FlowForgePage.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
const FlowForgePageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FlowForgePage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
FlowForgePageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FlowForgePage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
FlowForgePageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FlowForgePage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FlowForgePage.form = FlowForgePageForm

export default FlowForgePage