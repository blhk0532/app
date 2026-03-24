import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\EditClient::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/EditClient.php:7
* @route '/nds/booking/services/clients/{record}/edit'
*/
const EditClient = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClient.url(args, options),
    method: 'get',
})

EditClient.definition = {
    methods: ["get","head"],
    url: '/nds/booking/services/clients/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\EditClient::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/EditClient.php:7
* @route '/nds/booking/services/clients/{record}/edit'
*/
EditClient.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClient.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\EditClient::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/EditClient.php:7
* @route '/nds/booking/services/clients/{record}/edit'
*/
EditClient.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClient.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\EditClient::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/EditClient.php:7
* @route '/nds/booking/services/clients/{record}/edit'
*/
EditClient.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClient.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\EditClient::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/EditClient.php:7
* @route '/nds/booking/services/clients/{record}/edit'
*/
const EditClientForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClient.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\EditClient::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/EditClient.php:7
* @route '/nds/booking/services/clients/{record}/edit'
*/
EditClientForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClient.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Clients\Pages\EditClient::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Clients/Pages/EditClient.php:7
* @route '/nds/booking/services/clients/{record}/edit'
*/
EditClientForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClient.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditClient.form = EditClientForm

export default EditClient