import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PostNummerQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueueController.php:20
* @route '/api/postnummer-queue/bulk-update'
*/
export const bulkUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.definition = {
    methods: ["post"],
    url: '/api/postnummer-queue/bulk-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueueController.php:20
* @route '/api/postnummer-queue/bulk-update'
*/
bulkUpdate.url = (options?: RouteQueryOptions) => {
    return bulkUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueueController.php:20
* @route '/api/postnummer-queue/bulk-update'
*/
bulkUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueueController.php:20
* @route '/api/postnummer-queue/bulk-update'
*/
const bulkUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueueController.php:20
* @route '/api/postnummer-queue/bulk-update'
*/
bulkUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.form = bulkUpdateForm

/**
* @see \App\Http\Controllers\Api\PostNummerQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueueController.php:78
* @route '/api/postnummer-queue/update/{postNummer}'
*/
export const updateByPostNummer = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

updateByPostNummer.definition = {
    methods: ["put"],
    url: '/api/postnummer-queue/update/{postNummer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueueController.php:78
* @route '/api/postnummer-queue/update/{postNummer}'
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
* @see \App\Http\Controllers\Api\PostNummerQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueueController.php:78
* @route '/api/postnummer-queue/update/{postNummer}'
*/
updateByPostNummer.put = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueueController.php:78
* @route '/api/postnummer-queue/update/{postNummer}'
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
* @see \App\Http\Controllers\Api\PostNummerQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueueController.php:78
* @route '/api/postnummer-queue/update/{postNummer}'
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

const PostNummerQueueController = { bulkUpdate, updateByPostNummer }

export default PostNummerQueueController