import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\EditJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/EditJobBatch.php:7
* @route '/nds/data/job-batches/{record}/edit'
*/
const EditJobBatch = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditJobBatch.url(args, options),
    method: 'get',
})

EditJobBatch.definition = {
    methods: ["get","head"],
    url: '/nds/data/job-batches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\EditJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/EditJobBatch.php:7
* @route '/nds/data/job-batches/{record}/edit'
*/
EditJobBatch.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditJobBatch.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\EditJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/EditJobBatch.php:7
* @route '/nds/data/job-batches/{record}/edit'
*/
EditJobBatch.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditJobBatch.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\EditJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/EditJobBatch.php:7
* @route '/nds/data/job-batches/{record}/edit'
*/
EditJobBatch.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditJobBatch.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\EditJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/EditJobBatch.php:7
* @route '/nds/data/job-batches/{record}/edit'
*/
const EditJobBatchForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditJobBatch.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\EditJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/EditJobBatch.php:7
* @route '/nds/data/job-batches/{record}/edit'
*/
EditJobBatchForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditJobBatch.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\EditJobBatch::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/EditJobBatch.php:7
* @route '/nds/data/job-batches/{record}/edit'
*/
EditJobBatchForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditJobBatch.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditJobBatch.form = EditJobBatchForm

export default EditJobBatch