import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\HittaQueueController::runPersoner
* @see app/Http/Controllers/Api/HittaQueueController.php:21
* @route '/api/hitta-queue/run-personer'
*/
export const runPersoner = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runPersoner.url(options),
    method: 'get',
})

runPersoner.definition = {
    methods: ["get","head"],
    url: '/api/hitta-queue/run-personer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaQueueController::runPersoner
* @see app/Http/Controllers/Api/HittaQueueController.php:21
* @route '/api/hitta-queue/run-personer'
*/
runPersoner.url = (options?: RouteQueryOptions) => {
    return runPersoner.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaQueueController::runPersoner
* @see app/Http/Controllers/Api/HittaQueueController.php:21
* @route '/api/hitta-queue/run-personer'
*/
runPersoner.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runPersoner.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaQueueController::runPersoner
* @see app/Http/Controllers/Api/HittaQueueController.php:21
* @route '/api/hitta-queue/run-personer'
*/
runPersoner.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: runPersoner.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaQueueController::runPersoner
* @see app/Http/Controllers/Api/HittaQueueController.php:21
* @route '/api/hitta-queue/run-personer'
*/
const runPersonerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runPersoner.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaQueueController::runPersoner
* @see app/Http/Controllers/Api/HittaQueueController.php:21
* @route '/api/hitta-queue/run-personer'
*/
runPersonerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runPersoner.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaQueueController::runPersoner
* @see app/Http/Controllers/Api/HittaQueueController.php:21
* @route '/api/hitta-queue/run-personer'
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
* @see \App\Http\Controllers\Api\HittaQueueController::bulkUpdate
* @see app/Http/Controllers/Api/HittaQueueController.php:64
* @route '/api/hitta-queue/bulk-update'
*/
export const bulkUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.definition = {
    methods: ["post"],
    url: '/api/hitta-queue/bulk-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaQueueController::bulkUpdate
* @see app/Http/Controllers/Api/HittaQueueController.php:64
* @route '/api/hitta-queue/bulk-update'
*/
bulkUpdate.url = (options?: RouteQueryOptions) => {
    return bulkUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaQueueController::bulkUpdate
* @see app/Http/Controllers/Api/HittaQueueController.php:64
* @route '/api/hitta-queue/bulk-update'
*/
bulkUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaQueueController::bulkUpdate
* @see app/Http/Controllers/Api/HittaQueueController.php:64
* @route '/api/hitta-queue/bulk-update'
*/
const bulkUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaQueueController::bulkUpdate
* @see app/Http/Controllers/Api/HittaQueueController.php:64
* @route '/api/hitta-queue/bulk-update'
*/
bulkUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.form = bulkUpdateForm

/**
* @see \App\Http\Controllers\Api\HittaQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/HittaQueueController.php:122
* @route '/api/hitta-queue/update/{postNummer}'
*/
export const updateByPostNummer = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

updateByPostNummer.definition = {
    methods: ["put"],
    url: '/api/hitta-queue/update/{postNummer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\HittaQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/HittaQueueController.php:122
* @route '/api/hitta-queue/update/{postNummer}'
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
* @see \App\Http\Controllers\Api\HittaQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/HittaQueueController.php:122
* @route '/api/hitta-queue/update/{postNummer}'
*/
updateByPostNummer.put = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\HittaQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/HittaQueueController.php:122
* @route '/api/hitta-queue/update/{postNummer}'
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
* @see \App\Http\Controllers\Api\HittaQueueController::updateByPostNummer
* @see app/Http/Controllers/Api/HittaQueueController.php:122
* @route '/api/hitta-queue/update/{postNummer}'
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

const HittaQueueController = { runPersoner, bulkUpdate, updateByPostNummer }

export default HittaQueueController