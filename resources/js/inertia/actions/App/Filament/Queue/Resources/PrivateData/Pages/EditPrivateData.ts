import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\EditPrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/EditPrivateData.php:7
* @route '/nds/queue/private-data/{record}/edit'
*/
const EditPrivateData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPrivateData.url(args, options),
    method: 'get',
})

EditPrivateData.definition = {
    methods: ["get","head"],
    url: '/nds/queue/private-data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\EditPrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/EditPrivateData.php:7
* @route '/nds/queue/private-data/{record}/edit'
*/
EditPrivateData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditPrivateData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\EditPrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/EditPrivateData.php:7
* @route '/nds/queue/private-data/{record}/edit'
*/
EditPrivateData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPrivateData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\EditPrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/EditPrivateData.php:7
* @route '/nds/queue/private-data/{record}/edit'
*/
EditPrivateData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPrivateData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\EditPrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/EditPrivateData.php:7
* @route '/nds/queue/private-data/{record}/edit'
*/
const EditPrivateDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPrivateData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\EditPrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/EditPrivateData.php:7
* @route '/nds/queue/private-data/{record}/edit'
*/
EditPrivateDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPrivateData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PrivateData\Pages\EditPrivateData::__invoke
* @see app/Filament/Queue/Resources/PrivateData/Pages/EditPrivateData.php:7
* @route '/nds/queue/private-data/{record}/edit'
*/
EditPrivateDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPrivateData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditPrivateData.form = EditPrivateDataForm

export default EditPrivateData