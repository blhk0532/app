import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
const CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'get',
})

CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
const CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.form = CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305aForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
const CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'get',
})

CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
const CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.form = CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
const CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'get',
})

CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
const CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.form = CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcfForm

const CreateBookingCalendar = {
    '/nds/booking/booking-calendars/create': CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a,
    '/nds/calendar/booking-calendars/create': CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7,
    '/nds/super/booking-calendars/create': CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf,
}

export default CreateBookingCalendar