import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
const CreateRatsitPerson = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRatsitPerson.url(options),
    method: 'get',
})

CreateRatsitPerson.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-persons/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
CreateRatsitPerson.url = (options?: RouteQueryOptions) => {
    return CreateRatsitPerson.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
CreateRatsitPerson.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRatsitPerson.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
CreateRatsitPerson.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRatsitPerson.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
const CreateRatsitPersonForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitPerson.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
CreateRatsitPersonForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitPerson.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
CreateRatsitPersonForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitPerson.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRatsitPerson.form = CreateRatsitPersonForm

export default CreateRatsitPerson