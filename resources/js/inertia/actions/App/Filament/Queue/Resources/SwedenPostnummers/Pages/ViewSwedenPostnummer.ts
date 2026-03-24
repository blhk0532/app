import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ViewSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ViewSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}'
*/
const ViewSwedenPostnummer = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSwedenPostnummer.url(args, options),
    method: 'get',
})

ViewSwedenPostnummer.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postnummers/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ViewSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ViewSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}'
*/
ViewSwedenPostnummer.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSwedenPostnummer.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ViewSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ViewSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}'
*/
ViewSwedenPostnummer.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSwedenPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ViewSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ViewSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}'
*/
ViewSwedenPostnummer.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSwedenPostnummer.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ViewSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ViewSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}'
*/
const ViewSwedenPostnummerForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ViewSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ViewSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}'
*/
ViewSwedenPostnummerForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostnummers\Pages\ViewSwedenPostnummer::__invoke
* @see app/Filament/Queue/Resources/SwedenPostnummers/Pages/ViewSwedenPostnummer.php:7
* @route '/nds/queue/sweden-postnummers/{record}'
*/
ViewSwedenPostnummerForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenPostnummer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSwedenPostnummer.form = ViewSwedenPostnummerForm

export default ViewSwedenPostnummer