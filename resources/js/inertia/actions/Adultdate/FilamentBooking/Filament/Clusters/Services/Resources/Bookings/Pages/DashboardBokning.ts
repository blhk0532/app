import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
const DashboardBokning = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardBokning.url(options),
    method: 'get',
})

DashboardBokning.definition = {
    methods: ["get","head"],
    url: '/nds/super/service/bokning',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
DashboardBokning.url = (options?: RouteQueryOptions) => {
    return DashboardBokning.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
DashboardBokning.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardBokning.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
DashboardBokning.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DashboardBokning.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
const DashboardBokningForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardBokning.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
DashboardBokningForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardBokning.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
DashboardBokningForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardBokning.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DashboardBokning.form = DashboardBokningForm

export default DashboardBokning