import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\ListHittaSes::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/ListHittaSes.php:7
* @route '/nds/data/hitta-ses'
*/
const ListHittaSes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListHittaSes.url(options),
    method: 'get',
})

ListHittaSes.definition = {
    methods: ["get","head"],
    url: '/nds/data/hitta-ses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\ListHittaSes::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/ListHittaSes.php:7
* @route '/nds/data/hitta-ses'
*/
ListHittaSes.url = (options?: RouteQueryOptions) => {
    return ListHittaSes.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\ListHittaSes::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/ListHittaSes.php:7
* @route '/nds/data/hitta-ses'
*/
ListHittaSes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListHittaSes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\ListHittaSes::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/ListHittaSes.php:7
* @route '/nds/data/hitta-ses'
*/
ListHittaSes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListHittaSes.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\ListHittaSes::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/ListHittaSes.php:7
* @route '/nds/data/hitta-ses'
*/
const ListHittaSesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListHittaSes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\ListHittaSes::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/ListHittaSes.php:7
* @route '/nds/data/hitta-ses'
*/
ListHittaSesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListHittaSes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\ListHittaSes::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/ListHittaSes.php:7
* @route '/nds/data/hitta-ses'
*/
ListHittaSesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListHittaSes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListHittaSes.form = ListHittaSesForm

export default ListHittaSes