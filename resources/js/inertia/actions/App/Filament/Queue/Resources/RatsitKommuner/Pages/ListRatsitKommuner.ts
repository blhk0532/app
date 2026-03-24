import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Queue/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/queue/ratsit-kommuner/ratsit-kommuns'
*/
const ListRatsitKommuner = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitKommuner.url(options),
    method: 'get',
})

ListRatsitKommuner.definition = {
    methods: ["get","head"],
    url: '/nds/queue/ratsit-kommuner/ratsit-kommuns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Queue/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/queue/ratsit-kommuner/ratsit-kommuns'
*/
ListRatsitKommuner.url = (options?: RouteQueryOptions) => {
    return ListRatsitKommuner.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Queue/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/queue/ratsit-kommuner/ratsit-kommuns'
*/
ListRatsitKommuner.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitKommuner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Queue/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/queue/ratsit-kommuner/ratsit-kommuns'
*/
ListRatsitKommuner.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRatsitKommuner.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Queue/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/queue/ratsit-kommuner/ratsit-kommuns'
*/
const ListRatsitKommunerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitKommuner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Queue/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/queue/ratsit-kommuner/ratsit-kommuns'
*/
ListRatsitKommunerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitKommuner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Queue/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/queue/ratsit-kommuner/ratsit-kommuns'
*/
ListRatsitKommunerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitKommuner.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRatsitKommuner.form = ListRatsitKommunerForm

export default ListRatsitKommuner