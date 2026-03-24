import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Pages\Terminal::__invoke
* @see app/Filament/Queue/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
const Terminal = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Terminal.url(options),
    method: 'get',
})

Terminal.definition = {
    methods: ["get","head"],
    url: '/nds/queue/terminal',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Pages\Terminal::__invoke
* @see app/Filament/Queue/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
Terminal.url = (options?: RouteQueryOptions) => {
    return Terminal.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Pages\Terminal::__invoke
* @see app/Filament/Queue/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
Terminal.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Terminal.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\Terminal::__invoke
* @see app/Filament/Queue/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
Terminal.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Terminal.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Pages\Terminal::__invoke
* @see app/Filament/Queue/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
const TerminalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminal.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\Terminal::__invoke
* @see app/Filament/Queue/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
TerminalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminal.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\Terminal::__invoke
* @see app/Filament/Queue/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
TerminalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminal.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Terminal.form = TerminalForm

export default Terminal