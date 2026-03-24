import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
const ArbetslistaDashboard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ArbetslistaDashboard.url(args, options),
    method: 'get',
})

ArbetslistaDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/arbetslista',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
ArbetslistaDashboard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ArbetslistaDashboard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
ArbetslistaDashboard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ArbetslistaDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
ArbetslistaDashboard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ArbetslistaDashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
const ArbetslistaDashboardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ArbetslistaDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
ArbetslistaDashboardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ArbetslistaDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
ArbetslistaDashboardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ArbetslistaDashboard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ArbetslistaDashboard.form = ArbetslistaDashboardForm

export default ArbetslistaDashboard