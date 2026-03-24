import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
const DashboardBooking = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardBooking.url(options),
    method: 'get',
})

DashboardBooking.definition = {
    methods: ["get","head"],
    url: '/nds/super/service/booking',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
DashboardBooking.url = (options?: RouteQueryOptions) => {
    return DashboardBooking.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
DashboardBooking.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
DashboardBooking.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DashboardBooking.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
const DashboardBookingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
DashboardBookingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
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