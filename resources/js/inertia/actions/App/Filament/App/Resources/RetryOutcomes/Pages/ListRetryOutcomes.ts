import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
const ListRetryOutcomes = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRetryOutcomes.url(args, options),
    method: 'get',
})

ListRetryOutcomes.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomes.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRetryOutcomes.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomes.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRetryOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomes.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRetryOutcomes.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
const ListRetryOutcomesForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomesForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomesForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomes.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRetryOutcomes.form = ListRetryOutcomesForm

export default ListRetryOutcomes