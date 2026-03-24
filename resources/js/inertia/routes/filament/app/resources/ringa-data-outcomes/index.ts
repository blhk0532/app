import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa-data-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
index.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
indexForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const ringaDataOutcomes = {
    index: Object.assign(index, index),
}

export default ringaDataOutcomes