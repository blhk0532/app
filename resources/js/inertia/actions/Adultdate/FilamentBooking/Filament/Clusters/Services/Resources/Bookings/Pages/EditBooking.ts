import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\EditBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/super/services/bookings/{record}/edit'
*/
const EditBooking = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBooking.url(args, options),
    method: 'get',
})

EditBooking.definition = {
    methods: ["get","head"],
    url: '/nds/super/services/bookings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\EditBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/super/services/bookings/{record}/edit'
*/
EditBooking.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBooking.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\EditBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/super/services/bookings/{record}/edit'
*/
EditBooking.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBooking.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\EditBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/super/services/bookings/{record}/edit'
*/
EditBooking.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBooking.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\EditBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/super/services/bookings/{record}/edit'
*/
const EditBookingForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBooking.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\EditBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/super/services/bookings/{record}/edit'
*/
EditBookingForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBooking.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\EditBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/super/services/bookings/{record}/edit'
*/
EditBookingForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBooking.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBooking.form = EditBookingForm

export default EditBooking