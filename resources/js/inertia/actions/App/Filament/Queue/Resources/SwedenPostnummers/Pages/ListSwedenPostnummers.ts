import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ListSwedenPostnummers::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ListSwedenPostnummers.php:7
* @route '/nds/queue/sweden-postnummers'
*/
const ListSwedenPostnummers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSwedenPostnummers.url(options),
    method: 'get',
})

ListSwedenPostnummers.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postnummers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ListSwedenPostnummers::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ListSwedenPostnummers.php:7
* @route '/nds/queue/sweden-postnummers'
*/
ListSwedenPostnummers.url = (options?: RouteQueryOptions) => {
    return ListSwedenPostnummers.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ListSwedenPostnummers::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ListSwedenPostnummers.php:7
* @route '/nds/queue/sweden-postnummers'
*/
ListSwedenPostnummers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSwedenPostnummers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ListSwedenPostnummers::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ListSwedenPostnummers.php:7
* @route '/nds/queue/sweden-postnummers'
*/
ListSwedenPostnummers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSwedenPostnummers.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ListSwedenPostnummers::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ListSwedenPostnummers.php:7
* @route '/nds/queue/sweden-postnummers'
*/
const ListSwedenPostnummersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenPostnummers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ListSwedenPostnummers::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ListSwedenPostnummers.php:7
* @route '/nds/queue/sweden-postnummers'
*/
ListSwedenPostnummersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenPostnummers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ListSwedenPostnummers::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ListSwedenPostnummers.php:7
* @route '/nds/queue/sweden-postnummers'
*/
ListSwedenPostnummersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenPostnummers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSwedenPostnummers.form = ListSwedenPostnummersForm

export default ListSwedenPostnummers