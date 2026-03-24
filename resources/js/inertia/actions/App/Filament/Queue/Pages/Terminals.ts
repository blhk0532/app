import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Pages\Terminals::__invoke
* @see app/Filament/Queue/Pages/Terminals.php:7
* @route '/nds/queue/terminals'
*/
const Terminals = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Terminals.url(options),
    method: 'get',
})

Terminals.definition = {
    methods: ["get","head"],
    url: '/nds/queue/terminals',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Pages\Terminals::__invoke
* @see app/Filament/Queue/Pages/Terminals.php:7
* @route '/nds/queue/terminals'
*/
Terminals.url = (options?: RouteQueryOptions) => {
    return Terminals.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Pages\Terminals::__invoke
* @see app/Filament/Queue/Pages/Terminals.php:7
* @route '/nds/queue/terminals'
*/
Terminals.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Terminals.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\Terminals::__invoke
* @see app/Filament/Queue/Pages/Terminals.php:7
* @route '/nds/queue/terminals'
*/
Terminals.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Terminals.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Pages\Terminals::__invoke
* @see app/Filament/Queue/Pages/Terminals.php:7
* @route '/nds/queue/terminals'
*/
const TerminalsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminals.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\Terminals::__invoke
* @see app/Filament/Queue/Pages/Terminals.php:7
* @route '/nds/queue/terminals'
*/
TerminalsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminals.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\Terminals::__invoke
* @see app/Filament/Queue/Pages/Terminals.php:7
* @route '/nds/queue/terminals'
*/
TerminalsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminals.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Terminals.form = TerminalsForm

export default Terminals