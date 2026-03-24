import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/{tenant}/ringa-data-outcomes'
*/
const ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.url(args, options),
    method: 'get',
})

ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/ringa-data-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/{tenant}/ringa-data-outcomes'
*/
const ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149.form = ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149Form
/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
const ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.url(options),
    method: 'get',
})

ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.definition = {
    methods: ["get","head"],
    url: '/nds/super/ringa-data-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.url = (options?: RouteQueryOptions) => {
    return ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
const ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0.form = ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0Form

const ListRingaDataOutcomes = {
    '/admin/{tenant}/ringa-data-outcomes': ListRingaDataOutcomes04b0448361d4a0f4ccbcbb1d2e969149,
    '/nds/super/ringa-data-outcomes': ListRingaDataOutcomesaa5a3b2edfa8f57e9e8bd98b2cdcccb0,
}

export default ListRingaDataOutcomes