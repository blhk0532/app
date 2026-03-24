import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/queue/terminal-logs'
*/
const ListTerminalLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs.url(options),
    method: 'get',
})

ListTerminalLogs.definition = {
    methods: ["get","head"],
    url: '/nds/queue/terminal-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/queue/terminal-logs'
*/
ListTerminalLogs.url = (options?: RouteQueryOptions) => {
    return ListTerminalLogs.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/queue/terminal-logs'
*/
ListTerminalLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/queue/terminal-logs'
*/
ListTerminalLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTerminalLogs.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/queue/terminal-logs'
*/
const ListTerminalLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/queue/terminal-logs'
*/
ListTerminalLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Queue/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/queue/terminal-logs'
*/
ListTerminalLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTerminalLogs.form = ListTerminalLogsForm

export default ListTerminalLogs