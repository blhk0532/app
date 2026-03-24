import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ListSwedenKommuners::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ListSwedenKommuners.php:7
* @route '/nds/queue/sweden-kommuners'
*/
const ListSwedenKommuners = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSwedenKommuners.url(options),
    method: 'get',
})

ListSwedenKommuners.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-kommuners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ListSwedenKommuners::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ListSwedenKommuners.php:7
* @route '/nds/queue/sweden-kommuners'
*/
ListSwedenKommuners.url = (options?: RouteQueryOptions) => {
    return ListSwedenKommuners.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ListSwedenKommuners::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ListSwedenKommuners.php:7
* @route '/nds/queue/sweden-kommuners'
*/
ListSwedenKommuners.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSwedenKommuners.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ListSwedenKommuners::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ListSwedenKommuners.php:7
* @route '/nds/queue/sweden-kommuners'
*/
ListSwedenKommuners.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSwedenKommuners.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ListSwedenKommuners::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ListSwedenKommuners.php:7
* @route '/nds/queue/sweden-kommuners'
*/
const ListSwedenKommunersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenKommuners.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ListSwedenKommuners::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ListSwedenKommuners.php:7
* @route '/nds/queue/sweden-kommuners'
*/
ListSwedenKommunersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenKommuners.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ListSwedenKommuners::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ListSwedenKommuners.php:7
* @route '/nds/queue/sweden-kommuners'
*/
ListSwedenKommunersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSwedenKommuners.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSwedenKommuners.form = ListSwedenKommunersForm

export default ListSwedenKommuners