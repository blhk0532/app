import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/super/command-runner/{record}'
*/
const ViewCommandRun85d8ff32426c1aef073adbb7e205ef32 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.url(args, options),
    method: 'get',
})

ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.definition = {
    methods: ["get","head"],
    url: '/nds/super/command-runner/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/super/command-runner/{record}'
*/
ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/super/command-runner/{record}'
*/
ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/super/command-runner/{record}'
*/
ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.url(args, options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/super/command-runner/{record}'
*/
const ViewCommandRun85d8ff32426c1aef073adbb7e205ef32Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/super/command-runner/{record}'
*/
ViewCommandRun85d8ff32426c1aef073adbb7e205ef32Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/super/command-runner/{record}'
*/
ViewCommandRun85d8ff32426c1aef073adbb7e205ef32Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewCommandRun85d8ff32426c1aef073adbb7e205ef32.form = ViewCommandRun85d8ff32426c1aef073adbb7e205ef32Form
/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
const ViewCommandRunc4a784c5e323b45fd9544ea70d656b93 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.url(args, options),
    method: 'get',
})

ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.definition = {
    methods: ["get","head"],
    url: '/nds/tools/command-runner/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.url(args, options),
    method: 'head',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
const ViewCommandRunc4a784c5e323b45fd9544ea70d656b93Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
ViewCommandRunc4a784c5e323b45fd9544ea70d656b93Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\CommandRunner\Resources\CommandRuns\Pages\ViewCommandRun::__invoke
* @see plugins/binarybuilds/filament-command-runner/src/Resources/CommandRuns/Pages/ViewCommandRun.php:7
* @route '/nds/tools/command-runner/{record}'
*/
ViewCommandRunc4a784c5e323b45fd9544ea70d656b93Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewCommandRunc4a784c5e323b45fd9544ea70d656b93.form = ViewCommandRunc4a784c5e323b45fd9544ea70d656b93Form

const ViewCommandRun = {
    '/nds/super/command-runner/{record}': ViewCommandRun85d8ff32426c1aef073adbb7e205ef32,
    '/nds/tools/command-runner/{record}': ViewCommandRunc4a784c5e323b45fd9544ea70d656b93,
}

export default ViewCommandRun