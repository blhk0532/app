import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\PrivateData\Pages\ListPrivateData::__invoke
* @see app/Filament/Data/Resources/PrivateData/Pages/ListPrivateData.php:7
* @route '/nds/data/private-data'
*/
const ListPrivateData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPrivateData.url(options),
    method: 'get',
})

ListPrivateData.definition = {
    methods: ["get","head"],
    url: '/nds/data/private-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\PrivateData\Pages\ListPrivateData::__invoke
* @see app/Filament/Data/Resources/PrivateData/Pages/ListPrivateData.php:7
* @route '/nds/data/private-data'
*/
ListPrivateData.url = (options?: RouteQueryOptions) => {
    return ListPrivateData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\PrivateData\Pages\ListPrivateData::__invoke
* @see app/Filament/Data/Resources/PrivateData/Pages/ListPrivateData.php:7
* @route '/nds/data/private-data'
*/
ListPrivateData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPrivateData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\PrivateData\Pages\ListPrivateData::__invoke
* @see app/Filament/Data/Resources/PrivateData/Pages/ListPrivateData.php:7
* @route '/nds/data/private-data'
*/
ListPrivateData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPrivateData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\PrivateData\Pages\ListPrivateData::__invoke
* @see app/Filament/Data/Resources/PrivateData/Pages/ListPrivateData.php:7
* @route '/nds/data/private-data'
*/
const ListPrivateDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPrivateData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\PrivateData\Pages\ListPrivateData::__invoke
* @see app/Filament/Data/Resources/PrivateData/Pages/ListPrivateData.php:7
* @route '/nds/data/private-data'
*/
ListPrivateDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPrivateData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\PrivateData\Pages\ListPrivateData::__invoke
* @see app/Filament/Data/Resources/PrivateData/Pages/ListPrivateData.php:7
* @route '/nds/data/private-data'
*/
ListPrivateDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPrivateData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListPrivateData.form = ListPrivateDataForm

export default ListPrivateData