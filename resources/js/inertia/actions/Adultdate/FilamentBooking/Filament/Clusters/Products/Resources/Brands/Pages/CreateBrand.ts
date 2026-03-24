import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\CreateBrand::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/CreateBrand.php:7
* @route '/nds/super/booking/products/brands/create'
*/
const CreateBrand = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBrand.url(options),
    method: 'get',
})

CreateBrand.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/products/brands/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\CreateBrand::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/CreateBrand.php:7
* @route '/nds/super/booking/products/brands/create'
*/
CreateBrand.url = (options?: RouteQueryOptions) => {
    return CreateBrand.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\CreateBrand::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/CreateBrand.php:7
* @route '/nds/super/booking/products/brands/create'
*/
CreateBrand.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBrand.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\CreateBrand::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/CreateBrand.php:7
* @route '/nds/super/booking/products/brands/create'
*/
CreateBrand.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBrand.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\CreateBrand::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/CreateBrand.php:7
* @route '/nds/super/booking/products/brands/create'
*/
const CreateBrandForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBrand.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\CreateBrand::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/CreateBrand.php:7
* @route '/nds/super/booking/products/brands/create'
*/
CreateBrandForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBrand.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Brands\Pages\CreateBrand::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Brands/Pages/CreateBrand.php:7
* @route '/nds/super/booking/products/brands/create'
*/
CreateBrandForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBrand.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBrand.form = CreateBrandForm

export default CreateBrand