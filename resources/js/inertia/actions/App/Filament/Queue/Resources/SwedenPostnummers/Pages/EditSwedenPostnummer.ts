import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\EditSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/EditSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}/edit'
*/
const EditSwedenPostnummer = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSwedenPostnummer.url(args, options),
    method: 'get',
})

EditSwedenPostnummer.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postnummers/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\EditSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/EditSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}/edit'
*/
EditSwedenPostnummer.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSwedenPostnummer.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\EditSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/EditSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}/edit'
*/
EditSwedenPostnummer.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSwedenPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\EditSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/EditSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}/edit'
*/
EditSwedenPostnummer.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSwedenPostnummer.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\EditSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/EditSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}/edit'
*/
const EditSwedenPostnummerForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\EditSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/EditSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}/edit'
*/
EditSwedenPostnummerForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\EditSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/EditSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}/edit'
*/
EditSwedenPostnummerForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenPostnummer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSwedenPostnummer.form = EditSwedenPostnummerForm

export default EditSwedenPostnummer