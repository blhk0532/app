import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MerinfoController::index
* @see app/Http/Controllers/Api/MerinfoController.php:22
* @route '/api/merinfo'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/merinfo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MerinfoController::index
* @see app/Http/Controllers/Api/MerinfoController.php:22
* @route '/api/merinfo'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoController::index
* @see app/Http/Controllers/Api/MerinfoController.php:22
* @route '/api/merinfo'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::index
* @see app/Http/Controllers/Api/MerinfoController.php:22
* @route '/api/merinfo'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::index
* @see app/Http/Controllers/Api/MerinfoController.php:22
* @route '/api/merinfo'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::index
* @see app/Http/Controllers/Api/MerinfoController.php:22
* @route '/api/merinfo'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::index
* @see app/Http/Controllers/Api/MerinfoController.php:22
* @route '/api/merinfo'
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
* @see \App\Http\Controllers\Api\MerinfoController::store
* @see app/Http/Controllers/Api/MerinfoController.php:52
* @route '/api/merinfo'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/merinfo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MerinfoController::store
* @see app/Http/Controllers/Api/MerinfoController.php:52
* @route '/api/merinfo'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoController::store
* @see app/Http/Controllers/Api/MerinfoController.php:52
* @route '/api/merinfo'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::store
* @see app/Http/Controllers/Api/MerinfoController.php:52
* @route '/api/merinfo'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::store
* @see app/Http/Controllers/Api/MerinfoController.php:52
* @route '/api/merinfo'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\MerinfoController::show
* @see app/Http/Controllers/Api/MerinfoController.php:83
* @route '/api/merinfo/{merinfo}'
*/
export const show = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/merinfo/{merinfo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MerinfoController::show
* @see app/Http/Controllers/Api/MerinfoController.php:83
* @route '/api/merinfo/{merinfo}'
*/
show.url = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { merinfo: args }
    }

    if (Array.isArray(args)) {
        args = {
            merinfo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        merinfo: args.merinfo,
    }

    return show.definition.url
            .replace('{merinfo}', parsedArgs.merinfo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoController::show
* @see app/Http/Controllers/Api/MerinfoController.php:83
* @route '/api/merinfo/{merinfo}'
*/
show.get = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::show
* @see app/Http/Controllers/Api/MerinfoController.php:83
* @route '/api/merinfo/{merinfo}'
*/
show.head = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::show
* @see app/Http/Controllers/Api/MerinfoController.php:83
* @route '/api/merinfo/{merinfo}'
*/
const showForm = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::show
* @see app/Http/Controllers/Api/MerinfoController.php:83
* @route '/api/merinfo/{merinfo}'
*/
showForm.get = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::show
* @see app/Http/Controllers/Api/MerinfoController.php:83
* @route '/api/merinfo/{merinfo}'
*/
showForm.head = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\MerinfoController::update
* @see app/Http/Controllers/Api/MerinfoController.php:93
* @route '/api/merinfo/{merinfo}'
*/
export const update = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/merinfo/{merinfo}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\MerinfoController::update
* @see app/Http/Controllers/Api/MerinfoController.php:93
* @route '/api/merinfo/{merinfo}'
*/
update.url = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { merinfo: args }
    }

    if (Array.isArray(args)) {
        args = {
            merinfo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        merinfo: args.merinfo,
    }

    return update.definition.url
            .replace('{merinfo}', parsedArgs.merinfo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoController::update
* @see app/Http/Controllers/Api/MerinfoController.php:93
* @route '/api/merinfo/{merinfo}'
*/
update.put = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::update
* @see app/Http/Controllers/Api/MerinfoController.php:93
* @route '/api/merinfo/{merinfo}'
*/
update.patch = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::update
* @see app/Http/Controllers/Api/MerinfoController.php:93
* @route '/api/merinfo/{merinfo}'
*/
const updateForm = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::update
* @see app/Http/Controllers/Api/MerinfoController.php:93
* @route '/api/merinfo/{merinfo}'
*/
updateForm.put = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::update
* @see app/Http/Controllers/Api/MerinfoController.php:93
* @route '/api/merinfo/{merinfo}'
*/
updateForm.patch = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\MerinfoController::destroy
* @see app/Http/Controllers/Api/MerinfoController.php:126
* @route '/api/merinfo/{merinfo}'
*/
export const destroy = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/merinfo/{merinfo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\MerinfoController::destroy
* @see app/Http/Controllers/Api/MerinfoController.php:126
* @route '/api/merinfo/{merinfo}'
*/
destroy.url = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { merinfo: args }
    }

    if (Array.isArray(args)) {
        args = {
            merinfo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        merinfo: args.merinfo,
    }

    return destroy.definition.url
            .replace('{merinfo}', parsedArgs.merinfo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoController::destroy
* @see app/Http/Controllers/Api/MerinfoController.php:126
* @route '/api/merinfo/{merinfo}'
*/
destroy.delete = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::destroy
* @see app/Http/Controllers/Api/MerinfoController.php:126
* @route '/api/merinfo/{merinfo}'
*/
const destroyForm = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::destroy
* @see app/Http/Controllers/Api/MerinfoController.php:126
* @route '/api/merinfo/{merinfo}'
*/
destroyForm.delete = (args: { merinfo: string | number } | [merinfo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Api\MerinfoController::bulkStore
* @see app/Http/Controllers/Api/MerinfoController.php:137
* @route '/api/merinfo/bulk'
*/
export const bulkStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

bulkStore.definition = {
    methods: ["post"],
    url: '/api/merinfo/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MerinfoController::bulkStore
* @see app/Http/Controllers/Api/MerinfoController.php:137
* @route '/api/merinfo/bulk'
*/
bulkStore.url = (options?: RouteQueryOptions) => {
    return bulkStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoController::bulkStore
* @see app/Http/Controllers/Api/MerinfoController.php:137
* @route '/api/merinfo/bulk'
*/
bulkStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::bulkStore
* @see app/Http/Controllers/Api/MerinfoController.php:137
* @route '/api/merinfo/bulk'
*/
const bulkStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoController::bulkStore
* @see app/Http/Controllers/Api/MerinfoController.php:137
* @route '/api/merinfo/bulk'
*/
bulkStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

bulkStore.form = bulkStoreForm

const MerinfoController = { index, store, show, update, destroy, bulkStore }

export default MerinfoController