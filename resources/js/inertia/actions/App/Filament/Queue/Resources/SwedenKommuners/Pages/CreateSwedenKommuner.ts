import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\CreateSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/CreateSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/create'
*/
const CreateSwedenKommuner = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSwedenKommuner.url(options),
    method: 'get',
})

CreateSwedenKommuner.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-kommuners/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\CreateSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/CreateSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/create'
*/
CreateSwedenKommuner.url = (options?: RouteQueryOptions) => {
    return CreateSwedenKommuner.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\CreateSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/CreateSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/create'
*/
CreateSwedenKommuner.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSwedenKommuner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\CreateSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/CreateSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/create'
*/
CreateSwedenKommuner.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSwedenKommuner.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\CreateSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/CreateSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/create'
*/
const CreateSwedenKommunerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenKommuner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\CreateSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/CreateSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/create'
*/
CreateSwedenKommunerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenKommuner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\CreateSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/CreateSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/create'
*/
CreateSwedenKommunerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenKommuner.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSwedenKommuner.form = CreateSwedenKommunerForm

export default CreateSwedenKommuner