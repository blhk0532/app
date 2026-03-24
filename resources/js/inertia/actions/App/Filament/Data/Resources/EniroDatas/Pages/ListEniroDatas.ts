import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\ListEniroDatas::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/ListEniroDatas.php:7
* @route '/nds/data/databaser/eniro-data'
*/
const ListEniroDatas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEniroDatas.url(options),
    method: 'get',
})

ListEniroDatas.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/eniro-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\ListEniroDatas::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/ListEniroDatas.php:7
* @route '/nds/data/databaser/eniro-data'
*/
ListEniroDatas.url = (options?: RouteQueryOptions) => {
    return ListEniroDatas.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\ListEniroDatas::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/ListEniroDatas.php:7
* @route '/nds/data/databaser/eniro-data'
*/
ListEniroDatas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEniroDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\ListEniroDatas::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/ListEniroDatas.php:7
* @route '/nds/data/databaser/eniro-data'
*/
ListEniroDatas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListEniroDatas.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\ListEniroDatas::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/ListEniroDatas.php:7
* @route '/nds/data/databaser/eniro-data'
*/
const ListEniroDatasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEniroDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\ListEniroDatas::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/ListEniroDatas.php:7
* @route '/nds/data/databaser/eniro-data'
*/
ListEniroDatasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEniroDatas.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\ListEniroDatas::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/ListEniroDatas.php:7
* @route '/nds/data/databaser/eniro-data'
*/
ListEniroDatasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEniroDatas.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListEniroDatas.form = ListEniroDatasForm

export default ListEniroDatas