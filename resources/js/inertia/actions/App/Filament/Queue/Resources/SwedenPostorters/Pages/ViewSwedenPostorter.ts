import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
const ViewSwedenPostorter = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSwedenPostorter.url(args, options),
    method: 'get',
})

ViewSwedenPostorter.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postorters/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
ViewSwedenPostorter.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSwedenPostorter.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
ViewSwedenPostorter.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSwedenPostorter.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
ViewSwedenPostorter.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSwedenPostorter.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
const ViewSwedenPostorterForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenPostorter.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
ViewSwedenPostorterForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenPostorter.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
ViewSwedenPostorterForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenPostorter.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSwedenPostorter.form = ViewSwedenPostorterForm

export default ViewSwedenPostorter