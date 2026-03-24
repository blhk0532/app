import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/{record}/edit'
*/
const EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.url(args, options),
    method: 'get',
})

EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking-calendars/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/{record}/edit'
*/
EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/{record}/edit'
*/
EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/{record}/edit'
*/
EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/{record}/edit'
*/
const EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/{record}/edit'
*/
EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/{record}/edit'
*/
EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92.form = EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/{record}/edit'
*/
const EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.url(args, options),
    method: 'get',
})

EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/booking-calendars/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/{record}/edit'
*/
EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/{record}/edit'
*/
EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/{record}/edit'
*/
EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/{record}/edit'
*/
const EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32cForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/{record}/edit'
*/
EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32cForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/{record}/edit'
*/
EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32cForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c.form = EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32cForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
const EditBookingCalendar79a2da47ed53069862cf9376cf4506f5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'get',
})

EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-calendars/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
const EditBookingCalendar79a2da47ed53069862cf9376cf4506f5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.form = EditBookingCalendar79a2da47ed53069862cf9376cf4506f5Form

const EditBookingCalendar = {
    '/nds/booking/booking-calendars/{record}/edit': EditBookingCalendara4093d0e97f3bc45e74ad16f969a7c92,
    '/nds/calendar/booking-calendars/{record}/edit': EditBookingCalendarff242282b9adc2a4f9a321c7ca17a32c,
    '/nds/super/booking-calendars/{record}/edit': EditBookingCalendar79a2da47ed53069862cf9376cf4506f5,
}

export default EditBookingCalendar