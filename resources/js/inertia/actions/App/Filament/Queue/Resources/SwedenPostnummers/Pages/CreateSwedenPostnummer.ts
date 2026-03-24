import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\CreateSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/CreateSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/create'
*/
const CreateSwedenPostnummer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSwedenPostnummer.url(options),
    method: 'get',
})

CreateSwedenPostnummer.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postnummers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\CreateSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/CreateSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/create'
*/
CreateSwedenPostnummer.url = (options?: RouteQueryOptions) => {
    return CreateSwedenPostnummer.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\CreateSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/CreateSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/create'
*/
CreateSwedenPostnummer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSwedenPostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\CreateSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/CreateSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/create'
*/
CreateSwedenPostnummer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSwedenPostnummer.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\CreateSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/CreateSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/create'
*/
const CreateSwedenPostnummerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenPostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\CreateSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/CreateSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/create'
*/
CreateSwedenPostnummerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenPostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\CreateSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/CreateSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/create'
*/
CreateSwedenPostnummerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenPostnummer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSwedenPostnummer.form = CreateSwedenPostnummerForm

export default CreateSwedenPostnummer