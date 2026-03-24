import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
const BookingDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingDashboard.url(options),
    method: 'get',
})

BookingDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/booking',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
BookingDashboard.url = (options?: RouteQueryOptions) => {
    return BookingDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
BookingDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
BookingDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BookingDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
const BookingDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
BookingDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
BookingDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BookingDashboard.form = BookingDashboardForm

export default BookingDashboard