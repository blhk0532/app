import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\ListServices::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/ListServices.php:7
* @route '/nds/super/booking/services/services'
*/
const ListServices = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListServices.url(options),
    method: 'get',
})

ListServices.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/services/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\ListServices::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/ListServices.php:7
* @route '/nds/super/booking/services/services'
*/
ListServices.url = (options?: RouteQueryOptions) => {
    return ListServices.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\ListServices::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/ListServices.php:7
* @route '/nds/super/booking/services/services'
*/
ListServices.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListServices.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\ListServices::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/ListServices.php:7
* @route '/nds/super/booking/services/services'
*/
ListServices.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListServices.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\ListServices::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/ListServices.php:7
* @route '/nds/super/booking/services/services'
*/
const ListServicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServices.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\ListServices::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/ListServices.php:7
* @route '/nds/super/booking/services/services'
*/
ListServicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServices.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\ListServices::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/ListServices.php:7
* @route '/nds/super/booking/services/services'
*/
ListServicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServices.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListServices.form = ListServicesForm

export default ListServices