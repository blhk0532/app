import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\CarryData\Pages\CreateCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/CreateCarryData.php:7
* @route '/nds/data/carry-data/create'
*/
const CreateCarryData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCarryData.url(options),
    method: 'get',
})

CreateCarryData.definition = {
    methods: ["get","head"],
    url: '/nds/data/carry-data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\CreateCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/CreateCarryData.php:7
* @route '/nds/data/carry-data/create'
*/
CreateCarryData.url = (options?: RouteQueryOptions) => {
    return CreateCarryData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\CreateCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/CreateCarryData.php:7
* @route '/nds/data/carry-data/create'
*/
CreateCarryData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCarryData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\CreateCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/CreateCarryData.php:7
* @route '/nds/data/carry-data/create'
*/
CreateCarryData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCarryData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\CreateCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/CreateCarryData.php:7
* @route '/nds/data/carry-data/create'
*/
const CreateCarryDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCarryData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\CreateCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/CreateCarryData.php:7
* @route '/nds/data/carry-data/create'
*/
CreateCarryDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCarryData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\CreateCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/CreateCarryData.php:7
* @route '/nds/data/carry-data/create'
*/
CreateCarryDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCarryData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCarryData.form = CreateCarryDataForm

export default CreateCarryData