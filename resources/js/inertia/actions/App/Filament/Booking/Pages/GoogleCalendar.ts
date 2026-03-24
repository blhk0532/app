import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
const GoogleCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GoogleCalendar.url(options),
    method: 'get',
})

GoogleCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/booking/google-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
GoogleCalendar.url = (options?: RouteQueryOptions) => {
    return GoogleCalendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
GoogleCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GoogleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
GoogleCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GoogleCalendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
const GoogleCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GoogleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
GoogleCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GoogleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
GoogleCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GoogleCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GoogleCalendar.form = GoogleCalendarForm

export default GoogleCalendar