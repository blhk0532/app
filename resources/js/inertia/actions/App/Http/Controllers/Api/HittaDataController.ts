import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/hitta-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
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
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/hitta-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulk
* @see app/Http/Controllers/Api/HittaDataController.php:242
* @route '/api/hitta-data/bulk'
*/
export const bulk = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(options),
    method: 'post',
})

bulk.definition = {
    methods: ["post"],
    url: '/api/hitta-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulk
* @see app/Http/Controllers/Api/HittaDataController.php:242
* @route '/api/hitta-data/bulk'
*/
bulk.url = (options?: RouteQueryOptions) => {
    return bulk.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulk
* @see app/Http/Controllers/Api/HittaDataController.php:242
* @route '/api/hitta-data/bulk'
*/
bulk.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulk
* @see app/Http/Controllers/Api/HittaDataController.php:242
* @route '/api/hitta-data/bulk'
*/
const bulkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulk
* @see app/Http/Controllers/Api/HittaDataController.php:242
* @route '/api/hitta-data/bulk'
*/
bulkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(options),
    method: 'post',
})

bulk.form = bulkForm

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
const show3e7cb2bccaae449e54d5c60f908b96c7 = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'get',
})

show3e7cb2bccaae449e54d5c60f908b96c7.definition = {
    methods: ["get","head"],
    url: '/api/hitta-data/{hitta_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7.url = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hitta_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            hitta_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hitta_datum: args.hitta_datum,
    }

    return show3e7cb2bccaae449e54d5c60f908b96c7.definition.url
            .replace('{hitta_datum}', parsedArgs.hitta_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7.get = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7.head = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
const show3e7cb2bccaae449e54d5c60f908b96c7Form = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7Form.get = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7Form.head = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show3e7cb2bccaae449e54d5c60f908b96c7.form = show3e7cb2bccaae449e54d5c60f908b96c7Form
/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_datum}'
*/
const show8ac41d0a070a42d97b632ed886c18de0 = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8ac41d0a070a42d97b632ed886c18de0.url(args, options),
    method: 'get',
})

show8ac41d0a070a42d97b632ed886c18de0.definition = {
    methods: ["get","head"],
    url: '/api/hitta-personer-data/{hitta_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_datum}'
*/
show8ac41d0a070a42d97b632ed886c18de0.url = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hitta_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            hitta_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hitta_datum: args.hitta_datum,
    }

    return show8ac41d0a070a42d97b632ed886c18de0.definition.url
            .replace('{hitta_datum}', parsedArgs.hitta_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_datum}'
*/
show8ac41d0a070a42d97b632ed886c18de0.get = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8ac41d0a070a42d97b632ed886c18de0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_datum}'
*/
show8ac41d0a070a42d97b632ed886c18de0.head = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show8ac41d0a070a42d97b632ed886c18de0.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_datum}'
*/
const show8ac41d0a070a42d97b632ed886c18de0Form = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8ac41d0a070a42d97b632ed886c18de0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_datum}'
*/
show8ac41d0a070a42d97b632ed886c18de0Form.get = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8ac41d0a070a42d97b632ed886c18de0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_datum}'
*/
show8ac41d0a070a42d97b632ed886c18de0Form.head = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8ac41d0a070a42d97b632ed886c18de0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show8ac41d0a070a42d97b632ed886c18de0.form = show8ac41d0a070a42d97b632ed886c18de0Form

export const show = {
    '/api/hitta-data/{hitta_datum}': show3e7cb2bccaae449e54d5c60f908b96c7,
    '/api/hitta-personer-data/{hitta_datum}': show8ac41d0a070a42d97b632ed886c18de0,
}

const HittaDataController = { index, store, bulk, show }

export default HittaDataController