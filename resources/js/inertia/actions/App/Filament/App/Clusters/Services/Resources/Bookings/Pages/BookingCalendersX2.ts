import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
const BookingCalendersX2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendersX2.url(options),
    method: 'get',
})

BookingCalendersX2.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x2',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
BookingCalendersX2.url = (options?: RouteQueryOptions) => {
    return BookingCalendersX2.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
BookingCalendersX2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendersX2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
BookingCalendersX2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BookingCalendersX2.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
const BookingCalendersX2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
BookingCalendersX2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
BookingCalendersX2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BookingCalendersX2.form = BookingCalendersX2Form

export default BookingCalendersX2