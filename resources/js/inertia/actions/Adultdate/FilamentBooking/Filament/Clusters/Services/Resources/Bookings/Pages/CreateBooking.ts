import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\CreateBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/super/services/bookings/create'
*/
const CreateBooking = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking.url(options),
    method: 'get',
})

CreateBooking.definition = {
    methods: ["get","head"],
    url: '/nds/super/services/bookings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\CreateBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/super/services/bookings/create'
*/
CreateBooking.url = (options?: RouteQueryOptions) => {
    return CreateBooking.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\CreateBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/super/services/bookings/create'
*/
CreateBooking.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\CreateBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/super/services/bookings/create'
*/
CreateBooking.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBooking.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\CreateBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/super/services/bookings/create'
*/
const CreateBookingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\CreateBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/super/services/bookings/create'
*/
CreateBookingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\CreateBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/super/services/bookings/create'
*/
CreateBookingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBooking.form = CreateBookingForm

export default CreateBooking