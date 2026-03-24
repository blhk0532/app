import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PersonerDataController::index
* @see app/Http/Controllers/Api/PersonerDataController.php:0
* @route '/api/personer-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/personer-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PersonerDataController::index
* @see app/Http/Controllers/Api/PersonerDataController.php:0
* @route '/api/personer-data'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PersonerDataController::index
* @see app/Http/Controllers/Api/PersonerDataController.php:0
* @route '/api/personer-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PersonerDataController::index
* @see app/Http/Controllers/Api/PersonerDataController.php:0
* @route '/api/personer-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PersonerDataController::index
* @see app/Http/Controllers/Api/PersonerDataController.php:0
* @route '/api/personer-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PersonerDataController::index
* @see app/Http/Controllers/Api/PersonerDataController.php:0
* @route '/api/personer-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PersonerDataController::index
* @see app/Http/Controllers/Api/PersonerDataController.php:0
* @route '/api/personer-data'
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
* @see \App\Http\Controllers\Api\PersonerDataController::store
* @see app/Http/Controllers/Api/PersonerDataController.php:318
* @route '/api/personer-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/personer-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PersonerDataController::store
* @see app/Http/Controllers/Api/PersonerDataController.php:318
* @route '/api/personer-data'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PersonerDataController::store
* @see app/Http/Controllers/Api/PersonerDataController.php:318
* @route '/api/personer-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PersonerDataController::store
* @see app/Http/Controllers/Api/PersonerDataController.php:318
* @route '/api/personer-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PersonerDataController::store
* @see app/Http/Controllers/Api/PersonerDataController.php:318
* @route '/api/personer-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\PersonerDataController::bulkStore
* @see app/Http/Controllers/Api/PersonerDataController.php:16
* @route '/api/personer-data/bulk'
*/
export const bulkStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

bulkStore.definition = {
    methods: ["post"],
    url: '/api/personer-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PersonerDataController::bulkStore
* @see app/Http/Controllers/Api/PersonerDataController.php:16
* @route '/api/personer-data/bulk'
*/
bulkStore.url = (options?: RouteQueryOptions) => {
    return bulkStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PersonerDataController::bulkStore
* @see app/Http/Controllers/Api/PersonerDataController.php:16
* @route '/api/personer-data/bulk'
*/
bulkStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PersonerDataController::bulkStore
* @see app/Http/Controllers/Api/PersonerDataController.php:16
* @route '/api/personer-data/bulk'
*/
const bulkStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PersonerDataController::bulkStore
* @see app/Http/Controllers/Api/PersonerDataController.php:16
* @route '/api/personer-data/bulk'
*/
bulkStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore.url(options),
    method: 'post',
})

bulkStore.form = bulkStoreForm

const PersonerDataController = { index, store, bulkStore }

export default PersonerDataController