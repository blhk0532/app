import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ListHittaDatas::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ListHittaDatas.php:7
* @route '/nds/data/databaser/hitta-data'
*/
const ListHittaDatas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListHittaDatas.url(options),
    method: 'get',
})

ListHittaDatas.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/hitta-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ListHittaDatas::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ListHittaDatas.php:7
* @route '/nds/data/databaser/hitta-data'
*/
ListHittaDatas.url = (options?: RouteQueryOptions) => {
    return ListHittaDatas.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ListHittaDatas::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ListHittaDatas.php:7
* @route '/nds/data/databaser/hitta-data'
*/
ListHittaDatas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListHittaDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ListHittaDatas::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ListHittaDatas.php:7
* @route '/nds/data/databaser/hitta-data'
*/
ListHittaDatas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListHittaDatas.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ListHittaDatas::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ListHittaDatas.php:7
* @route '/nds/data/databaser/hitta-data'
*/
const ListHittaDatasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListHittaDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ListHittaDatas::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ListHittaDatas.php:7
* @route '/nds/data/databaser/hitta-data'
*/
ListHittaDatasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListHittaDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ListHittaDatas::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ListHittaDatas.php:7
* @route '/nds/data/databaser/hitta-data'
*/
ListHittaDatasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListHittaDatas.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListHittaDatas.form = ListHittaDatasForm

export default ListHittaDatas