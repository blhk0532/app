import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
const ListSwedenPostorters = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSwedenPostorters.url(options),
    method: 'get',
})

ListSwedenPostorters.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postorters',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
ListSwedenPostorters.url = (options?: RouteQueryOptions) => {
    return ListSwedenPostorters.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
ListSwedenPostorters.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSwedenPostorters.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
ListSwedenPostorters.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSwedenPostorters.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
const ListSwedenPostortersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenPostorters.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
ListSwedenPostortersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenPostorters.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
ListSwedenPostortersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenPostorters.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSwedenPostorters.form = ListSwedenPostortersForm

export default ListSwedenPostorters