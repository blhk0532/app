import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/super/services/bookings'
*/
const ListBookings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings.url(options),
    method: 'get',
})

ListBookings.definition = {
    methods: ["get","head"],
    url: '/nds/super/services/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/super/services/bookings'
*/
ListBookings.url = (options?: RouteQueryOptions) => {
    return ListBookings.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/super/services/bookings'
*/
ListBookings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/super/services/bookings'
*/
ListBookings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookings.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/super/services/bookings'
*/
const ListBookingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/super/services/bookings'
*/
ListBookingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/super/services/bookings'
*/
ListBookingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookings.form = ListBookingsForm

export default ListBookings