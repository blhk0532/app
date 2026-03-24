import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\CreateHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/CreateHittaData.php:7
* @route '/nds/data/databaser/hitta-data/create'
*/
const CreateHittaData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateHittaData.url(options),
    method: 'get',
})

CreateHittaData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/hitta-data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\CreateHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/CreateHittaData.php:7
* @route '/nds/data/databaser/hitta-data/create'
*/
CreateHittaData.url = (options?: RouteQueryOptions) => {
    return CreateHittaData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\CreateHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/CreateHittaData.php:7
* @route '/nds/data/databaser/hitta-data/create'
*/
CreateHittaData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateHittaData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\CreateHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/CreateHittaData.php:7
* @route '/nds/data/databaser/hitta-data/create'
*/
CreateHittaData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateHittaData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\CreateHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/CreateHittaData.php:7
* @route '/nds/data/databaser/hitta-data/create'
*/
const CreateHittaDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateHittaData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\CreateHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/CreateHittaData.php:7
* @route '/nds/data/databaser/hitta-data/create'
*/
CreateHittaDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateHittaData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\CreateHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/CreateHittaData.php:7
* @route '/nds/data/databaser/hitta-data/create'
*/
CreateHittaDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateHittaData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateHittaData.form = CreateHittaDataForm

export default CreateHittaData