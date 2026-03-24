import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\JobBatches\Pages\CreateJobBatch::__invoke
* @see app/Filament/Queue/Resources/JobBatches/Pages/CreateJobBatch.php:7
* @route '/nds/queue/job-batches/create'
*/
const CreateJobBatch = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateJobBatch.url(options),
    method: 'get',
})

CreateJobBatch.definition = {
    methods: ["get","head"],
    url: '/nds/queue/job-batches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\JobBatches\Pages\CreateJobBatch::__invoke
* @see app/Filament/Queue/Resources/JobBatches/Pages/CreateJobBatch.php:7
* @route '/nds/queue/job-batches/create'
*/
CreateJobBatch.url = (options?: RouteQueryOptions) => {
    return CreateJobBatch.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\JobBatches\Pages\CreateJobBatch::__invoke
* @see app/Filament/Queue/Resources/JobBatches/Pages/CreateJobBatch.php:7
* @route '/nds/queue/job-batches/create'
*/
CreateJobBatch.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateJobBatch.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\JobBatches\Pages\CreateJobBatch::__invoke
* @see app/Filament/Queue/Resources/JobBatches/Pages/CreateJobBatch.php:7
* @route '/nds/queue/job-batches/create'
*/
CreateJobBatch.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateJobBatch.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\JobBatches\Pages\CreateJobBatch::__invoke
* @see app/Filament/Queue/Resources/JobBatches/Pages/CreateJobBatch.php:7
* @route '/nds/queue/job-batches/create'
*/
const CreateJobBatchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateJobBatch.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\JobBatches\Pages\CreateJobBatch::__invoke
* @see app/Filament/Queue/Resources/JobBatches/Pages/CreateJobBatch.php:7
* @route '/nds/queue/job-batches/create'
*/
CreateJobBatchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateJobBatch.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\JobBatches\Pages\CreateJobBatch::__invoke
* @see app/Filament/Queue/Resources/JobBatches/Pages/CreateJobBatch.php:7
* @route '/nds/queue/job-batches/create'
*/
CreateJobBatchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateJobBatch.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateJobBatch.form = CreateJobBatchForm

export default CreateJobBatch