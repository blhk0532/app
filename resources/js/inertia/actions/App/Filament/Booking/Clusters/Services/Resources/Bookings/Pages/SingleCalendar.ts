import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
const SingleCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SingleCalendar.url(options),
    method: 'get',
})

SingleCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/booking/single-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
SingleCalendar.url = (options?: RouteQueryOptions) => {
    return SingleCalendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
SingleCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SingleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
SingleCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SingleCalendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
const SingleCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SingleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
SingleCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SingleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
SingleCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SingleCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SingleCalendar.form = SingleCalendarForm

export default SingleCalendar