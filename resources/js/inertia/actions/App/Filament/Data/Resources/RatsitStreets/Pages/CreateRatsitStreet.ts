import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\CreateRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/CreateRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/create'
*/
const CreateRatsitStreet = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRatsitStreet.url(options),
    method: 'get',
})

CreateRatsitStreet.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-streets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\CreateRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/CreateRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/create'
*/
CreateRatsitStreet.url = (options?: RouteQueryOptions) => {
    return CreateRatsitStreet.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\CreateRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/CreateRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/create'
*/
CreateRatsitStreet.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRatsitStreet.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\CreateRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/CreateRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/create'
*/
CreateRatsitStreet.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRatsitStreet.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\CreateRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/CreateRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/create'
*/
const CreateRatsitStreetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitStreet.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\CreateRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/CreateRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/create'
*/
CreateRatsitStreetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitStreet.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\CreateRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/CreateRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/create'
*/
CreateRatsitStreetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitStreet.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRatsitStreet.form = CreateRatsitStreetForm

export default CreateRatsitStreet