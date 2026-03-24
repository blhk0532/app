import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\DataPrivateController::index
* @see app/Http/Controllers/Api/DataPrivateController.php:22
* @route '/api/data-private'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/data-private',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DataPrivateController::index
* @see app/Http/Controllers/Api/DataPrivateController.php:22
* @route '/api/data-private'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DataPrivateController::index
* @see app/Http/Controllers/Api/DataPrivateController.php:22
* @route '/api/data-private'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::index
* @see app/Http/Controllers/Api/DataPrivateController.php:22
* @route '/api/data-private'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::index
* @see app/Http/Controllers/Api/DataPrivateController.php:22
* @route '/api/data-private'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::index
* @see app/Http/Controllers/Api/DataPrivateController.php:22
* @route '/api/data-private'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::index
* @see app/Http/Controllers/Api/DataPrivateController.php:22
* @route '/api/data-private'
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
* @see \App\Http\Controllers\Api\DataPrivateController::store
* @see app/Http/Controllers/Api/DataPrivateController.php:77
* @route '/api/data-private'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/data-private',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\DataPrivateController::store
* @see app/Http/Controllers/Api/DataPrivateController.php:77
* @route '/api/data-private'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DataPrivateController::store
* @see app/Http/Controllers/Api/DataPrivateController.php:77
* @route '/api/data-private'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::store
* @see app/Http/Controllers/Api/DataPrivateController.php:77
* @route '/api/data-private'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::store
* @see app/Http/Controllers/Api/DataPrivateController.php:77
* @route '/api/data-private'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\DataPrivateController::show
* @see app/Http/Controllers/Api/DataPrivateController.php:89
* @route '/api/data-private/{data_private}'
*/
export const show = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/data-private/{data_private}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DataPrivateController::show
* @see app/Http/Controllers/Api/DataPrivateController.php:89
* @route '/api/data-private/{data_private}'
*/
show.url = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { data_private: args }
    }

    if (Array.isArray(args)) {
        args = {
            data_private: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        data_private: args.data_private,
    }

    return show.definition.url
            .replace('{data_private}', parsedArgs.data_private.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DataPrivateController::show
* @see app/Http/Controllers/Api/DataPrivateController.php:89
* @route '/api/data-private/{data_private}'
*/
show.get = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::show
* @see app/Http/Controllers/Api/DataPrivateController.php:89
* @route '/api/data-private/{data_private}'
*/
show.head = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::show
* @see app/Http/Controllers/Api/DataPrivateController.php:89
* @route '/api/data-private/{data_private}'
*/
const showForm = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::show
* @see app/Http/Controllers/Api/DataPrivateController.php:89
* @route '/api/data-private/{data_private}'
*/
showForm.get = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::show
* @see app/Http/Controllers/Api/DataPrivateController.php:89
* @route '/api/data-private/{data_private}'
*/
showForm.head = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\DataPrivateController::update
* @see app/Http/Controllers/Api/DataPrivateController.php:97
* @route '/api/data-private/{data_private}'
*/
export const update = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/data-private/{data_private}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\DataPrivateController::update
* @see app/Http/Controllers/Api/DataPrivateController.php:97
* @route '/api/data-private/{data_private}'
*/
update.url = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { data_private: args }
    }

    if (Array.isArray(args)) {
        args = {
            data_private: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        data_private: args.data_private,
    }

    return update.definition.url
            .replace('{data_private}', parsedArgs.data_private.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DataPrivateController::update
* @see app/Http/Controllers/Api/DataPrivateController.php:97
* @route '/api/data-private/{data_private}'
*/
update.put = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::update
* @see app/Http/Controllers/Api/DataPrivateController.php:97
* @route '/api/data-private/{data_private}'
*/
update.patch = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::update
* @see app/Http/Controllers/Api/DataPrivateController.php:97
* @route '/api/data-private/{data_private}'
*/
const updateForm = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::update
* @see app/Http/Controllers/Api/DataPrivateController.php:97
* @route '/api/data-private/{data_private}'
*/
updateForm.put = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::update
* @see app/Http/Controllers/Api/DataPrivateController.php:97
* @route '/api/data-private/{data_private}'
*/
updateForm.patch = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\DataPrivateController::destroy
* @see app/Http/Controllers/Api/DataPrivateController.php:107
* @route '/api/data-private/{data_private}'
*/
export const destroy = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/data-private/{data_private}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\DataPrivateController::destroy
* @see app/Http/Controllers/Api/DataPrivateController.php:107
* @route '/api/data-private/{data_private}'
*/
destroy.url = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { data_private: args }
    }

    if (Array.isArray(args)) {
        args = {
            data_private: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        data_private: args.data_private,
    }

    return destroy.definition.url
            .replace('{data_private}', parsedArgs.data_private.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DataPrivateController::destroy
* @see app/Http/Controllers/Api/DataPrivateController.php:107
* @route '/api/data-private/{data_private}'
*/
destroy.delete = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::destroy
* @see app/Http/Controllers/Api/DataPrivateController.php:107
* @route '/api/data-private/{data_private}'
*/
const destroyForm = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::destroy
* @see app/Http/Controllers/Api/DataPrivateController.php:107
* @route '/api/data-private/{data_private}'
*/
destroyForm.delete = (args: { data_private: string | number } | [data_private: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\DataPrivateController::bulkStore
* @see app/Http/Controllers/Api/DataPrivateController.php:117
* @route '/api/data-private/bulk'
*/
export const bulkStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

bulkStore.definition = {
    methods: ["post"],
    url: '/api/data-private/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\DataPrivateController::bulkStore
* @see app/Http/Controllers/Api/DataPrivateController.php:117
* @route '/api/data-private/bulk'
*/
bulkStore.url = (options?: RouteQueryOptions) => {
    return bulkStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DataPrivateController::bulkStore
* @see app/Http/Controllers/Api/DataPrivateController.php:117
* @route '/api/data-private/bulk'
*/
bulkStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::bulkStore
* @see app/Http/Controllers/Api/DataPrivateController.php:117
* @route '/api/data-private/bulk'
*/
const bulkStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\DataPrivateController::bulkStore
* @see app/Http/Controllers/Api/DataPrivateController.php:117
* @route '/api/data-private/bulk'
*/
bulkStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

bulkStore.form = bulkStoreForm

const DataPrivateController = { index, store, show, update, destroy, bulkStore }

export default DataPrivateController