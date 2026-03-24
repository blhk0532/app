import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
const InertiaCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: InertiaCalendar.url(options),
    method: 'get',
})

InertiaCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/booking/inertia-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
InertiaCalendar.url = (options?: RouteQueryOptions) => {
    return InertiaCalendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
InertiaCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: InertiaCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
InertiaCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: InertiaCalendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
const InertiaCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InertiaCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
InertiaCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InertiaCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
InertiaCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InertiaCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

InertiaCalendar.form = InertiaCalendarForm

export default InertiaCalendar