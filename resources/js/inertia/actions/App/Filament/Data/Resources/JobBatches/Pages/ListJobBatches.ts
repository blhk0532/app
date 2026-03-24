import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ListJobBatches::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ListJobBatches.php:7
* @route '/nds/data/job-batches'
*/
const ListJobBatches = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListJobBatches.url(options),
    method: 'get',
})

ListJobBatches.definition = {
    methods: ["get","head"],
    url: '/nds/data/job-batches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ListJobBatches::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ListJobBatches.php:7
* @route '/nds/data/job-batches'
*/
ListJobBatches.url = (options?: RouteQueryOptions) => {
    return ListJobBatches.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ListJobBatches::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ListJobBatches.php:7
* @route '/nds/data/job-batches'
*/
ListJobBatches.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListJobBatches.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ListJobBatches::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ListJobBatches.php:7
* @route '/nds/data/job-batches'
*/
ListJobBatches.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListJobBatches.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ListJobBatches::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ListJobBatches.php:7
* @route '/nds/data/job-batches'
*/
const ListJobBatchesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListJobBatches.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ListJobBatches::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ListJobBatches.php:7
* @route '/nds/data/job-batches'
*/
ListJobBatchesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListJobBatches.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\JobBatches\Pages\ListJobBatches::__invoke
* @see app/Filament/Data/Resources/JobBatches/Pages/ListJobBatches.php:7
* @route '/nds/data/job-batches'
*/
ListJobBatchesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListJobBatches.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListJobBatches.form = ListJobBatchesForm

export default ListJobBatches