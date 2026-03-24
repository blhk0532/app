import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
const ListBookingDataLeads = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeads.url(options),
    method: 'get',
})

ListBookingDataLeads.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-data-leads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads.url = (options?: RouteQueryOptions) => {
    return ListBookingDataLeads.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeads.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingDataLeads.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
const ListBookingDataLeadsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeadsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeadsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingDataLeads.form = ListBookingDataLeadsForm

export default ListBookingDataLeads