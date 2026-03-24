import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}/edit'
*/
const EditBookingDataLead = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingDataLead.url(args, options),
    method: 'get',
})

EditBookingDataLead.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/booking-data-leads/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLead.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditBookingDataLead.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLead.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLead.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingDataLead.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}/edit'
*/
const EditBookingDataLeadForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see app/Filament/App/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/app/team/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLead.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingDataLead.form = EditBookingDataLeadForm

export default EditBookingDataLead