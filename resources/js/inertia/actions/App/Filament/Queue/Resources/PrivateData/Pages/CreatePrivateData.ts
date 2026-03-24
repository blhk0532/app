import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\CreatePrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/CreatePrivateData.php:7
* @route '/nds/queue/private-data/create'
*/
const CreatePrivateData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePrivateData.url(options),
    method: 'get',
})

CreatePrivateData.definition = {
    methods: ["get","head"],
    url: '/nds/queue/private-data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\CreatePrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/CreatePrivateData.php:7
* @route '/nds/queue/private-data/create'
*/
CreatePrivateData.url = (options?: RouteQueryOptions) => {
    return CreatePrivateData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\CreatePrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/CreatePrivateData.php:7
* @route '/nds/queue/private-data/create'
*/
CreatePrivateData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePrivateData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\CreatePrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/CreatePrivateData.php:7
* @route '/nds/queue/private-data/create'
*/
CreatePrivateData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePrivateData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\CreatePrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/CreatePrivateData.php:7
* @route '/nds/queue/private-data/create'
*/
const CreatePrivateDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePrivateData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\CreatePrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/CreatePrivateData.php:7
* @route '/nds/queue/private-data/create'
*/
CreatePrivateDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePrivateData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\CreatePrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/CreatePrivateData.php:7
* @route '/nds/queue/private-data/create'
*/
CreatePrivateDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePrivateData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreatePrivateData.form = CreatePrivateDataForm

export default CreatePrivateData