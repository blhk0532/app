import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
const EditBooking = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBooking.url(args, options),
    method: 'get',
})

EditBooking.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/mina-bokningar/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBooking.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return EditBooking.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBooking.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBooking.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBooking.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBooking.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
const EditBookingForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBooking.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBookingForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBooking.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBookingForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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