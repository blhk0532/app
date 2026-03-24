import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\EditSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/EditSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}/edit'
*/
const EditSwedenKommuner = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSwedenKommuner.url(args, options),
    method: 'get',
})

EditSwedenKommuner.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-kommuners/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\EditSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/EditSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}/edit'
*/
EditSwedenKommuner.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSwedenKommuner.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\EditSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/EditSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}/edit'
*/
EditSwedenKommuner.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSwedenKommuner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\EditSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/EditSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}/edit'
*/
EditSwedenKommuner.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSwedenKommuner.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\EditSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/EditSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}/edit'
*/
const EditSwedenKommunerForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenKommuner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\EditSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/EditSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}/edit'
*/
EditSwedenKommunerForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenKommuner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\EditSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/EditSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}/edit'
*/
EditSwedenKommunerForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenKommuner.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSwedenKommuner.form = EditSwedenKommunerForm

export default EditSwedenKommuner