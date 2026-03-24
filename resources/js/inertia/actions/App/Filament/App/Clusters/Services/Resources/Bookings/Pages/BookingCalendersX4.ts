import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
const BookingCalendersX4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendersX4.url(options),
    method: 'get',
})

BookingCalendersX4.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x4',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
BookingCalendersX4.url = (options?: RouteQueryOptions) => {
    return BookingCalendersX4.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
BookingCalendersX4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendersX4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
BookingCalendersX4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BookingCalendersX4.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
const BookingCalendersX4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
BookingCalendersX4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
BookingCalendersX4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BookingCalendersX4.form = BookingCalendersX4Form

export default BookingCalendersX4