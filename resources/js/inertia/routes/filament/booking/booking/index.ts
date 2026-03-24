import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import services11ad26 from './services'
/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
servicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

services.form = servicesForm

const booking = {
    services: Object.assign(services, services11ad26),
}

export default booking