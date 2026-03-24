import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'get',
})

CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/service-periods/booking-service-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url = (options?: RouteQueryOptions) => {
    return CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.form = CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'get',
})

CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url = (options?: RouteQueryOptions) => {
    return CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.form = CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87Form

const CreateBookingServicePeriod = {
    '/nds/booking/booking/service-periods/booking-service-periods/create': CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537,
    '/nds/super/booking/service-periods/booking-service-periods/create': CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87,
}

export default CreateBookingServicePeriod