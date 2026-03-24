import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
const ListOrders = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOrders.url(options),
    method: 'get',
})

ListOrders.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrders.url = (options?: RouteQueryOptions) => {
    return ListOrders.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrders.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOrders.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrders.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOrders.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
const ListOrdersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrders.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrdersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrders.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrdersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrders.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOrders.form = ListOrdersForm

export default ListOrders