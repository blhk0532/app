import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::index
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:15
* @route '/api/postnummer-foretag-queue'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/postnummer-foretag-queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::index
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:15
* @route '/api/postnummer-foretag-queue'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::index
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:15
* @route '/api/postnummer-foretag-queue'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::index
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:15
* @route '/api/postnummer-foretag-queue'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::index
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:15
* @route '/api/postnummer-foretag-queue'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::index
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:15
* @route '/api/postnummer-foretag-queue'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::index
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:15
* @route '/api/postnummer-foretag-queue'
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
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::show
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:33
* @route '/api/postnummer-foretag-queue/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/postnummer-foretag-queue/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::show
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:33
* @route '/api/postnummer-foretag-queue/{id}'
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
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::show
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:33
* @route '/api/postnummer-foretag-queue/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::show
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:33
* @route '/api/postnummer-foretag-queue/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::show
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:33
* @route '/api/postnummer-foretag-queue/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::show
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:33
* @route '/api/postnummer-foretag-queue/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::show
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:33
* @route '/api/postnummer-foretag-queue/{id}'
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
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::runForetag
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:40
* @route '/api/postnummer-foretag-queue/run-foretag'
*/
export const runForetag = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runForetag.url(options),
    method: 'get',
})

runForetag.definition = {
    methods: ["get","head"],
    url: '/api/postnummer-foretag-queue/run-foretag',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::runForetag
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:40
* @route '/api/postnummer-foretag-queue/run-foretag'
*/
runForetag.url = (options?: RouteQueryOptions) => {
    return runForetag.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::runForetag
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:40
* @route '/api/postnummer-foretag-queue/run-foretag'
*/
runForetag.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runForetag.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::runForetag
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:40
* @route '/api/postnummer-foretag-queue/run-foretag'
*/
runForetag.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: runForetag.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::runForetag
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:40
* @route '/api/postnummer-foretag-queue/run-foretag'
*/
const runForetagForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runForetag.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::runForetag
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:40
* @route '/api/postnummer-foretag-queue/run-foretag'
*/
runForetagForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runForetag.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::runForetag
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:40
* @route '/api/postnummer-foretag-queue/run-foretag'
*/
runForetagForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runForetag.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

runForetag.form = runForetagForm

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:69
* @route '/api/postnummer-foretag-queue/bulk-update'
*/
export const bulkUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.definition = {
    methods: ["post"],
    url: '/api/postnummer-foretag-queue/bulk-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:69
* @route '/api/postnummer-foretag-queue/bulk-update'
*/
bulkUpdate.url = (options?: RouteQueryOptions) => {
    return bulkUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:69
* @route '/api/postnummer-foretag-queue/bulk-update'
*/
bulkUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:69
* @route '/api/postnummer-foretag-queue/bulk-update'
*/
const bulkUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:69
* @route '/api/postnummer-foretag-queue/bulk-update'
*/
bulkUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.form = bulkUpdateForm

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:132
* @route '/api/postnummer-foretag-queue/update/{postNummer}'
*/
export const updateByPostNummer = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

updateByPostNummer.definition = {
    methods: ["put"],
    url: '/api/postnummer-foretag-queue/update/{postNummer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:132
* @route '/api/postnummer-foretag-queue/update/{postNummer}'
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
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:132
* @route '/api/postnummer-foretag-queue/update/{postNummer}'
*/
updateByPostNummer.put = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:132
* @route '/api/postnummer-foretag-queue/update/{postNummer}'
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
* @see \App\Http\Controllers\Api\PostNummerForetagQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerForetagQueueController.php:132
* @route '/api/postnummer-foretag-queue/update/{postNummer}'
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

const PostNummerForetagQueueController = { index, show, runForetag, bulkUpdate, updateByPostNummer }

export default PostNummerForetagQueueController