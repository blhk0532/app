import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\ListUpplysningDatas::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/ListUpplysningDatas.php:7
* @route '/nds/data/databaser/upplysning-data'
*/
const ListUpplysningDatas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUpplysningDatas.url(options),
    method: 'get',
})

ListUpplysningDatas.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/upplysning-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\ListUpplysningDatas::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/ListUpplysningDatas.php:7
* @route '/nds/data/databaser/upplysning-data'
*/
ListUpplysningDatas.url = (options?: RouteQueryOptions) => {
    return ListUpplysningDatas.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\ListUpplysningDatas::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/ListUpplysningDatas.php:7
* @route '/nds/data/databaser/upplysning-data'
*/
ListUpplysningDatas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUpplysningDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\ListUpplysningDatas::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/ListUpplysningDatas.php:7
* @route '/nds/data/databaser/upplysning-data'
*/
ListUpplysningDatas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUpplysningDatas.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\ListUpplysningDatas::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/ListUpplysningDatas.php:7
* @route '/nds/data/databaser/upplysning-data'
*/
const ListUpplysningDatasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUpplysningDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\ListUpplysningDatas::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/ListUpplysningDatas.php:7
* @route '/nds/data/databaser/upplysning-data'
*/
ListUpplysningDatasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUpplysningDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\ListUpplysningDatas::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/ListUpplysningDatas.php:7
* @route '/nds/data/databaser/upplysning-data'
*/
ListUpplysningDatasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUpplysningDatas.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUpplysningDatas.form = ListUpplysningDatasForm

export default ListUpplysningDatas