import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
const BookingCalendarsX1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendarsX1.url(options),
    method: 'get',
})

BookingCalendarsX1.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x1-custom',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
BookingCalendarsX1.url = (options?: RouteQueryOptions) => {
    return BookingCalendarsX1.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
BookingCalendarsX1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendarsX1.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
BookingCalendarsX1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BookingCalendarsX1.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
const BookingCalendarsX1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendarsX1.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
BookingCalendarsX1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendarsX1.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
BookingCalendarsX1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendarsX1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BookingCalendarsX1.form = BookingCalendarsX1Form

export default BookingCalendarsX1