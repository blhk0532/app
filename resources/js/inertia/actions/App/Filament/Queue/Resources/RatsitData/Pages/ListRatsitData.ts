import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\ListRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/ListRatsitData.php:7
* @route '/nds/queue/ratsit-data'
*/
const ListRatsitData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitData.url(options),
    method: 'get',
})

ListRatsitData.definition = {
    methods: ["get","head"],
    url: '/nds/queue/ratsit-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\ListRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/ListRatsitData.php:7
* @route '/nds/queue/ratsit-data'
*/
ListRatsitData.url = (options?: RouteQueryOptions) => {
    return ListRatsitData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\ListRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/ListRatsitData.php:7
* @route '/nds/queue/ratsit-data'
*/
ListRatsitData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\ListRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/ListRatsitData.php:7
* @route '/nds/queue/ratsit-data'
*/
ListRatsitData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRatsitData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\ListRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/ListRatsitData.php:7
* @route '/nds/queue/ratsit-data'
*/
const ListRatsitDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\ListRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/ListRatsitData.php:7
* @route '/nds/queue/ratsit-data'
*/
ListRatsitDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\ListRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/ListRatsitData.php:7
* @route '/nds/queue/ratsit-data'
*/
ListRatsitDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRatsitData.form = ListRatsitDataForm

export default ListRatsitData