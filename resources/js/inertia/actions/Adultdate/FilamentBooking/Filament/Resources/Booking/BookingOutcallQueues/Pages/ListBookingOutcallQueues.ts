import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
const ListBookingOutcallQueues = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingOutcallQueues.url(options),
    method: 'get',
})

ListBookingOutcallQueues.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/booking-outcall-queues',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues.url = (options?: RouteQueryOptions) => {
    return ListBookingOutcallQueues.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingOutcallQueues.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingOutcallQueues.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
const ListBookingOutcallQueuesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueuesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueuesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingOutcallQueues.form = ListBookingOutcallQueuesForm

export default ListBookingOutcallQueues