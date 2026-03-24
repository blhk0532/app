import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MerinfoDataController::index
* @see app/Http/Controllers/Api/MerinfoDataController.php:21
* @route '/api/merinfo-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/merinfo-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::index
* @see app/Http/Controllers/Api/MerinfoDataController.php:21
* @route '/api/merinfo-data'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::index
* @see app/Http/Controllers/Api/MerinfoDataController.php:21
* @route '/api/merinfo-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::index
* @see app/Http/Controllers/Api/MerinfoDataController.php:21
* @route '/api/merinfo-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::index
* @see app/Http/Controllers/Api/MerinfoDataController.php:21
* @route '/api/merinfo-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::index
* @see app/Http/Controllers/Api/MerinfoDataController.php:21
* @route '/api/merinfo-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::index
* @see app/Http/Controllers/Api/MerinfoDataController.php:21
* @route '/api/merinfo-data'
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
* @see \App\Http\Controllers\Api\MerinfoDataController::store
* @see app/Http/Controllers/Api/MerinfoDataController.php:47
* @route '/api/merinfo-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/merinfo-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::store
* @see app/Http/Controllers/Api/MerinfoDataController.php:47
* @route '/api/merinfo-data'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::store
* @see app/Http/Controllers/Api/MerinfoDataController.php:47
* @route '/api/merinfo-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::store
* @see app/Http/Controllers/Api/MerinfoDataController.php:47
* @route '/api/merinfo-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::store
* @see app/Http/Controllers/Api/MerinfoDataController.php:47
* @route '/api/merinfo-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::show
* @see app/Http/Controllers/Api/MerinfoDataController.php:130
* @route '/api/merinfo-data/{merinfo_datum}'
*/
export const show = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/merinfo-data/{merinfo_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::show
* @see app/Http/Controllers/Api/MerinfoDataController.php:130
* @route '/api/merinfo-data/{merinfo_datum}'
*/
show.url = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { merinfo_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            merinfo_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        merinfo_datum: args.merinfo_datum,
    }

    return show.definition.url
            .replace('{merinfo_datum}', parsedArgs.merinfo_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::show
* @see app/Http/Controllers/Api/MerinfoDataController.php:130
* @route '/api/merinfo-data/{merinfo_datum}'
*/
show.get = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::show
* @see app/Http/Controllers/Api/MerinfoDataController.php:130
* @route '/api/merinfo-data/{merinfo_datum}'
*/
show.head = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::show
* @see app/Http/Controllers/Api/MerinfoDataController.php:130
* @route '/api/merinfo-data/{merinfo_datum}'
*/
const showForm = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::show
* @see app/Http/Controllers/Api/MerinfoDataController.php:130
* @route '/api/merinfo-data/{merinfo_datum}'
*/
showForm.get = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::show
* @see app/Http/Controllers/Api/MerinfoDataController.php:130
* @route '/api/merinfo-data/{merinfo_datum}'
*/
showForm.head = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\MerinfoDataController::update
* @see app/Http/Controllers/Api/MerinfoDataController.php:140
* @route '/api/merinfo-data/{merinfo_datum}'
*/
export const update = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/merinfo-data/{merinfo_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::update
* @see app/Http/Controllers/Api/MerinfoDataController.php:140
* @route '/api/merinfo-data/{merinfo_datum}'
*/
update.url = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { merinfo_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            merinfo_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        merinfo_datum: args.merinfo_datum,
    }

    return update.definition.url
            .replace('{merinfo_datum}', parsedArgs.merinfo_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::update
* @see app/Http/Controllers/Api/MerinfoDataController.php:140
* @route '/api/merinfo-data/{merinfo_datum}'
*/
update.put = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::update
* @see app/Http/Controllers/Api/MerinfoDataController.php:140
* @route '/api/merinfo-data/{merinfo_datum}'
*/
update.patch = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::update
* @see app/Http/Controllers/Api/MerinfoDataController.php:140
* @route '/api/merinfo-data/{merinfo_datum}'
*/
const updateForm = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::update
* @see app/Http/Controllers/Api/MerinfoDataController.php:140
* @route '/api/merinfo-data/{merinfo_datum}'
*/
updateForm.put = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::update
* @see app/Http/Controllers/Api/MerinfoDataController.php:140
* @route '/api/merinfo-data/{merinfo_datum}'
*/
updateForm.patch = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\MerinfoDataController::destroy
* @see app/Http/Controllers/Api/MerinfoDataController.php:213
* @route '/api/merinfo-data/{merinfo_datum}'
*/
export const destroy = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/merinfo-data/{merinfo_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::destroy
* @see app/Http/Controllers/Api/MerinfoDataController.php:213
* @route '/api/merinfo-data/{merinfo_datum}'
*/
destroy.url = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { merinfo_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            merinfo_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        merinfo_datum: args.merinfo_datum,
    }

    return destroy.definition.url
            .replace('{merinfo_datum}', parsedArgs.merinfo_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::destroy
* @see app/Http/Controllers/Api/MerinfoDataController.php:213
* @route '/api/merinfo-data/{merinfo_datum}'
*/
destroy.delete = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::destroy
* @see app/Http/Controllers/Api/MerinfoDataController.php:213
* @route '/api/merinfo-data/{merinfo_datum}'
*/
const destroyForm = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::destroy
* @see app/Http/Controllers/Api/MerinfoDataController.php:213
* @route '/api/merinfo-data/{merinfo_datum}'
*/
destroyForm.delete = (args: { merinfo_datum: string | number } | [merinfo_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkStore
* @see app/Http/Controllers/Api/MerinfoDataController.php:224
* @route '/api/merinfo-data/bulk'
*/
export const bulkStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

bulkStore.definition = {
    methods: ["post"],
    url: '/api/merinfo-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkStore
* @see app/Http/Controllers/Api/MerinfoDataController.php:224
* @route '/api/merinfo-data/bulk'
*/
bulkStore.url = (options?: RouteQueryOptions) => {
    return bulkStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkStore
* @see app/Http/Controllers/Api/MerinfoDataController.php:224
* @route '/api/merinfo-data/bulk'
*/
bulkStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkStore
* @see app/Http/Controllers/Api/MerinfoDataController.php:224
* @route '/api/merinfo-data/bulk'
*/
const bulkStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkStore
* @see app/Http/Controllers/Api/MerinfoDataController.php:224
* @route '/api/merinfo-data/bulk'
*/
bulkStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

bulkStore.form = bulkStoreForm

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkUpdateTotals
* @see app/Http/Controllers/Api/MerinfoDataController.php:407
* @route '/api/merinfo-data/bulk-update-totals'
*/
export const bulkUpdateTotals = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdateTotals.url(options),
    method: 'post',
})

bulkUpdateTotals.definition = {
    methods: ["post"],
    url: '/api/merinfo-data/bulk-update-totals',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkUpdateTotals
* @see app/Http/Controllers/Api/MerinfoDataController.php:407
* @route '/api/merinfo-data/bulk-update-totals'
*/
bulkUpdateTotals.url = (options?: RouteQueryOptions) => {
    return bulkUpdateTotals.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkUpdateTotals
* @see app/Http/Controllers/Api/MerinfoDataController.php:407
* @route '/api/merinfo-data/bulk-update-totals'
*/
bulkUpdateTotals.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdateTotals.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkUpdateTotals
* @see app/Http/Controllers/Api/MerinfoDataController.php:407
* @route '/api/merinfo-data/bulk-update-totals'
*/
const bulkUpdateTotalsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdateTotals.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MerinfoDataController::bulkUpdateTotals
* @see app/Http/Controllers/Api/MerinfoDataController.php:407
* @route '/api/merinfo-data/bulk-update-totals'
*/
bulkUpdateTotalsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdateTotals.url(options),
    method: 'post',
})

bulkUpdateTotals.form = bulkUpdateTotalsForm

const MerinfoDataController = { index, store, show, update, destroy, bulkStore, bulkUpdateTotals }

export default MerinfoDataController