import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/booking/services/clients'
*/
const ListClients = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients.url(options),
    method: 'get',
})

ListClients.definition = {
    methods: ["get","head"],
    url: '/nds/booking/services/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/booking/services/clients'
*/
ListClients.url = (options?: RouteQueryOptions) => {
    return ListClients.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/booking/services/clients'
*/
ListClients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/booking/services/clients'
*/
ListClients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClients.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/booking/services/clients'
*/
const ListClientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/booking/services/clients'
*/
ListClientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\ListClients::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/ListClients.php:7
* @route '/nds/booking/services/clients'
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