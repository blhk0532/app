import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\UpplysningDataController::index
* @see app/Http/Controllers/Api/UpplysningDataController.php:19
* @route '/api/upplysning-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/upplysning-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::index
* @see app/Http/Controllers/Api/UpplysningDataController.php:19
* @route '/api/upplysning-data'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::index
* @see app/Http/Controllers/Api/UpplysningDataController.php:19
* @route '/api/upplysning-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::index
* @see app/Http/Controllers/Api/UpplysningDataController.php:19
* @route '/api/upplysning-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::index
* @see app/Http/Controllers/Api/UpplysningDataController.php:19
* @route '/api/upplysning-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::index
* @see app/Http/Controllers/Api/UpplysningDataController.php:19
* @route '/api/upplysning-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::index
* @see app/Http/Controllers/Api/UpplysningDataController.php:19
* @route '/api/upplysning-data'
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
* @see \App\Http\Controllers\Api\UpplysningDataController::store
* @see app/Http/Controllers/Api/UpplysningDataController.php:65
* @route '/api/upplysning-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/upplysning-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::store
* @see app/Http/Controllers/Api/UpplysningDataController.php:65
* @route '/api/upplysning-data'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::store
* @see app/Http/Controllers/Api/UpplysningDataController.php:65
* @route '/api/upplysning-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::store
* @see app/Http/Controllers/Api/UpplysningDataController.php:65
* @route '/api/upplysning-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::store
* @see app/Http/Controllers/Api/UpplysningDataController.php:65
* @route '/api/upplysning-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::show
* @see app/Http/Controllers/Api/UpplysningDataController.php:90
* @route '/api/upplysning-data/{upplysning_datum}'
*/
export const show = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/upplysning-data/{upplysning_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::show
* @see app/Http/Controllers/Api/UpplysningDataController.php:90
* @route '/api/upplysning-data/{upplysning_datum}'
*/
show.url = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { upplysning_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            upplysning_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        upplysning_datum: args.upplysning_datum,
    }

    return show.definition.url
            .replace('{upplysning_datum}', parsedArgs.upplysning_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::show
* @see app/Http/Controllers/Api/UpplysningDataController.php:90
* @route '/api/upplysning-data/{upplysning_datum}'
*/
show.get = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::show
* @see app/Http/Controllers/Api/UpplysningDataController.php:90
* @route '/api/upplysning-data/{upplysning_datum}'
*/
show.head = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::show
* @see app/Http/Controllers/Api/UpplysningDataController.php:90
* @route '/api/upplysning-data/{upplysning_datum}'
*/
const showForm = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::show
* @see app/Http/Controllers/Api/UpplysningDataController.php:90
* @route '/api/upplysning-data/{upplysning_datum}'
*/
showForm.get = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::show
* @see app/Http/Controllers/Api/UpplysningDataController.php:90
* @route '/api/upplysning-data/{upplysning_datum}'
*/
showForm.head = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\UpplysningDataController::update
* @see app/Http/Controllers/Api/UpplysningDataController.php:95
* @route '/api/upplysning-data/{upplysning_datum}'
*/
export const update = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/upplysning-data/{upplysning_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::update
* @see app/Http/Controllers/Api/UpplysningDataController.php:95
* @route '/api/upplysning-data/{upplysning_datum}'
*/
update.url = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { upplysning_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            upplysning_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        upplysning_datum: args.upplysning_datum,
    }

    return update.definition.url
            .replace('{upplysning_datum}', parsedArgs.upplysning_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::update
* @see app/Http/Controllers/Api/UpplysningDataController.php:95
* @route '/api/upplysning-data/{upplysning_datum}'
*/
update.put = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::update
* @see app/Http/Controllers/Api/UpplysningDataController.php:95
* @route '/api/upplysning-data/{upplysning_datum}'
*/
update.patch = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::update
* @see app/Http/Controllers/Api/UpplysningDataController.php:95
* @route '/api/upplysning-data/{upplysning_datum}'
*/
const updateForm = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::update
* @see app/Http/Controllers/Api/UpplysningDataController.php:95
* @route '/api/upplysning-data/{upplysning_datum}'
*/
updateForm.put = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::update
* @see app/Http/Controllers/Api/UpplysningDataController.php:95
* @route '/api/upplysning-data/{upplysning_datum}'
*/
updateForm.patch = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\UpplysningDataController::destroy
* @see app/Http/Controllers/Api/UpplysningDataController.php:102
* @route '/api/upplysning-data/{upplysning_datum}'
*/
export const destroy = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/upplysning-data/{upplysning_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::destroy
* @see app/Http/Controllers/Api/UpplysningDataController.php:102
* @route '/api/upplysning-data/{upplysning_datum}'
*/
destroy.url = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { upplysning_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            upplysning_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        upplysning_datum: args.upplysning_datum,
    }

    return destroy.definition.url
            .replace('{upplysning_datum}', parsedArgs.upplysning_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::destroy
* @see app/Http/Controllers/Api/UpplysningDataController.php:102
* @route '/api/upplysning-data/{upplysning_datum}'
*/
destroy.delete = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::destroy
* @see app/Http/Controllers/Api/UpplysningDataController.php:102
* @route '/api/upplysning-data/{upplysning_datum}'
*/
const destroyForm = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::destroy
* @see app/Http/Controllers/Api/UpplysningDataController.php:102
* @route '/api/upplysning-data/{upplysning_datum}'
*/
destroyForm.delete = (args: { upplysning_datum: string | number } | [upplysning_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\UpplysningDataController::bulkStore
* @see app/Http/Controllers/Api/UpplysningDataController.php:109
* @route '/api/upplysning-data/bulk'
*/
export const bulkStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

bulkStore.definition = {
    methods: ["post"],
    url: '/api/upplysning-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::bulkStore
* @see app/Http/Controllers/Api/UpplysningDataController.php:109
* @route '/api/upplysning-data/bulk'
*/
bulkStore.url = (options?: RouteQueryOptions) => {
    return bulkStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::bulkStore
* @see app/Http/Controllers/Api/UpplysningDataController.php:109
* @route '/api/upplysning-data/bulk'
*/
bulkStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::bulkStore
* @see app/Http/Controllers/Api/UpplysningDataController.php:109
* @route '/api/upplysning-data/bulk'
*/
const bulkStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UpplysningDataController::bulkStore
* @see app/Http/Controllers/Api/UpplysningDataController.php:109
* @route '/api/upplysning-data/bulk'
*/
bulkStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

bulkStore.form = bulkStoreForm

const UpplysningDataController = { index, store, show, update, destroy, bulkStore }

export default UpplysningDataController