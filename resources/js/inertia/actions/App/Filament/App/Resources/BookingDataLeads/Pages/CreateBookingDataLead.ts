import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/create'
*/
const CreateBookingDataLead = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLead.url(args, options),
    method: 'get',
})

CreateBookingDataLead.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/booking-data-leads/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLead.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateBookingDataLead.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLead.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLead.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingDataLead.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/create'
*/
const CreateBookingDataLeadForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLeadForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLeadForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingDataLead.form = CreateBookingDataLeadForm

export default CreateBookingDataLead