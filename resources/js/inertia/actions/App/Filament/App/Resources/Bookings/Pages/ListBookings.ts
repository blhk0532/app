import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
const ListBookings = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings.url(args, options),
    method: 'get',
})

ListBookings.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/mina-bokningar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookings.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListBookings.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookings.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookings.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookings.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
const ListBookingsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookingsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookingsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookings.form = ListBookingsForm

export default ListBookings