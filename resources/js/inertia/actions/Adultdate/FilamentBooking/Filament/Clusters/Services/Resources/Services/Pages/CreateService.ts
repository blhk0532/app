import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\CreateService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/CreateService.php:7
* @route '/nds/super/booking/services/services/create'
*/
const CreateService = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateService.url(options),
    method: 'get',
})

CreateService.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/services/services/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\CreateService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/CreateService.php:7
* @route '/nds/super/booking/services/services/create'
*/
CreateService.url = (options?: RouteQueryOptions) => {
    return CreateService.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\CreateService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/CreateService.php:7
* @route '/nds/super/booking/services/services/create'
*/
CreateService.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateService.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\CreateService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/CreateService.php:7
* @route '/nds/super/booking/services/services/create'
*/
CreateService.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateService.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\CreateService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/CreateService.php:7
* @route '/nds/super/booking/services/services/create'
*/
const CreateServiceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateService.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\CreateService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/CreateService.php:7
* @route '/nds/super/booking/services/services/create'
*/
CreateServiceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateService.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\CreateService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/CreateService.php:7
* @route '/nds/super/booking/services/services/create'
*/
CreateServiceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateService.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateService.form = CreateServiceForm

export default CreateService