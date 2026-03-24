import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ViewSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ViewSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}'
*/
const ViewSwedenKommuner = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSwedenKommuner.url(args, options),
    method: 'get',
})

ViewSwedenKommuner.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-kommuners/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ViewSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ViewSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}'
*/
ViewSwedenKommuner.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSwedenKommuner.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ViewSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ViewSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}'
*/
ViewSwedenKommuner.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSwedenKommuner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ViewSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ViewSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}'
*/
ViewSwedenKommuner.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSwedenKommuner.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ViewSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ViewSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}'
*/
const ViewSwedenKommunerForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenKommuner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ViewSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ViewSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}'
*/
ViewSwedenKommunerForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenKommuner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenKommuners\Pages\ViewSwedenKommuner::__invoke
* @see app/Filament/Queue/Resources/SwedenKommuners/Pages/ViewSwedenKommuner.php:7
* @route '/nds/queue/sweden-kommuners/{record}'
*/
ViewSwedenKommunerForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSwedenKommuner.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSwedenKommuner.form = ViewSwedenKommunerForm

export default ViewSwedenKommuner