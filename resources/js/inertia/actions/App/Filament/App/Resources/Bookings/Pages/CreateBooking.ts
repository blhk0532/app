import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
const CreateBooking = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking.url(args, options),
    method: 'get',
})

CreateBooking.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/mina-bokningar/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBooking.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return CreateBooking.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBooking.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBooking.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBooking.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
const CreateBookingForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBookingForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBookingForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBooking.form = CreateBookingForm

export default CreateBooking