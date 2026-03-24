import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}'
*/
const ViewBookingDataLead = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead.url(args, options),
    method: 'get',
})

ViewBookingDataLead.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/booking-data-leads/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLead.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewBookingDataLead.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLead.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLead.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingDataLead.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}'
*/
const ViewBookingDataLeadForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLeadForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLeadForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingDataLead.form = ViewBookingDataLeadForm

export default ViewBookingDataLead