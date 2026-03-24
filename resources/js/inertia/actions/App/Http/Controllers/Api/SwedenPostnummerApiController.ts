import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getQueue
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:22
* @route '/api/sweden-postnummer/get-queue'
*/
export const getQueue = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getQueue.url(options),
    method: 'get',
})

getQueue.definition = {
    methods: ["get","head"],
    url: '/api/sweden-postnummer/get-queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getQueue
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:22
* @route '/api/sweden-postnummer/get-queue'
*/
getQueue.url = (options?: RouteQueryOptions) => {
    return getQueue.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getQueue
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:22
* @route '/api/sweden-postnummer/get-queue'
*/
getQueue.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getQueue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getQueue
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:22
* @route '/api/sweden-postnummer/get-queue'
*/
getQueue.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getQueue.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getQueue
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:22
* @route '/api/sweden-postnummer/get-queue'
*/
const getQueueForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getQueue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getQueue
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:22
* @route '/api/sweden-postnummer/get-queue'
*/
getQueueForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getQueue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getQueue
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:22
* @route '/api/sweden-postnummer/get-queue'
*/
getQueueForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getQueue.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getQueue.form = getQueueForm

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
export const getByCode = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByCode.url(args, options),
    method: 'get',
})

getByCode.definition = {
    methods: ["get","put","post","head"],
    url: '/api/sweden-postnummer/by-code/{postnummer}',
} satisfies RouteDefinition<["get","put","post","head"]>

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCode.url = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer: args.postnummer,
    }

    return getByCode.definition.url
            .replace('{postnummer}', parsedArgs.postnummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCode.get = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCode.put = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: getByCode.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCode.post = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getByCode.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCode.head = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getByCode.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
const getByCodeForm = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCodeForm.get = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCodeForm.put = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getByCode.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCodeForm.post = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getByCode.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::getByCode
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:69
* @route '/api/sweden-postnummer/by-code/{postnummer}'
*/
getByCodeForm.head = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByCode.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getByCode.form = getByCodeForm

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::update
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:136
* @route '/api/sweden-postnummer/update/{postnummer}'
*/
export const update = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/sweden-postnummer/update/{postnummer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::update
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:136
* @route '/api/sweden-postnummer/update/{postnummer}'
*/
update.url = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer: args.postnummer,
    }

    return update.definition.url
            .replace('{postnummer}', parsedArgs.postnummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::update
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:136
* @route '/api/sweden-postnummer/update/{postnummer}'
*/
update.put = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::update
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:136
* @route '/api/sweden-postnummer/update/{postnummer}'
*/
const updateForm = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::update
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:136
* @route '/api/sweden-postnummer/update/{postnummer}'
*/
updateForm.put = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::batchUpdate
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:193
* @route '/api/sweden-postnummer/batch-update'
*/
export const batchUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchUpdate.url(options),
    method: 'post',
})

batchUpdate.definition = {
    methods: ["post"],
    url: '/api/sweden-postnummer/batch-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::batchUpdate
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:193
* @route '/api/sweden-postnummer/batch-update'
*/
batchUpdate.url = (options?: RouteQueryOptions) => {
    return batchUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::batchUpdate
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:193
* @route '/api/sweden-postnummer/batch-update'
*/
batchUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::batchUpdate
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:193
* @route '/api/sweden-postnummer/batch-update'
*/
const batchUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: batchUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::batchUpdate
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:193
* @route '/api/sweden-postnummer/batch-update'
*/
batchUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: batchUpdate.url(options),
    method: 'post',
})

batchUpdate.form = batchUpdateForm

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::checkCounts
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:248
* @route '/api/sweden-postnummer/check-counts/{postnummer}'
*/
export const checkCounts = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkCounts.url(args, options),
    method: 'get',
})

checkCounts.definition = {
    methods: ["get","head"],
    url: '/api/sweden-postnummer/check-counts/{postnummer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::checkCounts
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:248
* @route '/api/sweden-postnummer/check-counts/{postnummer}'
*/
checkCounts.url = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer: args.postnummer,
    }

    return checkCounts.definition.url
            .replace('{postnummer}', parsedArgs.postnummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::checkCounts
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:248
* @route '/api/sweden-postnummer/check-counts/{postnummer}'
*/
checkCounts.get = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkCounts.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::checkCounts
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:248
* @route '/api/sweden-postnummer/check-counts/{postnummer}'
*/
checkCounts.head = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checkCounts.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::checkCounts
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:248
* @route '/api/sweden-postnummer/check-counts/{postnummer}'
*/
const checkCountsForm = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkCounts.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::checkCounts
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:248
* @route '/api/sweden-postnummer/check-counts/{postnummer}'
*/
checkCountsForm.get = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkCounts.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SwedenPostnummerApiController::checkCounts
* @see app/Http/Controllers/Api/SwedenPostnummerApiController.php:248
* @route '/api/sweden-postnummer/check-counts/{postnummer}'
*/
checkCountsForm.head = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkCounts.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

checkCounts.form = checkCountsForm

const SwedenPostnummerApiController = { getQueue, getByCode, update, batchUpdate, checkCounts }

export default SwedenPostnummerApiController