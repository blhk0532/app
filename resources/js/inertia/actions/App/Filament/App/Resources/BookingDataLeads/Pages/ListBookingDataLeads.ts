import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads'
*/
const ListBookingDataLeads = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeads.url(args, options),
    method: 'get',
})

ListBookingDataLeads.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/booking-data-leads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads'
*/
ListBookingDataLeads.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListBookingDataLeads.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads'
*/
ListBookingDataLeads.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeads.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads'
*/
ListBookingDataLeads.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingDataLeads.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads'
*/
const ListBookingDataLeadsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads'
*/
ListBookingDataLeadsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads'
*/
ListBookingDataLeadsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingDataLeads.form = ListBookingDataLeadsForm

export default ListBookingDataLeads