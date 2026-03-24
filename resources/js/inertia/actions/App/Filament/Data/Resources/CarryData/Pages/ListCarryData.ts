import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\CarryData\Pages\ListCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/ListCarryData.php:7
* @route '/nds/data/carry-data'
*/
const ListCarryData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCarryData.url(options),
    method: 'get',
})

ListCarryData.definition = {
    methods: ["get","head"],
    url: '/nds/data/carry-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\ListCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/ListCarryData.php:7
* @route '/nds/data/carry-data'
*/
ListCarryData.url = (options?: RouteQueryOptions) => {
    return ListCarryData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\ListCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/ListCarryData.php:7
* @route '/nds/data/carry-data'
*/
ListCarryData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCarryData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\ListCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/ListCarryData.php:7
* @route '/nds/data/carry-data'
*/
ListCarryData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCarryData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\ListCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/ListCarryData.php:7
* @route '/nds/data/carry-data'
*/
const ListCarryDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCarryData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\ListCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/ListCarryData.php:7
* @route '/nds/data/carry-data'
*/
ListCarryDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCarryData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\ListCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/ListCarryData.php:7
* @route '/nds/data/carry-data'
*/
ListCarryDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCarryData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCarryData.form = ListCarryDataForm

export default ListCarryData