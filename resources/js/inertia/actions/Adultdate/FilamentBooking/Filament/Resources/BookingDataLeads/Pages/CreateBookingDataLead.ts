import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
const CreateBookingDataLead = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLead.url(options),
    method: 'get',
})

CreateBookingDataLead.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-data-leads/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLead.url = (options?: RouteQueryOptions) => {
    return CreateBookingDataLead.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLead.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLead.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLead.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingDataLead.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
const CreateBookingDataLeadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLeadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLeadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingDataLead.form = CreateBookingDataLeadForm

export default CreateBookingDataLead