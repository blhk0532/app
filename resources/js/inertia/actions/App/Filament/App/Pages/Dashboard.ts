import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
const Dashboard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard.url(args, options),
    method: 'get',
})

Dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
Dashboard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return Dashboard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
Dashboard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
Dashboard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
const DashboardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
DashboardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
DashboardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Dashboard.form = DashboardForm

export default Dashboard