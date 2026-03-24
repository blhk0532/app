import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::index
* @see app/Http/Controllers/Api/MerinfoQueueController.php:21
* @route '/api/merinfo-queue'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/merinfo-queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::index
* @see app/Http/Controllers/Api/MerinfoQueueController.php:21
* @route '/api/merinfo-queue'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::index
* @see app/Http/Controllers/Api/MerinfoQueueController.php:21
* @route '/api/merinfo-queue'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::index
* @see app/Http/Controllers/Api/MerinfoQueueController.php:21
* @route '/api/merinfo-queue'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::index
* @see app/Http/Controllers/Api/MerinfoQueueController.php:21
* @route '/api/merinfo-queue'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::index
* @see app/Http/Controllers/Api/MerinfoQueueController.php:21
* @route '/api/merinfo-queue'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::index
* @see app/Http/Controllers/Api/MerinfoQueueController.php:21
* @route '/api/merinfo-queue'
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
* @see \App\Http\Controllers\Api\MerinfoQueueController::show
* @see app/Http/Controllers/Api/MerinfoQueueController.php:47
* @route '/api/merinfo-queue/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/merinfo-queue/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::show
* @see app/Http/Controllers/Api/MerinfoQueueController.php:47
* @route '/api/merinfo-queue/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::show
* @see app/Http/Controllers/Api/MerinfoQueueController.php:47
* @route '/api/merinfo-queue/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::show
* @see app/Http/Controllers/Api/MerinfoQueueController.php:47
* @route '/api/merinfo-queue/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::show
* @see app/Http/Controllers/Api/MerinfoQueueController.php:47
* @route '/api/merinfo-queue/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::show
* @see app/Http/Controllers/Api/MerinfoQueueController.php:47
* @route '/api/merinfo-queue/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::show
* @see app/Http/Controllers/Api/MerinfoQueueController.php:47
* @route '/api/merinfo-queue/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::runPersoner
* @see app/Http/Controllers/Api/MerinfoQueueController.php:57
* @route '/api/merinfo-queue/run-personer'
*/
export const runPersoner = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runPersoner.url(options),
    method: 'get',
})

runPersoner.definition = {
    methods: ["get","head"],
    url: '/api/merinfo-queue/run-personer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::runPersoner
* @see app/Http/Controllers/Api/MerinfoQueueController.php:57
* @route '/api/merinfo-queue/run-personer'
*/
runPersoner.url = (options?: RouteQueryOptions) => {
    return runPersoner.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::runPersoner
* @see app/Http/Controllers/Api/MerinfoQueueController.php:57
* @route '/api/merinfo-queue/run-personer'
*/
runPersoner.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runPersoner.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::runPersoner
* @see app/Http/Controllers/Api/MerinfoQueueController.php:57
* @route '/api/merinfo-queue/run-personer'
*/
runPersoner.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: runPersoner.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::runPersoner
* @see app/Http/Controllers/Api/MerinfoQueueController.php:57
* @route '/api/merinfo-queue/run-personer'
*/
const runPersonerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runPersoner.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::runPersoner
* @see app/Http/Controllers/Api/MerinfoQueueController.php:57
* @route '/api/merinfo-queue/run-personer'
*/
runPersonerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runPersoner.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::runPersoner
* @see app/Http/Controllers/Api/MerinfoQueueController.php:57
* @route '/api/merinfo-queue/run-personer'
*/
runPersonerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runPersoner.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

runPersoner.form = runPersonerForm

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::bulkUpdate
* @see app/Http/Controllers/Api/MerinfoQueueController.php:102
* @route '/api/merinfo-queue/bulk-update'
*/
export const bulkUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.definition = {
    methods: ["post"],
    url: '/api/merinfo-queue/bulk-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::bulkUpdate
* @see app/Http/Controllers/Api/MerinfoQueueController.php:102
* @route '/api/merinfo-queue/bulk-update'
*/
bulkUpdate.url = (options?: RouteQueryOptions) => {
    return bulkUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::bulkUpdate
* @see app/Http/Controllers/Api/MerinfoQueueController.php:102
* @route '/api/merinfo-queue/bulk-update'
*/
bulkUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::bulkUpdate
* @see app/Http/Controllers/Api/MerinfoQueueController.php:102
* @route '/api/merinfo-queue/bulk-update'
*/
const bulkUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::bulkUpdate
* @see app/Http/Controllers/Api/MerinfoQueueController.php:102
* @route '/api/merinfo-queue/bulk-update'
*/
bulkUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.form = bulkUpdateForm

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/MerinfoQueueController.php:162
* @route '/api/merinfo-queue/update/{postNummer}'
*/
export const updateByPostNummer = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

updateByPostNummer.definition = {
    methods: ["put"],
    url: '/api/merinfo-queue/update/{postNummer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/MerinfoQueueController.php:162
* @route '/api/merinfo-queue/update/{postNummer}'
*/
updateByPostNummer.url = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postNummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postNummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postNummer: args.postNummer,
    }

    return updateByPostNummer.definition.url
            .replace('{postNummer}', parsedArgs.postNummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/MerinfoQueueController.php:162
* @route '/api/merinfo-queue/update/{postNummer}'
*/
updateByPostNummer.put = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/MerinfoQueueController.php:162
* @route '/api/merinfo-queue/update/{postNummer}'
*/
const updateByPostNummerForm = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateByPostNummer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/MerinfoQueueController.php:162
* @route '/api/merinfo-queue/update/{postNummer}'
*/
updateByPostNummerForm.put = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateByPostNummer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateByPostNummer.form = updateByPostNummerForm

const MerinfoQueueController = { index, show, runPersoner, bulkUpdate, updateByPostNummer }

export default MerinfoQueueController