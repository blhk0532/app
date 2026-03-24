import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\ListBrands::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/ListBrands.php:7
* @route '/nds/super/booking/products/brands'
*/
const ListBrands = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBrands.url(options),
    method: 'get',
})

ListBrands.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/products/brands',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\ListBrands::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/ListBrands.php:7
* @route '/nds/super/booking/products/brands'
*/
ListBrands.url = (options?: RouteQueryOptions) => {
    return ListBrands.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\ListBrands::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/ListBrands.php:7
* @route '/nds/super/booking/products/brands'
*/
ListBrands.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBrands.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\ListBrands::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/ListBrands.php:7
* @route '/nds/super/booking/products/brands'
*/
ListBrands.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBrands.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\ListBrands::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/ListBrands.php:7
* @route '/nds/super/booking/products/brands'
*/
const ListBrandsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBrands.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\ListBrands::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/ListBrands.php:7
* @route '/nds/super/booking/products/brands'
*/
ListBrandsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBrands.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\ListBrands::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/ListBrands.php:7
* @route '/nds/super/booking/products/brands'
*/
ListBrandsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBrands.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBrands.form = ListBrandsForm

export default ListBrands