import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/products/categories'
*/
const ListCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCategories.url(options),
    method: 'get',
})

ListCategories.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/products/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/products/categories'
*/
ListCategories.url = (options?: RouteQueryOptions) => {
    return ListCategories.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/products/categories'
*/
ListCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCategories.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/products/categories'
*/
ListCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCategories.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/products/categories'
*/
const ListCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCategories.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/products/categories'
*/
ListCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCategories.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Products\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Products/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/products/categories'
*/
ListCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCategories.form = ListCategoriesForm

export default ListCategories