import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\EditRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/EditRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}/edit'
*/
const EditRatsitPostort = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRatsitPostort.url(args, options),
    method: 'get',
})

EditRatsitPostort.definition = {
    methods: ["get","head"],
    url: '/nds/queue/ratsit-postorts/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\EditRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/EditRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}/edit'
*/
EditRatsitPostort.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRatsitPostort.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\EditRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/EditRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}/edit'
*/
EditRatsitPostort.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRatsitPostort.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\EditRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/EditRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}/edit'
*/
EditRatsitPostort.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRatsitPostort.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\EditRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/EditRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}/edit'
*/
const EditRatsitPostortForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitPostort.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\EditRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/EditRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}/edit'
*/
EditRatsitPostortForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitPostort.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\EditRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/EditRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}/edit'
*/
EditRatsitPostortForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitPostort.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRatsitPostort.form = EditRatsitPostortForm

export default EditRatsitPostort