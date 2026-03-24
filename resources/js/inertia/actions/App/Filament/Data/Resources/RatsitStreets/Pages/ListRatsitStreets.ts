import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ListRatsitStreets::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ListRatsitStreets.php:7
* @route '/nds/data/databaser/ratsit-streets'
*/
const ListRatsitStreets = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitStreets.url(options),
    method: 'get',
})

ListRatsitStreets.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-streets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ListRatsitStreets::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ListRatsitStreets.php:7
* @route '/nds/data/databaser/ratsit-streets'
*/
ListRatsitStreets.url = (options?: RouteQueryOptions) => {
    return ListRatsitStreets.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ListRatsitStreets::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ListRatsitStreets.php:7
* @route '/nds/data/databaser/ratsit-streets'
*/
ListRatsitStreets.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitStreets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ListRatsitStreets::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ListRatsitStreets.php:7
* @route '/nds/data/databaser/ratsit-streets'
*/
ListRatsitStreets.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRatsitStreets.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ListRatsitStreets::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ListRatsitStreets.php:7
* @route '/nds/data/databaser/ratsit-streets'
*/
const ListRatsitStreetsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitStreets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ListRatsitStreets::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ListRatsitStreets.php:7
* @route '/nds/data/databaser/ratsit-streets'
*/
ListRatsitStreetsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitStreets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ListRatsitStreets::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ListRatsitStreets.php:7
* @route '/nds/data/databaser/ratsit-streets'
*/
ListRatsitStreetsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitStreets.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRatsitStreets.form = ListRatsitStreetsForm

export default ListRatsitStreets