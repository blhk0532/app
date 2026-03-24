import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import products237d17 from './products'
import services11ad26 from './services'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
export const products = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(options),
    method: 'get',
})

products.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
products.url = (options?: RouteQueryOptions) => {
    return products.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
products.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
products.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: products.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
const productsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: products.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
productsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: products.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
productsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: products.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

products.form = productsForm

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\ServicesCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/ServicesCluster.php:7
* @route '/nds/super/booking/services'
*/
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\ServicesCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/ServicesCluster.php:7
* @route '/nds/super/booking/services'
*/
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\ServicesCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/ServicesCluster.php:7
* @route '/nds/super/booking/services'
*/
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\ServicesCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/ServicesCluster.php:7
* @route '/nds/super/booking/services'
*/
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\ServicesCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/ServicesCluster.php:7
* @route '/nds/super/booking/services'
*/
const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\ServicesCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/ServicesCluster.php:7
* @route '/nds/super/booking/services'
*/
servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\ServicesCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/ServicesCluster.php:7
* @route '/nds/super/booking/services'
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
    products: Object.assign(products, products237d17),
    services: Object.assign(services, services11ad26),
}

export default booking