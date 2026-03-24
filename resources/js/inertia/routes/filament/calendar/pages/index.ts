import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
export const bookingCalendarsX1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendarsX1.url(options),
    method: 'get',
})

bookingCalendarsX1.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x1-custom',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
bookingCalendarsX1.url = (options?: RouteQueryOptions) => {
    return bookingCalendarsX1.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
bookingCalendarsX1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendarsX1.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
bookingCalendarsX1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bookingCalendarsX1.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
const bookingCalendarsX1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendarsX1.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
bookingCalendarsX1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendarsX1.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX1::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX1.php:7
* @route '/nds/calendar/nds-kalender-x1-custom'
*/
bookingCalendarsX1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendarsX1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bookingCalendarsX1.form = bookingCalendarsX1Form

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
export const bookingCalendersX2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendersX2.url(options),
    method: 'get',
})

bookingCalendersX2.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x2',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
bookingCalendersX2.url = (options?: RouteQueryOptions) => {
    return bookingCalendersX2.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
bookingCalendersX2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendersX2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
bookingCalendersX2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bookingCalendersX2.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
const bookingCalendersX2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
bookingCalendersX2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX2::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX2.php:7
* @route '/nds/calendar/nds-kalender-x2'
*/
bookingCalendersX2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bookingCalendersX2.form = bookingCalendersX2Form

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
export const bookingCalendarsX3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendarsX3.url(options),
    method: 'get',
})

bookingCalendarsX3.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x3-custom',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
bookingCalendarsX3.url = (options?: RouteQueryOptions) => {
    return bookingCalendarsX3.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
bookingCalendarsX3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendarsX3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
bookingCalendarsX3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bookingCalendarsX3.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
const bookingCalendarsX3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendarsX3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
bookingCalendarsX3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendarsX3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendarsX3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendarsX3.php:7
* @route '/nds/calendar/nds-kalender-x3-custom'
*/
bookingCalendarsX3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendarsX3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bookingCalendarsX3.form = bookingCalendarsX3Form

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
export const bookingCalendersX4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendersX4.url(options),
    method: 'get',
})

bookingCalendersX4.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x4',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
bookingCalendersX4.url = (options?: RouteQueryOptions) => {
    return bookingCalendersX4.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
bookingCalendersX4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendersX4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
bookingCalendersX4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bookingCalendersX4.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
const bookingCalendersX4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
bookingCalendersX4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX4::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX4.php:7
* @route '/nds/calendar/nds-kalender-x4'
*/
bookingCalendersX4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bookingCalendersX4.form = bookingCalendersX4Form

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/calendar/nds-kalender-x6'
*/
export const bookingCalendersX6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendersX6.url(options),
    method: 'get',
})

bookingCalendersX6.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/nds-kalender-x6',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/calendar/nds-kalender-x6'
*/
bookingCalendersX6.url = (options?: RouteQueryOptions) => {
    return bookingCalendersX6.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/calendar/nds-kalender-x6'
*/
bookingCalendersX6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendersX6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/calendar/nds-kalender-x6'
*/
bookingCalendersX6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bookingCalendersX6.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/calendar/nds-kalender-x6'
*/
const bookingCalendersX6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/calendar/nds-kalender-x6'
*/
bookingCalendersX6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/calendar/nds-kalender-x6'
*/
bookingCalendersX6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendersX6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bookingCalendersX6.form = bookingCalendersX6Form

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    bookingCalendarsX1: Object.assign(bookingCalendarsX1, bookingCalendarsX1),
    bookingCalendersX2: Object.assign(bookingCalendersX2, bookingCalendersX2),
    bookingCalendarsX3: Object.assign(bookingCalendarsX3, bookingCalendarsX3),
    bookingCalendersX4: Object.assign(bookingCalendersX4, bookingCalendersX4),
    bookingCalendersX6: Object.assign(bookingCalendersX6, bookingCalendersX6),
}

export default pages