import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\CreateMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/CreateMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/create'
*/
const CreateMerinfoData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMerinfoData.url(options),
    method: 'get',
})

CreateMerinfoData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/merinfo-data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\CreateMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/CreateMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/create'
*/
CreateMerinfoData.url = (options?: RouteQueryOptions) => {
    return CreateMerinfoData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\CreateMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/CreateMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/create'
*/
CreateMerinfoData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMerinfoData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\CreateMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/CreateMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/create'
*/
CreateMerinfoData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMerinfoData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\CreateMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/CreateMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/create'
*/
const CreateMerinfoDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMerinfoData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\CreateMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/CreateMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/create'
*/
CreateMerinfoDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMerinfoData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\CreateMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/CreateMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/create'
*/
CreateMerinfoDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMerinfoData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateMerinfoData.form = CreateMerinfoDataForm

export default CreateMerinfoData