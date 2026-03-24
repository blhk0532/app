import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\EditService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/EditService.php:7
* @route '/nds/super/booking/services/services/{record}/edit'
*/
const EditService = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditService.url(args, options),
    method: 'get',
})

EditService.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/services/services/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\EditService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/EditService.php:7
* @route '/nds/super/booking/services/services/{record}/edit'
*/
EditService.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditService.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\EditService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/EditService.php:7
* @route '/nds/super/booking/services/services/{record}/edit'
*/
EditService.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditService.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\EditService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/EditService.php:7
* @route '/nds/super/booking/services/services/{record}/edit'
*/
EditService.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditService.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\EditService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/EditService.php:7
* @route '/nds/super/booking/services/services/{record}/edit'
*/
const EditServiceForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditService.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\EditService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/EditService.php:7
* @route '/nds/super/booking/services/services/{record}/edit'
*/
EditServiceForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditService.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Services\Pages\EditService::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Services/Pages/EditService.php:7
* @route '/nds/super/booking/services/services/{record}/edit'
*/
EditServiceForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditService.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditService.form = EditServiceForm

export default EditService