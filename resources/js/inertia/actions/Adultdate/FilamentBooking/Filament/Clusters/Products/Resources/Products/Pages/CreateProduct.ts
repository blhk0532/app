import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\CreateProduct::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/CreateProduct.php:7
* @route '/nds/super/booking/products/products/create'
*/
const CreateProduct = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateProduct.url(options),
    method: 'get',
})

CreateProduct.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/products/products/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\CreateProduct::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/CreateProduct.php:7
* @route '/nds/super/booking/products/products/create'
*/
CreateProduct.url = (options?: RouteQueryOptions) => {
    return CreateProduct.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\CreateProduct::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/CreateProduct.php:7
* @route '/nds/super/booking/products/products/create'
*/
CreateProduct.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateProduct.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\CreateProduct::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/CreateProduct.php:7
* @route '/nds/super/booking/products/products/create'
*/
CreateProduct.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateProduct.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\CreateProduct::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/CreateProduct.php:7
* @route '/nds/super/booking/products/products/create'
*/
const CreateProductForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateProduct.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\CreateProduct::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/CreateProduct.php:7
* @route '/nds/super/booking/products/products/create'
*/
CreateProductForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateProduct.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Products\Pages\CreateProduct::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Products/Pages/CreateProduct.php:7
* @route '/nds/super/booking/products/products/create'
*/
CreateProductForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateProduct.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateProduct.form = CreateProductForm

export default CreateProduct