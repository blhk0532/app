import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/super/services/clients'
*/
const ListClients = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients.url(options),
    method: 'get',
})

ListClients.definition = {
    methods: ["get","head"],
    url: '/nds/super/services/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/super/services/clients'
*/
ListClients.url = (options?: RouteQueryOptions) => {
    return ListClients.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/super/services/clients'
*/
ListClients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/super/services/clients'
*/
ListClients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClients.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/super/services/clients'
*/
const ListClientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/super/services/clients'
*/
ListClientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/super/services/clients'
*/
ListClientsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListClients.form = ListClientsForm

export default ListClients