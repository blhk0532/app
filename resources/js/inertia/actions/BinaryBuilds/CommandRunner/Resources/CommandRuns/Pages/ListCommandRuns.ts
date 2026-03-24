import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/super/command-runner'
*/
const ListCommandRuns4aa850e94b73551c8fdabd0850e5e504 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.url(options),
    method: 'get',
})

ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.definition = {
    methods: ["get","head"],
    url: '/nds/super/command-runner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/super/command-runner'
*/
ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.url = (options?: RouteQueryOptions) => {
    return ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/super/command-runner'
*/
ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/super/command-runner'
*/
ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/super/command-runner'
*/
const ListCommandRuns4aa850e94b73551c8fdabd0850e5e504Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/super/command-runner'
*/
ListCommandRuns4aa850e94b73551c8fdabd0850e5e504Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/super/command-runner'
*/
ListCommandRuns4aa850e94b73551c8fdabd0850e5e504Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCommandRuns4aa850e94b73551c8fdabd0850e5e504.form = ListCommandRuns4aa850e94b73551c8fdabd0850e5e504Form
/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
const ListCommandRuns0707ddb90115a6f668550c99876fe272 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCommandRuns0707ddb90115a6f668550c99876fe272.url(options),
    method: 'get',
})

ListCommandRuns0707ddb90115a6f668550c99876fe272.definition = {
    methods: ["get","head"],
    url: '/nds/tools/command-runner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
ListCommandRuns0707ddb90115a6f668550c99876fe272.url = (options?: RouteQueryOptions) => {
    return ListCommandRuns0707ddb90115a6f668550c99876fe272.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
ListCommandRuns0707ddb90115a6f668550c99876fe272.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCommandRuns0707ddb90115a6f668550c99876fe272.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
ListCommandRuns0707ddb90115a6f668550c99876fe272.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCommandRuns0707ddb90115a6f668550c99876fe272.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
const ListCommandRuns0707ddb90115a6f668550c99876fe272Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCommandRuns0707ddb90115a6f668550c99876fe272.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
ListCommandRuns0707ddb90115a6f668550c99876fe272Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCommandRuns0707ddb90115a6f668550c99876fe272.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
ListCommandRuns0707ddb90115a6f668550c99876fe272Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCommandRuns0707ddb90115a6f668550c99876fe272.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCommandRuns0707ddb90115a6f668550c99876fe272.form = ListCommandRuns0707ddb90115a6f668550c99876fe272Form

const ListCommandRuns = {
    '/nds/super/command-runner': ListCommandRuns4aa850e94b73551c8fdabd0850e5e504,
    '/nds/tools/command-runner': ListCommandRuns0707ddb90115a6f668550c99876fe272,
}

export default ListCommandRuns