import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
const BookingCalendarsX3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendarsX3.url(options),
    method: 'get',
})

BookingCalendarsX3.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x3-custom',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
BookingCalendarsX3.url = (options?: RouteQueryOptions) => {
    return BookingCalendarsX3.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
BookingCalendarsX3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendarsX3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
BookingCalendarsX3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BookingCalendarsX3.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
const BookingCalendarsX3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendarsX3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
BookingCalendarsX3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendarsX3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
BookingCalendarsX3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendarsX3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BookingCalendarsX3.form = BookingCalendarsX3Form

export default BookingCalendarsX3