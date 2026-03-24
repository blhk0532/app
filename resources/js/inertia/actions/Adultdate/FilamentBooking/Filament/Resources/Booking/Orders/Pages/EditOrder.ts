import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
const EditOrder = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOrder.url(args, options),
    method: 'get',
})

EditOrder.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/orders/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrder.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOrder.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrder.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOrder.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrder.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOrder.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
const EditOrderForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrderForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrderForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOrder.form = EditOrderForm

export default EditOrder