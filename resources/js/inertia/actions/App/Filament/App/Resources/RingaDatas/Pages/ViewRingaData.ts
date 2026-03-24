import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
const ViewRingaData = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaData.url(args, options),
    method: 'get',
})

ViewRingaData.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaData.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewRingaData.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaData.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaData.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRingaData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
const ViewRingaDataForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaDataForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaDataForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRingaData.form = ViewRingaDataForm

export default ViewRingaData