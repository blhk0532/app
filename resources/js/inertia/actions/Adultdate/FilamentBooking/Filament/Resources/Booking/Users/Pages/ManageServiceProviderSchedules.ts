import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/booking/booking/users/{record}/schedule'
*/
const ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.url(args, options),
    method: 'get',
})

ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/users/{record}/schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/booking/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/booking/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/booking/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/booking/booking/users/{record}/schedule'
*/
const ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54faddForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/booking/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54faddForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/booking/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54faddForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd.form = ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54faddForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
const ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.url(args, options),
    method: 'get',
})

ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/users/{record}/schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
const ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681cForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681cForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681cForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c.form = ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681cForm

const ManageServiceProviderSchedules = {
    '/nds/booking/booking/users/{record}/schedule': ManageServiceProviderSchedules1b0033c4edfd4ef2811d5415eb54fadd,
    '/nds/super/booking/users/{record}/schedule': ManageServiceProviderSchedulese74016d9905f290ae1b61cbf037f681c,
}

export default ManageServiceProviderSchedules