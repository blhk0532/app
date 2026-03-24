import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:22
* @route '/api/ratsit-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:22
* @route '/api/ratsit-data'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:22
* @route '/api/ratsit-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:22
* @route '/api/ratsit-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:22
* @route '/api/ratsit-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:22
* @route '/api/ratsit-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:22
* @route '/api/ratsit-data'
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
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:68
* @route '/api/ratsit-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/ratsit-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:68
* @route '/api/ratsit-data'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:68
* @route '/api/ratsit-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:68
* @route '/api/ratsit-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:68
* @route '/api/ratsit-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulk
* @see app/Http/Controllers/Api/RatsitDataController.php:428
* @route '/api/ratsit-data/bulk'
*/
export const bulk = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(options),
    method: 'post',
})

bulk.definition = {
    methods: ["post"],
    url: '/api/ratsit-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulk
* @see app/Http/Controllers/Api/RatsitDataController.php:428
* @route '/api/ratsit-data/bulk'
*/
bulk.url = (options?: RouteQueryOptions) => {
    return bulk.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulk
* @see app/Http/Controllers/Api/RatsitDataController.php:428
* @route '/api/ratsit-data/bulk'
*/
bulk.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulk
* @see app/Http/Controllers/Api/RatsitDataController.php:428
* @route '/api/ratsit-data/bulk'
*/
const bulkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulk
* @see app/Http/Controllers/Api/RatsitDataController.php:428
* @route '/api/ratsit-data/bulk'
*/
bulkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(options),
    method: 'post',
})

bulk.form = bulkForm

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const showb2c6a938f4faecf346adaf5b82d1c5a3 = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'get',
})

showb2c6a938f4faecf346adaf5b82d1c5a3.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-data/{ratsit_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3.url = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ratsit_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            ratsit_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ratsit_datum: args.ratsit_datum,
    }

    return showb2c6a938f4faecf346adaf5b82d1c5a3.definition.url
            .replace('{ratsit_datum}', parsedArgs.ratsit_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3.get = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3.head = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const showb2c6a938f4faecf346adaf5b82d1c5a3Form = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3Form.get = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3Form.head = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showb2c6a938f4faecf346adaf5b82d1c5a3.form = showb2c6a938f4faecf346adaf5b82d1c5a3Form
/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-personer-data/{ratsit_datum}'
*/
const show5a4d8f48134e825aaf1b0eb43d791c9b = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show5a4d8f48134e825aaf1b0eb43d791c9b.url(args, options),
    method: 'get',
})

show5a4d8f48134e825aaf1b0eb43d791c9b.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-personer-data/{ratsit_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-personer-data/{ratsit_datum}'
*/
show5a4d8f48134e825aaf1b0eb43d791c9b.url = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ratsit_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            ratsit_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ratsit_datum: args.ratsit_datum,
    }

    return show5a4d8f48134e825aaf1b0eb43d791c9b.definition.url
            .replace('{ratsit_datum}', parsedArgs.ratsit_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-personer-data/{ratsit_datum}'
*/
show5a4d8f48134e825aaf1b0eb43d791c9b.get = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show5a4d8f48134e825aaf1b0eb43d791c9b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-personer-data/{ratsit_datum}'
*/
show5a4d8f48134e825aaf1b0eb43d791c9b.head = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show5a4d8f48134e825aaf1b0eb43d791c9b.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-personer-data/{ratsit_datum}'
*/
const show5a4d8f48134e825aaf1b0eb43d791c9bForm = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show5a4d8f48134e825aaf1b0eb43d791c9b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-personer-data/{ratsit_datum}'
*/
show5a4d8f48134e825aaf1b0eb43d791c9bForm.get = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show5a4d8f48134e825aaf1b0eb43d791c9b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:112
* @route '/api/ratsit-personer-data/{ratsit_datum}'
*/
show5a4d8f48134e825aaf1b0eb43d791c9bForm.head = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show5a4d8f48134e825aaf1b0eb43d791c9b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show5a4d8f48134e825aaf1b0eb43d791c9b.form = show5a4d8f48134e825aaf1b0eb43d791c9bForm

export const show = {
    '/api/ratsit-data/{ratsit_datum}': showb2c6a938f4faecf346adaf5b82d1c5a3,
    '/api/ratsit-personer-data/{ratsit_datum}': show5a4d8f48134e825aaf1b0eb43d791c9b,
}

const RatsitDataController = { index, store, bulk, show }

export default RatsitDataController