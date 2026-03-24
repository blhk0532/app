import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\CreateRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/CreateRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/create'
*/
const CreateRatsitPostort = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRatsitPostort.url(options),
    method: 'get',
})

CreateRatsitPostort.definition = {
    methods: ["get","head"],
    url: '/nds/queue/ratsit-postorts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\CreateRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/CreateRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/create'
*/
CreateRatsitPostort.url = (options?: RouteQueryOptions) => {
    return CreateRatsitPostort.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\CreateRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/CreateRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/create'
*/
CreateRatsitPostort.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRatsitPostort.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\CreateRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/CreateRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/create'
*/
CreateRatsitPostort.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRatsitPostort.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\CreateRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/CreateRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/create'
*/
const CreateRatsitPostortForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitPostort.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\CreateRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/CreateRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/create'
*/
CreateRatsitPostortForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitPostort.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\CreateRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/CreateRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/create'
*/
CreateRatsitPostortForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRatsitPostort.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRatsitPostort.form = CreateRatsitPostortForm

export default CreateRatsitPostort