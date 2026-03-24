import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
const AppDashboard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AppDashboard.url(args, options),
    method: 'get',
})

AppDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/app-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
AppDashboard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return AppDashboard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
AppDashboard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AppDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
AppDashboard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AppDashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
const AppDashboardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
AppDashboardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
AppDashboardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppDashboard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AppDashboard.form = AppDashboardForm

export default AppDashboard