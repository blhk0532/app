import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
const ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.url(args, options),
    method: 'get',
})

ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.definition = {
    methods: ["get","head"],
    url: '/nds/queue/failed-jobs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.url(args, options),
    method: 'head',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
const ViewFailedJob2b43ba26f2a844da2184375ee0ecd93bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
ViewFailedJob2b43ba26f2a844da2184375ee0ecd93bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/queue/failed-jobs/{record}'
*/
ViewFailedJob2b43ba26f2a844da2184375ee0ecd93bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b.form = ViewFailedJob2b43ba26f2a844da2184375ee0ecd93bForm
/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/super/failed-jobs/{record}'
*/
const ViewFailedJob2023f086b35beca02ce17926515fbe39 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewFailedJob2023f086b35beca02ce17926515fbe39.url(args, options),
    method: 'get',
})

ViewFailedJob2023f086b35beca02ce17926515fbe39.definition = {
    methods: ["get","head"],
    url: '/nds/super/failed-jobs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/super/failed-jobs/{record}'
*/
ViewFailedJob2023f086b35beca02ce17926515fbe39.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewFailedJob2023f086b35beca02ce17926515fbe39.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/super/failed-jobs/{record}'
*/
ViewFailedJob2023f086b35beca02ce17926515fbe39.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewFailedJob2023f086b35beca02ce17926515fbe39.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/super/failed-jobs/{record}'
*/
ViewFailedJob2023f086b35beca02ce17926515fbe39.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewFailedJob2023f086b35beca02ce17926515fbe39.url(args, options),
    method: 'head',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/super/failed-jobs/{record}'
*/
const ViewFailedJob2023f086b35beca02ce17926515fbe39Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob2023f086b35beca02ce17926515fbe39.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/super/failed-jobs/{record}'
*/
ViewFailedJob2023f086b35beca02ce17926515fbe39Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob2023f086b35beca02ce17926515fbe39.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/super/failed-jobs/{record}'
*/
ViewFailedJob2023f086b35beca02ce17926515fbe39Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob2023f086b35beca02ce17926515fbe39.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewFailedJob2023f086b35beca02ce17926515fbe39.form = ViewFailedJob2023f086b35beca02ce17926515fbe39Form
/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/tools/failed-jobs/{record}'
*/
const ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.url(args, options),
    method: 'get',
})

ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.definition = {
    methods: ["get","head"],
    url: '/nds/tools/failed-jobs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/tools/failed-jobs/{record}'
*/
ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/tools/failed-jobs/{record}'
*/
ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/tools/failed-jobs/{record}'
*/
ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.url(args, options),
    method: 'head',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/tools/failed-jobs/{record}'
*/
const ViewFailedJob0fbff69a4d27a039e2af06fdb6a208faForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/tools/failed-jobs/{record}'
*/
ViewFailedJob0fbff69a4d27a039e2af06fdb6a208faForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.url(args, options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ViewFailedJob::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ViewFailedJob.php:7
* @route '/nds/tools/failed-jobs/{record}'
*/
ViewFailedJob0fbff69a4d27a039e2af06fdb6a208faForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa.form = ViewFailedJob0fbff69a4d27a039e2af06fdb6a208faForm

const ViewFailedJob = {
    '/nds/queue/failed-jobs/{record}': ViewFailedJob2b43ba26f2a844da2184375ee0ecd93b,
    '/nds/super/failed-jobs/{record}': ViewFailedJob2023f086b35beca02ce17926515fbe39,
    '/nds/tools/failed-jobs/{record}': ViewFailedJob0fbff69a4d27a039e2af06fdb6a208fa,
}

export default ViewFailedJob