import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\CreateRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/CreateRatsitData.php:7
* @route '/nds/queue/ratsit-data/create'
*/
const CreateRatsitData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRatsitData.url(options),
    method: 'get',
})

CreateRatsitData.definition = {
    methods: ["get","head"],
    url: '/nds/queue/ratsit-data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\CreateRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/CreateRatsitData.php:7
* @route '/nds/queue/ratsit-data/create'
*/
CreateRatsitData.url = (options?: RouteQueryOptions) => {
    return CreateRatsitData.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\CreateRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/CreateRatsitData.php:7
* @route '/nds/queue/ratsit-data/create'
*/
CreateRatsitData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRatsitData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\CreateRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/CreateRatsitData.php:7
* @route '/nds/queue/ratsit-data/create'
*/
CreateRatsitData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRatsitData.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\CreateRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/CreateRatsitData.php:7
* @route '/nds/queue/ratsit-data/create'
*/
const CreateRatsitDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\CreateRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/CreateRatsitData.php:7
* @route '/nds/queue/ratsit-data/create'
*/
CreateRatsitDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitData.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitData\Pages\CreateRatsitData::__invoke
* @see app/Filament/Queue/Resources/RatsitData/Pages/CreateRatsitData.php:7
* @route '/nds/queue/ratsit-data/create'
*/
CreateRatsitDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRatsitData.form = CreateRatsitDataForm

export default CreateRatsitData