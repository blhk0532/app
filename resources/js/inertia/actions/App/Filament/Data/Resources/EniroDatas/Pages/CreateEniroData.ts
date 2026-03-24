import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\CreateEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/CreateEniroData.php:7
* @route '/nds/data/databaser/eniro-data/create'
*/
const CreateEniroData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateEniroData.url(options),
    method: 'get',
})

CreateEniroData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/eniro-data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\CreateEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/CreateEniroData.php:7
* @route '/nds/data/databaser/eniro-data/create'
*/
CreateEniroData.url = (options?: RouteQueryOptions) => {
    return CreateEniroData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\CreateEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/CreateEniroData.php:7
* @route '/nds/data/databaser/eniro-data/create'
*/
CreateEniroData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateEniroData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\CreateEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/CreateEniroData.php:7
* @route '/nds/data/databaser/eniro-data/create'
*/
CreateEniroData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateEniroData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\CreateEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/CreateEniroData.php:7
* @route '/nds/data/databaser/eniro-data/create'
*/
const CreateEniroDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEniroData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\CreateEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/CreateEniroData.php:7
* @route '/nds/data/databaser/eniro-data/create'
*/
CreateEniroDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEniroData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\CreateEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/CreateEniroData.php:7
* @route '/nds/data/databaser/eniro-data/create'
*/
CreateEniroDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEniroData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateEniroData.form = CreateEniroDataForm

export default CreateEniroData