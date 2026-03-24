import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
const ProductsCluster = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ProductsCluster.url(options),
    method: 'get',
})

ProductsCluster.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
ProductsCluster.url = (options?: RouteQueryOptions) => {
    return ProductsCluster.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
ProductsCluster.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ProductsCluster.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
ProductsCluster.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ProductsCluster.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
const ProductsClusterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductsCluster.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
ProductsClusterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductsCluster.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\ProductsCluster::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/ProductsCluster.php:7
* @route '/nds/super/booking/products'
*/
ProductsClusterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductsCluster.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ProductsCluster.form = ProductsClusterForm

export default ProductsCluster