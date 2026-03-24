import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
const ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'get',
})

ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/daily-locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url = (options?: RouteQueryOptions) => {
    return ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
const ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.form = ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98cForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
const ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'get',
})

ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/daily-locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url = (options?: RouteQueryOptions) => {
    return ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
const ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.form = ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3Form

const ListDailyLocations = {
    '/nds/booking/booking/daily-locations': ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c,
    '/nds/super/booking/daily-locations': ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3,
}

export default ListDailyLocations