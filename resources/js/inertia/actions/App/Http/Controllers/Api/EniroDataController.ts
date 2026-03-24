import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\EniroDataController::index
* @see app/Http/Controllers/Api/EniroDataController.php:19
* @route '/api/eniro-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/eniro-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\EniroDataController::index
* @see app/Http/Controllers/Api/EniroDataController.php:19
* @route '/api/eniro-data'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\EniroDataController::index
* @see app/Http/Controllers/Api/EniroDataController.php:19
* @route '/api/eniro-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::index
* @see app/Http/Controllers/Api/EniroDataController.php:19
* @route '/api/eniro-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::index
* @see app/Http/Controllers/Api/EniroDataController.php:19
* @route '/api/eniro-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::index
* @see app/Http/Controllers/Api/EniroDataController.php:19
* @route '/api/eniro-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::index
* @see app/Http/Controllers/Api/EniroDataController.php:19
* @route '/api/eniro-data'
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
* @see \App\Http\Controllers\Api\EniroDataController::store
* @see app/Http/Controllers/Api/EniroDataController.php:65
* @route '/api/eniro-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/eniro-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\EniroDataController::store
* @see app/Http/Controllers/Api/EniroDataController.php:65
* @route '/api/eniro-data'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\EniroDataController::store
* @see app/Http/Controllers/Api/EniroDataController.php:65
* @route '/api/eniro-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::store
* @see app/Http/Controllers/Api/EniroDataController.php:65
* @route '/api/eniro-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::store
* @see app/Http/Controllers/Api/EniroDataController.php:65
* @route '/api/eniro-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\EniroDataController::show
* @see app/Http/Controllers/Api/EniroDataController.php:90
* @route '/api/eniro-data/{eniro_datum}'
*/
export const show = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/eniro-data/{eniro_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\EniroDataController::show
* @see app/Http/Controllers/Api/EniroDataController.php:90
* @route '/api/eniro-data/{eniro_datum}'
*/
show.url = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { eniro_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            eniro_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        eniro_datum: args.eniro_datum,
    }

    return show.definition.url
            .replace('{eniro_datum}', parsedArgs.eniro_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\EniroDataController::show
* @see app/Http/Controllers/Api/EniroDataController.php:90
* @route '/api/eniro-data/{eniro_datum}'
*/
show.get = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::show
* @see app/Http/Controllers/Api/EniroDataController.php:90
* @route '/api/eniro-data/{eniro_datum}'
*/
show.head = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::show
* @see app/Http/Controllers/Api/EniroDataController.php:90
* @route '/api/eniro-data/{eniro_datum}'
*/
const showForm = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::show
* @see app/Http/Controllers/Api/EniroDataController.php:90
* @route '/api/eniro-data/{eniro_datum}'
*/
showForm.get = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::show
* @see app/Http/Controllers/Api/EniroDataController.php:90
* @route '/api/eniro-data/{eniro_datum}'
*/
showForm.head = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\EniroDataController::update
* @see app/Http/Controllers/Api/EniroDataController.php:95
* @route '/api/eniro-data/{eniro_datum}'
*/
export const update = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/eniro-data/{eniro_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\EniroDataController::update
* @see app/Http/Controllers/Api/EniroDataController.php:95
* @route '/api/eniro-data/{eniro_datum}'
*/
update.url = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { eniro_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            eniro_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        eniro_datum: args.eniro_datum,
    }

    return update.definition.url
            .replace('{eniro_datum}', parsedArgs.eniro_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\EniroDataController::update
* @see app/Http/Controllers/Api/EniroDataController.php:95
* @route '/api/eniro-data/{eniro_datum}'
*/
update.put = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::update
* @see app/Http/Controllers/Api/EniroDataController.php:95
* @route '/api/eniro-data/{eniro_datum}'
*/
update.patch = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::update
* @see app/Http/Controllers/Api/EniroDataController.php:95
* @route '/api/eniro-data/{eniro_datum}'
*/
const updateForm = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::update
* @see app/Http/Controllers/Api/EniroDataController.php:95
* @route '/api/eniro-data/{eniro_datum}'
*/
updateForm.put = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::update
* @see app/Http/Controllers/Api/EniroDataController.php:95
* @route '/api/eniro-data/{eniro_datum}'
*/
updateForm.patch = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\EniroDataController::destroy
* @see app/Http/Controllers/Api/EniroDataController.php:102
* @route '/api/eniro-data/{eniro_datum}'
*/
export const destroy = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/eniro-data/{eniro_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\EniroDataController::destroy
* @see app/Http/Controllers/Api/EniroDataController.php:102
* @route '/api/eniro-data/{eniro_datum}'
*/
destroy.url = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { eniro_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            eniro_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        eniro_datum: args.eniro_datum,
    }

    return destroy.definition.url
            .replace('{eniro_datum}', parsedArgs.eniro_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\EniroDataController::destroy
* @see app/Http/Controllers/Api/EniroDataController.php:102
* @route '/api/eniro-data/{eniro_datum}'
*/
destroy.delete = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::destroy
* @see app/Http/Controllers/Api/EniroDataController.php:102
* @route '/api/eniro-data/{eniro_datum}'
*/
const destroyForm = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::destroy
* @see app/Http/Controllers/Api/EniroDataController.php:102
* @route '/api/eniro-data/{eniro_datum}'
*/
destroyForm.delete = (args: { eniro_datum: string | number } | [eniro_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\EniroDataController::bulkStore
* @see app/Http/Controllers/Api/EniroDataController.php:109
* @route '/api/eniro-data/bulk'
*/
export const bulkStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

bulkStore.definition = {
    methods: ["post"],
    url: '/api/eniro-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\EniroDataController::bulkStore
* @see app/Http/Controllers/Api/EniroDataController.php:109
* @route '/api/eniro-data/bulk'
*/
bulkStore.url = (options?: RouteQueryOptions) => {
    return bulkStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\EniroDataController::bulkStore
* @see app/Http/Controllers/Api/EniroDataController.php:109
* @route '/api/eniro-data/bulk'
*/
bulkStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::bulkStore
* @see app/Http/Controllers/Api/EniroDataController.php:109
* @route '/api/eniro-data/bulk'
*/
const bulkStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\EniroDataController::bulkStore
* @see app/Http/Controllers/Api/EniroDataController.php:109
* @route '/api/eniro-data/bulk'
*/
bulkStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

bulkStore.form = bulkStoreForm

const EniroDataController = { index, store, show, update, destroy, bulkStore }

export default EniroDataController