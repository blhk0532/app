import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
const AppDataHistory = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AppDataHistory.url(args, options),
    method: 'get',
})

AppDataHistory.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/data-history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
AppDataHistory.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return AppDataHistory.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
AppDataHistory.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AppDataHistory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
AppDataHistory.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AppDataHistory.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
const AppDataHistoryForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppDataHistory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
AppDataHistoryForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppDataHistory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
AppDataHistoryForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppDataHistory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AppDataHistory.form = AppDataHistoryForm

export default AppDataHistory