import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
const ListRingaDataOutcomes = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes.url(args, options),
    method: 'get',
})

ListRingaDataOutcomes.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa-data-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaDataOutcomes.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDataOutcomes.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
const ListRingaDataOutcomesForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomesForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomesForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDataOutcomes.form = ListRingaDataOutcomesForm

export default ListRingaDataOutcomes