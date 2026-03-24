import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/queue/failed-jobs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/queue/failed-jobs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/queue/failed-jobs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/queue/failed-jobs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/queue/failed-jobs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/queue/failed-jobs'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/queue/failed-jobs'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/queue/failed-jobs'
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
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/queue/failed-jobs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
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
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
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

const failedJobs = {
    index: Object.assign(index, index),
    view: Object.assign(view, view),
}

export default failedJobs