import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\CreateUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/CreateUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/create'
*/
const CreateUpplysningData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUpplysningData.url(options),
    method: 'get',
})

CreateUpplysningData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/upplysning-data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\CreateUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/CreateUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/create'
*/
CreateUpplysningData.url = (options?: RouteQueryOptions) => {
    return CreateUpplysningData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\CreateUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/CreateUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/create'
*/
CreateUpplysningData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUpplysningData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\CreateUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/CreateUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/create'
*/
CreateUpplysningData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUpplysningData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\CreateUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/CreateUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/create'
*/
const CreateUpplysningDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUpplysningData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\CreateUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/CreateUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/create'
*/
CreateUpplysningDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUpplysningData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\CreateUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/CreateUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/create'
*/
CreateUpplysningDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUpplysningData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUpplysningData.form = CreateUpplysningDataForm

export default CreateUpplysningData