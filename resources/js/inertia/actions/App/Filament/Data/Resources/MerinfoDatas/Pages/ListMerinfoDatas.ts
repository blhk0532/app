import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\ListMerinfoDatas::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/ListMerinfoDatas.php:7
* @route '/nds/data/databaser/merinfo-data'
*/
const ListMerinfoDatas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMerinfoDatas.url(options),
    method: 'get',
})

ListMerinfoDatas.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/merinfo-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\ListMerinfoDatas::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/ListMerinfoDatas.php:7
* @route '/nds/data/databaser/merinfo-data'
*/
ListMerinfoDatas.url = (options?: RouteQueryOptions) => {
    return ListMerinfoDatas.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\ListMerinfoDatas::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/ListMerinfoDatas.php:7
* @route '/nds/data/databaser/merinfo-data'
*/
ListMerinfoDatas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMerinfoDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\ListMerinfoDatas::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/ListMerinfoDatas.php:7
* @route '/nds/data/databaser/merinfo-data'
*/
ListMerinfoDatas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMerinfoDatas.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\ListMerinfoDatas::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/ListMerinfoDatas.php:7
* @route '/nds/data/databaser/merinfo-data'
*/
const ListMerinfoDatasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMerinfoDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\ListMerinfoDatas::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/ListMerinfoDatas.php:7
* @route '/nds/data/databaser/merinfo-data'
*/
ListMerinfoDatasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMerinfoDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\ListMerinfoDatas::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/ListMerinfoDatas.php:7
* @route '/nds/data/databaser/merinfo-data'
*/
ListMerinfoDatasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMerinfoDatas.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListMerinfoDatas.form = ListMerinfoDatasForm

export default ListMerinfoDatas