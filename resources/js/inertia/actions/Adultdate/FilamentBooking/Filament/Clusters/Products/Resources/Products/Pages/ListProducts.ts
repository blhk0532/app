import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\ListProducts::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/ListProducts.php:7
* @route '/nds/super/booking/products/products'
*/
const ListProducts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListProducts.url(options),
    method: 'get',
})

ListProducts.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/products/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\ListProducts::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/ListProducts.php:7
* @route '/nds/super/booking/products/products'
*/
ListProducts.url = (options?: RouteQueryOptions) => {
    return ListProducts.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\ListProducts::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/ListProducts.php:7
* @route '/nds/super/booking/products/products'
*/
ListProducts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListProducts.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\ListProducts::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/ListProducts.php:7
* @route '/nds/super/booking/products/products'
*/
ListProducts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListProducts.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\ListProducts::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/ListProducts.php:7
* @route '/nds/super/booking/products/products'
*/
const ListProductsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListProducts.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\ListProducts::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/ListProducts.php:7
* @route '/nds/super/booking/products/products'
*/
ListProductsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListProducts.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\ListProducts::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/ListProducts.php:7
* @route '/nds/super/booking/products/products'
*/
ListProductsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListProducts.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListProducts.form = ListProductsForm

export default ListProducts