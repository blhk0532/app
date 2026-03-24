import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
const CreateCustomer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCustomer.url(options),
    method: 'get',
})

CreateCustomer.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/customers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomer.url = (options?: RouteQueryOptions) => {
    return CreateCustomer.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCustomer.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCustomer.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
const CreateCustomerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCustomer.form = CreateCustomerForm

export default CreateCustomer