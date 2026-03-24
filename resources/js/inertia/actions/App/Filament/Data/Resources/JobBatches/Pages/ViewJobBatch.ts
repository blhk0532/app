import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ViewJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ViewJobBatch.php:7
* @route '/nds/data/job-batches/{record}'
*/
const ViewJobBatch = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewJobBatch.url(args, options),
    method: 'get',
})

ViewJobBatch.definition = {
    methods: ["get","head"],
    url: '/nds/data/job-batches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ViewJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ViewJobBatch.php:7
* @route '/nds/data/job-batches/{record}'
*/
ViewJobBatch.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewJobBatch.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ViewJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ViewJobBatch.php:7
* @route '/nds/data/job-batches/{record}'
*/
ViewJobBatch.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewJobBatch.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ViewJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ViewJobBatch.php:7
* @route '/nds/data/job-batches/{record}'
*/
ViewJobBatch.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewJobBatch.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ViewJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ViewJobBatch.php:7
* @route '/nds/data/job-batches/{record}'
*/
const ViewJobBatchForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewJobBatch.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ViewJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ViewJobBatch.php:7
* @route '/nds/data/job-batches/{record}'
*/
ViewJobBatchForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewJobBatch.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ViewJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ViewJobBatch.php:7
* @route '/nds/data/job-batches/{record}'
*/
ViewJobBatchForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewJobBatch.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewJobBatch.form = ViewJobBatchForm

export default ViewJobBatch