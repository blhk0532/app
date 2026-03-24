import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}'
*/
const ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.url(args, options),
    method: 'get',
})

ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/service-periods/booking-service-periods/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}'
*/
const ViewBookingServicePeriod97713c8258d2adc21d74119b803f571aForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriod97713c8258d2adc21d74119b803f571aForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriod97713c8258d2adc21d74119b803f571aForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a.form = ViewBookingServicePeriod97713c8258d2adc21d74119b803f571aForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
const ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.url(args, options),
    method: 'get',
})

ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
const ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5.form = ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5Form

const ViewBookingServicePeriod = {
    '/nds/booking/booking/service-periods/booking-service-periods/{record}': ViewBookingServicePeriod97713c8258d2adc21d74119b803f571a,
    '/nds/super/booking/service-periods/booking-service-periods/{record}': ViewBookingServicePeriodf950d26ebbc69dbdb630f368a90990d5,
}

export default ViewBookingServicePeriod