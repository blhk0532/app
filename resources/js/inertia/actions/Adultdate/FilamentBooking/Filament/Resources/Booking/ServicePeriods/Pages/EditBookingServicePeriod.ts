import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit'
*/
const EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.url(args, options),
    method: 'get',
})

EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit'
*/
const EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d.form = EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52dForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
const EditBookingServicePeriodef9754164f258cbda88caef0099cc3be = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.url(args, options),
    method: 'get',
})

EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
const EditBookingServicePeriodef9754164f258cbda88caef0099cc3beForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriodef9754164f258cbda88caef0099cc3beForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriodef9754164f258cbda88caef0099cc3beForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingServicePeriodef9754164f258cbda88caef0099cc3be.form = EditBookingServicePeriodef9754164f258cbda88caef0099cc3beForm

const EditBookingServicePeriod = {
    '/nds/booking/booking/service-periods/booking-service-periods/{record}/edit': EditBookingServicePeriod27d017aea779940e7aba65b4cf70b52d,
    '/nds/super/booking/service-periods/booking-service-periods/{record}/edit': EditBookingServicePeriodef9754164f258cbda88caef0099cc3be,
}

export default EditBookingServicePeriod