import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ListRatsitDatas::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ListRatsitDatas.php:7
* @route '/nds/data/databaser/ratsit-data'
*/
const ListRatsitDatas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitDatas.url(options),
    method: 'get',
})

ListRatsitDatas.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ListRatsitDatas::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ListRatsitDatas.php:7
* @route '/nds/data/databaser/ratsit-data'
*/
ListRatsitDatas.url = (options?: RouteQueryOptions) => {
    return ListRatsitDatas.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ListRatsitDatas::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ListRatsitDatas.php:7
* @route '/nds/data/databaser/ratsit-data'
*/
ListRatsitDatas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ListRatsitDatas::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ListRatsitDatas.php:7
* @route '/nds/data/databaser/ratsit-data'
*/
ListRatsitDatas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRatsitDatas.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ListRatsitDatas::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ListRatsitDatas.php:7
* @route '/nds/data/databaser/ratsit-data'
*/
const ListRatsitDatasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ListRatsitDatas::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ListRatsitDatas.php:7
* @route '/nds/data/databaser/ratsit-data'
*/
ListRatsitDatasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ListRatsitDatas::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ListRatsitDatas.php:7
* @route '/nds/data/databaser/ratsit-data'
*/
ListRatsitDatasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitDatas.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRatsitDatas.form = ListRatsitDatasForm

export default ListRatsitDatas