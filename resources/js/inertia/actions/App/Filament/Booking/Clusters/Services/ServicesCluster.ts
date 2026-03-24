import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
const ServicesCluster = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServicesCluster.url(options),
    method: 'get',
})

ServicesCluster.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
ServicesCluster.url = (options?: RouteQueryOptions) => {
    return ServicesCluster.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
ServicesCluster.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServicesCluster.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
ServicesCluster.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ServicesCluster.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
const ServicesClusterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServicesCluster.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
ServicesClusterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServicesCluster.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\ServicesCluster::__invoke
* @see app/Filament/Booking/Clusters/Services/ServicesCluster.php:7
* @route '/nds/booking/booking/services'
*/
ServicesClusterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServicesCluster.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ServicesCluster.form = ServicesClusterForm

export default ServicesCluster