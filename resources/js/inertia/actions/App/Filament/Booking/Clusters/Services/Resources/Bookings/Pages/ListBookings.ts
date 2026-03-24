import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/booking/services/bookings'
*/
const ListBookings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings.url(options),
    method: 'get',
})

ListBookings.definition = {
    methods: ["get","head"],
    url: '/nds/booking/services/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/booking/services/bookings'
*/
ListBookings.url = (options?: RouteQueryOptions) => {
    return ListBookings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/booking/services/bookings'
*/
ListBookings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/booking/services/bookings'
*/
ListBookings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/booking/services/bookings'
*/
const ListBookingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/booking/services/bookings'
*/
ListBookingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/booking/services/bookings'
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