import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'get',
})

ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/service-periods/booking-service-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url = (options?: RouteQueryOptions) => {
    return ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178caForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178caForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178caForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.form = ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178caForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'get',
})

ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url = (options?: RouteQueryOptions) => {
    return ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.form = ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541Form

const ListBookingServicePeriods = {
    '/nds/booking/booking/service-periods/booking-service-periods': ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca,
    '/nds/super/booking/service-periods/booking-service-periods': ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541,
}

export default ListBookingServicePeriods