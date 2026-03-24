import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\CreateHittaSe::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/CreateHittaSe.php:7
* @route '/nds/data/hitta-ses/create'
*/
const CreateHittaSe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateHittaSe.url(options),
    method: 'get',
})

CreateHittaSe.definition = {
    methods: ["get","head"],
    url: '/nds/data/hitta-ses/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\CreateHittaSe::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/CreateHittaSe.php:7
* @route '/nds/data/hitta-ses/create'
*/
CreateHittaSe.url = (options?: RouteQueryOptions) => {
    return CreateHittaSe.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\CreateHittaSe::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/CreateHittaSe.php:7
* @route '/nds/data/hitta-ses/create'
*/
CreateHittaSe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateHittaSe.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\CreateHittaSe::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/CreateHittaSe.php:7
* @route '/nds/data/hitta-ses/create'
*/
CreateHittaSe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateHittaSe.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\CreateHittaSe::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/CreateHittaSe.php:7
* @route '/nds/data/hitta-ses/create'
*/
const CreateHittaSeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateHittaSe.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\CreateHittaSe::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/CreateHittaSe.php:7
* @route '/nds/data/hitta-ses/create'
*/
CreateHittaSeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateHittaSe.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaSes\Pages\CreateHittaSe::__invoke
* @see app/Filament/Data/Resources/HittaSes/Pages/CreateHittaSe.php:7
* @route '/nds/data/hitta-ses/create'
*/
CreateHittaSeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateHittaSe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateHittaSe.form = CreateHittaSeForm

export default CreateHittaSe