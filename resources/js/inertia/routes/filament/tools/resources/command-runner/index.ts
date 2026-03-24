import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/tools/command-runner/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\RunCommand::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/RunCommand.php:7
* @route '/nds/tools/command-runner/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/tools/command-runner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ListCommandRuns::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ListCommandRuns.php:7
* @route '/nds/tools/command-runner'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/tools/command-runner/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const commandRunner = {
    create: Object.assign(create, create),
    index: Object.assign(index, index),
    view: Object.assign(view, view),
}

export default commandRunner