import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
const ListRatsitPersons = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitPersons.url(options),
    method: 'get',
})

ListRatsitPersons.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-persons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
ListRatsitPersons.url = (options?: RouteQueryOptions) => {
    return ListRatsitPersons.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
ListRatsitPersons.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitPersons.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
ListRatsitPersons.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRatsitPersons.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
const ListRatsitPersonsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPersons.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
ListRatsitPersonsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPersons.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
ListRatsitPersonsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPersons.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRatsitPersons.form = ListRatsitPersonsForm

export default ListRatsitPersons