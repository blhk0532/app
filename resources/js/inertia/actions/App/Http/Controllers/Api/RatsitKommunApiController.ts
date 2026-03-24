import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::list
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:155
* @route '/api/ratsit-kommuner/list'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-kommuner/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::list
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:155
* @route '/api/ratsit-kommuner/list'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::list
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:155
* @route '/api/ratsit-kommuner/list'
*/
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::list
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:155
* @route '/api/ratsit-kommuner/list'
*/
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::list
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:155
* @route '/api/ratsit-kommuner/list'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::list
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:155
* @route '/api/ratsit-kommuner/list'
*/
listForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::list
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:155
* @route '/api/ratsit-kommuner/list'
*/
listForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

list.form = listForm

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::stats
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:195
* @route '/api/ratsit-kommuner/stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-kommuner/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::stats
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:195
* @route '/api/ratsit-kommuner/stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::stats
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:195
* @route '/api/ratsit-kommuner/stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::stats
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:195
* @route '/api/ratsit-kommuner/stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::stats
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:195
* @route '/api/ratsit-kommuner/stats'
*/
const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::stats
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:195
* @route '/api/ratsit-kommuner/stats'
*/
statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::stats
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:195
* @route '/api/ratsit-kommuner/stats'
*/
statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stats.form = statsForm

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
export const getByName = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByName.url(args, options),
    method: 'get',
})

getByName.definition = {
    methods: ["get","put","post","head"],
    url: '/api/ratsit-kommuner/by-name/{kommun}',
} satisfies RouteDefinition<["get","put","post","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByName.url = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kommun: args }
    }

    if (Array.isArray(args)) {
        args = {
            kommun: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kommun: args.kommun,
    }

    return getByName.definition.url
            .replace('{kommun}', parsedArgs.kommun.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByName.get = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByName.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByName.put = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: getByName.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByName.post = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getByName.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByName.head = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getByName.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
const getByNameForm = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByName.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByNameForm.get = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByName.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByNameForm.put = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getByName.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByNameForm.post = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getByName.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::getByName
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:18
* @route '/api/ratsit-kommuner/by-name/{kommun}'
*/
getByNameForm.head = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByName.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getByName.form = getByNameForm

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::update
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:58
* @route '/api/ratsit-kommuner/update/{kommun}'
*/
export const update = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/ratsit-kommuner/update/{kommun}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::update
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:58
* @route '/api/ratsit-kommuner/update/{kommun}'
*/
update.url = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kommun: args }
    }

    if (Array.isArray(args)) {
        args = {
            kommun: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kommun: args.kommun,
    }

    return update.definition.url
            .replace('{kommun}', parsedArgs.kommun.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::update
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:58
* @route '/api/ratsit-kommuner/update/{kommun}'
*/
update.put = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::update
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:58
* @route '/api/ratsit-kommuner/update/{kommun}'
*/
const updateForm = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::update
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:58
* @route '/api/ratsit-kommuner/update/{kommun}'
*/
updateForm.put = (args: { kommun: string | number } | [kommun: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\RatsitKommunApiController::batchUpdate
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:105
* @route '/api/ratsit-kommuner/batch-update'
*/
export const batchUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchUpdate.url(options),
    method: 'post',
})

batchUpdate.definition = {
    methods: ["post"],
    url: '/api/ratsit-kommuner/batch-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::batchUpdate
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:105
* @route '/api/ratsit-kommuner/batch-update'
*/
batchUpdate.url = (options?: RouteQueryOptions) => {
    return batchUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::batchUpdate
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:105
* @route '/api/ratsit-kommuner/batch-update'
*/
batchUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::batchUpdate
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:105
* @route '/api/ratsit-kommuner/batch-update'
*/
const batchUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: batchUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitKommunApiController::batchUpdate
* @see app/Http/Controllers/Api/RatsitKommunApiController.php:105
* @route '/api/ratsit-kommuner/batch-update'
*/
batchUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: batchUpdate.url(options),
    method: 'post',
})

batchUpdate.form = batchUpdateForm

const RatsitKommunApiController = { list, stats, getByName, update, batchUpdate }

export default RatsitKommunApiController