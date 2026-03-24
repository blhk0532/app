import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ViewRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ViewRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}'
*/
const ViewRatsitPostort = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRatsitPostort.url(args, options),
    method: 'get',
})

ViewRatsitPostort.definition = {
    methods: ["get","head"],
    url: '/nds/queue/ratsit-postorts/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ViewRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ViewRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}'
*/
ViewRatsitPostort.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewRatsitPostort.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ViewRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ViewRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}'
*/
ViewRatsitPostort.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRatsitPostort.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ViewRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ViewRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}'
*/
ViewRatsitPostort.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRatsitPostort.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ViewRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ViewRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}'
*/
const ViewRatsitPostortForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitPostort.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ViewRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ViewRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}'
*/
ViewRatsitPostortForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitPostort.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\RatsitPostorts\Pages\ViewRatsitPostort::__invoke
* @see app/Filament/Queue/Resources/RatsitPostorts/Pages/ViewRatsitPostort.php:7
* @route '/nds/queue/ratsit-postorts/{record}'
*/
ViewRatsitPostortForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitPostort.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRatsitPostort.form = ViewRatsitPostortForm

export default ViewRatsitPostort