import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\HittaSeController::index
* @see app/Http/Controllers/Api/HittaSeController.php:0
* @route '/api/hitta-se'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/hitta-se',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaSeController::index
* @see app/Http/Controllers/Api/HittaSeController.php:0
* @route '/api/hitta-se'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaSeController::index
* @see app/Http/Controllers/Api/HittaSeController.php:0
* @route '/api/hitta-se'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaSeController::index
* @see app/Http/Controllers/Api/HittaSeController.php:0
* @route '/api/hitta-se'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaSeController::index
* @see app/Http/Controllers/Api/HittaSeController.php:0
* @route '/api/hitta-se'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaSeController::index
* @see app/Http/Controllers/Api/HittaSeController.php:0
* @route '/api/hitta-se'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaSeController::index
* @see app/Http/Controllers/Api/HittaSeController.php:0
* @route '/api/hitta-se'
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
* @see \App\Http\Controllers\Api\HittaSeController::store
* @see app/Http/Controllers/Api/HittaSeController.php:16
* @route '/api/hitta-se'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/hitta-se',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaSeController::store
* @see app/Http/Controllers/Api/HittaSeController.php:16
* @route '/api/hitta-se'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaSeController::store
* @see app/Http/Controllers/Api/HittaSeController.php:16
* @route '/api/hitta-se'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaSeController::store
* @see app/Http/Controllers/Api/HittaSeController.php:16
* @route '/api/hitta-se'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaSeController::store
* @see app/Http/Controllers/Api/HittaSeController.php:16
* @route '/api/hitta-se'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\HittaSeController::batchStore
* @see app/Http/Controllers/Api/HittaSeController.php:46
* @route '/api/hitta-se/batch'
*/
export const batchStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchStore.url(options),
    method: 'post',
})

batchStore.definition = {
    methods: ["post"],
    url: '/api/hitta-se/batch',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaSeController::batchStore
* @see app/Http/Controllers/Api/HittaSeController.php:46
* @route '/api/hitta-se/batch'
*/
batchStore.url = (options?: RouteQueryOptions) => {
    return batchStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaSeController::batchStore
* @see app/Http/Controllers/Api/HittaSeController.php:46
* @route '/api/hitta-se/batch'
*/
batchStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaSeController::batchStore
* @see app/Http/Controllers/Api/HittaSeController.php:46
* @route '/api/hitta-se/batch'
*/
const batchStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: batchStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaSeController::batchStore
* @see app/Http/Controllers/Api/HittaSeController.php:46
* @route '/api/hitta-se/batch'
*/
batchStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: batchStore.url(options),
    method: 'post',
})

batchStore.form = batchStoreForm

const HittaSeController = { index, store, batchStore }

export default HittaSeController