import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PostNummerQueController::getFirstPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:20
* @route '/api/postnummer-que/first'
*/
export const getFirstPostNummer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getFirstPostNummer.url(options),
    method: 'get',
})

getFirstPostNummer.definition = {
    methods: ["get","head"],
    url: '/api/postnummer-que/first',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::getFirstPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:20
* @route '/api/postnummer-que/first'
*/
getFirstPostNummer.url = (options?: RouteQueryOptions) => {
    return getFirstPostNummer.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::getFirstPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:20
* @route '/api/postnummer-que/first'
*/
getFirstPostNummer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getFirstPostNummer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::getFirstPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:20
* @route '/api/postnummer-que/first'
*/
getFirstPostNummer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getFirstPostNummer.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::getFirstPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:20
* @route '/api/postnummer-que/first'
*/
const getFirstPostNummerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getFirstPostNummer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::getFirstPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:20
* @route '/api/postnummer-que/first'
*/
getFirstPostNummerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getFirstPostNummer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::getFirstPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:20
* @route '/api/postnummer-que/first'
*/
getFirstPostNummerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getFirstPostNummer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getFirstPostNummer.form = getFirstPostNummerForm

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::firstNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:366
* @route '/api/postnummer-que/first-next'
*/
export const firstNext = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: firstNext.url(options),
    method: 'post',
})

firstNext.definition = {
    methods: ["post"],
    url: '/api/postnummer-que/first-next',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::firstNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:366
* @route '/api/postnummer-que/first-next'
*/
firstNext.url = (options?: RouteQueryOptions) => {
    return firstNext.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::firstNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:366
* @route '/api/postnummer-que/first-next'
*/
firstNext.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: firstNext.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::firstNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:366
* @route '/api/postnummer-que/first-next'
*/
const firstNextForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: firstNext.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::firstNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:366
* @route '/api/postnummer-que/first-next'
*/
firstNextForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: firstNext.url(options),
    method: 'post',
})

firstNext.form = firstNextForm

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::processNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:249
* @route '/api/postnummer-que/process-next'
*/
export const processNext = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processNext.url(options),
    method: 'post',
})

processNext.definition = {
    methods: ["post"],
    url: '/api/postnummer-que/process-next',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::processNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:249
* @route '/api/postnummer-que/process-next'
*/
processNext.url = (options?: RouteQueryOptions) => {
    return processNext.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::processNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:249
* @route '/api/postnummer-que/process-next'
*/
processNext.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processNext.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::processNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:249
* @route '/api/postnummer-que/process-next'
*/
const processNextForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processNext.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::processNext
* @see app/Http/Controllers/Api/PostNummerQueController.php:249
* @route '/api/postnummer-que/process-next'
*/
processNextForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processNext.url(options),
    method: 'post',
})

processNext.form = processNextForm

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
export const update = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/postnummer-que/{postnummer_que}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
update.url = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer_que: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer_que: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer_que: args.postnummer_que,
    }

    return update.definition.url
            .replace('{postnummer_que}', parsedArgs.postnummer_que.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
update.put = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
update.patch = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
const updateForm = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
updateForm.put = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
updateForm.patch = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:97
* @route '/api/postnummer-que/by-code/{postNummer}'
*/
export const updateByPostNummer = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

updateByPostNummer.definition = {
    methods: ["put"],
    url: '/api/postnummer-que/by-code/{postNummer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:97
* @route '/api/postnummer-que/by-code/{postNummer}'
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
* @see \App\Http\Controllers\Api\PostNummerQueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:97
* @route '/api/postnummer-que/by-code/{postNummer}'
*/
updateByPostNummer.put = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostNummer.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:97
* @route '/api/postnummer-que/by-code/{postNummer}'
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
* @see \App\Http\Controllers\Api\PostNummerQueController::updateByPostNummer
* @see app/Http/Controllers/Api/PostNummerQueController.php:97
* @route '/api/postnummer-que/by-code/{postNummer}'
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

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueController.php:165
* @route '/api/postnummer-que/bulk-update'
*/
export const bulkUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.definition = {
    methods: ["post"],
    url: '/api/postnummer-que/bulk-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueController.php:165
* @route '/api/postnummer-que/bulk-update'
*/
bulkUpdate.url = (options?: RouteQueryOptions) => {
    return bulkUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueController.php:165
* @route '/api/postnummer-que/bulk-update'
*/
bulkUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueController.php:165
* @route '/api/postnummer-que/bulk-update'
*/
const bulkUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::bulkUpdate
* @see app/Http/Controllers/Api/PostNummerQueController.php:165
* @route '/api/postnummer-que/bulk-update'
*/
bulkUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.form = bulkUpdateForm

const PostNummerQueController = { getFirstPostNummer, firstNext, processNext, update, updateByPostNummer, bulkUpdate }

export default PostNummerQueController