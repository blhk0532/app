import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/super/command-runner/create'
*/
const RunCommand26750477907c1c8d030d7030b7b4d72d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RunCommand26750477907c1c8d030d7030b7b4d72d.url(options),
    method: 'get',
})

RunCommand26750477907c1c8d030d7030b7b4d72d.definition = {
    methods: ["get","head"],
    url: '/nds/super/command-runner/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/super/command-runner/create'
*/
RunCommand26750477907c1c8d030d7030b7b4d72d.url = (options?: RouteQueryOptions) => {
    return RunCommand26750477907c1c8d030d7030b7b4d72d.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/super/command-runner/create'
*/
RunCommand26750477907c1c8d030d7030b7b4d72d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RunCommand26750477907c1c8d030d7030b7b4d72d.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/super/command-runner/create'
*/
RunCommand26750477907c1c8d030d7030b7b4d72d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RunCommand26750477907c1c8d030d7030b7b4d72d.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/super/command-runner/create'
*/
const RunCommand26750477907c1c8d030d7030b7b4d72dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RunCommand26750477907c1c8d030d7030b7b4d72d.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/super/command-runner/create'
*/
RunCommand26750477907c1c8d030d7030b7b4d72dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RunCommand26750477907c1c8d030d7030b7b4d72d.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/super/command-runner/create'
*/
RunCommand26750477907c1c8d030d7030b7b4d72dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RunCommand26750477907c1c8d030d7030b7b4d72d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RunCommand26750477907c1c8d030d7030b7b4d72d.form = RunCommand26750477907c1c8d030d7030b7b4d72dForm
/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
const RunCommand8f760005d3b74a19af14e72dfb7573d9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RunCommand8f760005d3b74a19af14e72dfb7573d9.url(options),
    method: 'get',
})

RunCommand8f760005d3b74a19af14e72dfb7573d9.definition = {
    methods: ["get","head"],
    url: '/nds/tools/command-runner/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
RunCommand8f760005d3b74a19af14e72dfb7573d9.url = (options?: RouteQueryOptions) => {
    return RunCommand8f760005d3b74a19af14e72dfb7573d9.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
RunCommand8f760005d3b74a19af14e72dfb7573d9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RunCommand8f760005d3b74a19af14e72dfb7573d9.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
RunCommand8f760005d3b74a19af14e72dfb7573d9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RunCommand8f760005d3b74a19af14e72dfb7573d9.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
const RunCommand8f760005d3b74a19af14e72dfb7573d9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RunCommand8f760005d3b74a19af14e72dfb7573d9.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
RunCommand8f760005d3b74a19af14e72dfb7573d9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RunCommand8f760005d3b74a19af14e72dfb7573d9.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
RunCommand8f760005d3b74a19af14e72dfb7573d9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RunCommand8f760005d3b74a19af14e72dfb7573d9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RunCommand8f760005d3b74a19af14e72dfb7573d9.form = RunCommand8f760005d3b74a19af14e72dfb7573d9Form

const RunCommand = {
    '/nds/super/command-runner/create': RunCommand26750477907c1c8d030d7030b7b4d72d,
    '/nds/tools/command-runner/create': RunCommand8f760005d3b74a19af14e72dfb7573d9,
}

export default RunCommand