import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ListRatsitPostorts::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ListRatsitPostorts.php:7
* @route '/nds/queue/ratsit-postorts'
*/
const ListRatsitPostorts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitPostorts.url(options),
    method: 'get',
})

ListRatsitPostorts.definition = {
    methods: ["get","head"],
    url: '/nds/queue/ratsit-postorts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ListRatsitPostorts::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ListRatsitPostorts.php:7
* @route '/nds/queue/ratsit-postorts'
*/
ListRatsitPostorts.url = (options?: RouteQueryOptions) => {
    return ListRatsitPostorts.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ListRatsitPostorts::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ListRatsitPostorts.php:7
* @route '/nds/queue/ratsit-postorts'
*/
ListRatsitPostorts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitPostorts.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ListRatsitPostorts::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ListRatsitPostorts.php:7
* @route '/nds/queue/ratsit-postorts'
*/
ListRatsitPostorts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRatsitPostorts.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ListRatsitPostorts::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ListRatsitPostorts.php:7
* @route '/nds/queue/ratsit-postorts'
*/
const ListRatsitPostortsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPostorts.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ListRatsitPostorts::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ListRatsitPostorts.php:7
* @route '/nds/queue/ratsit-postorts'
*/
ListRatsitPostortsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPostorts.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ListRatsitPostorts::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ListRatsitPostorts.php:7
* @route '/nds/queue/ratsit-postorts'
*/
ListRatsitPostortsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPostorts.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRatsitPostorts.form = ListRatsitPostortsForm

export default ListRatsitPostorts