import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/queue/terminal-logs/{record}'
*/
const ViewTerminalLog = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLog.url(args, options),
    method: 'get',
})

ViewTerminalLog.definition = {
    methods: ["get","head"],
    url: '/nds/queue/terminal-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/queue/terminal-logs/{record}'
*/
ViewTerminalLog.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTerminalLog.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/queue/terminal-logs/{record}'
*/
ViewTerminalLog.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLog.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/queue/terminal-logs/{record}'
*/
ViewTerminalLog.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTerminalLog.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/queue/terminal-logs/{record}'
*/
const ViewTerminalLogForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLog.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/queue/terminal-logs/{record}'
*/
ViewTerminalLogForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLog.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/queue/terminal-logs/{record}'
*/
ViewTerminalLogForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLog.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTerminalLog.form = ViewTerminalLogForm

export default ViewTerminalLog