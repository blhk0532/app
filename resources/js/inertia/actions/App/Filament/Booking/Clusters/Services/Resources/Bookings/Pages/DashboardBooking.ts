import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
const DashboardBooking = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardBooking.url(options),
    method: 'get',
})

DashboardBooking.definition = {
    methods: ["get","head"],
    url: '/nds/booking/service/booking',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
DashboardBooking.url = (options?: RouteQueryOptions) => {
    return DashboardBooking.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
DashboardBooking.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardBooking.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
DashboardBooking.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DashboardBooking.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
const DashboardBookingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardBooking.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
DashboardBookingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardBooking.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
DashboardBookingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardBooking.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DashboardBooking.form = DashboardBookingForm

export default DashboardBooking