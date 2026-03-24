import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PostNummerApiController::index
* @see app/Http/Controllers/Api/PostNummerApiController.php:22
* @route '/api/post-nummer'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/post-nummer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::index
* @see app/Http/Controllers/Api/PostNummerApiController.php:22
* @route '/api/post-nummer'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::index
* @see app/Http/Controllers/Api/PostNummerApiController.php:22
* @route '/api/post-nummer'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::index
* @see app/Http/Controllers/Api/PostNummerApiController.php:22
* @route '/api/post-nummer'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::index
* @see app/Http/Controllers/Api/PostNummerApiController.php:22
* @route '/api/post-nummer'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::index
* @see app/Http/Controllers/Api/PostNummerApiController.php:22
* @route '/api/post-nummer'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::index
* @see app/Http/Controllers/Api/PostNummerApiController.php:22
* @route '/api/post-nummer'
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
* @see \App\Http\Controllers\Api\PostNummerApiController::store
* @see app/Http/Controllers/Api/PostNummerApiController.php:50
* @route '/api/post-nummer'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/post-nummer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::store
* @see app/Http/Controllers/Api/PostNummerApiController.php:50
* @route '/api/post-nummer'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::store
* @see app/Http/Controllers/Api/PostNummerApiController.php:50
* @route '/api/post-nummer'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::store
* @see app/Http/Controllers/Api/PostNummerApiController.php:50
* @route '/api/post-nummer'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::store
* @see app/Http/Controllers/Api/PostNummerApiController.php:50
* @route '/api/post-nummer'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::show
* @see app/Http/Controllers/Api/PostNummerApiController.php:79
* @route '/api/post-nummer/{post_nummer}'
*/
export const show = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/post-nummer/{post_nummer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::show
* @see app/Http/Controllers/Api/PostNummerApiController.php:79
* @route '/api/post-nummer/{post_nummer}'
*/
show.url = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post_nummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            post_nummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        post_nummer: args.post_nummer,
    }

    return show.definition.url
            .replace('{post_nummer}', parsedArgs.post_nummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::show
* @see app/Http/Controllers/Api/PostNummerApiController.php:79
* @route '/api/post-nummer/{post_nummer}'
*/
show.get = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::show
* @see app/Http/Controllers/Api/PostNummerApiController.php:79
* @route '/api/post-nummer/{post_nummer}'
*/
show.head = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::show
* @see app/Http/Controllers/Api/PostNummerApiController.php:79
* @route '/api/post-nummer/{post_nummer}'
*/
const showForm = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::show
* @see app/Http/Controllers/Api/PostNummerApiController.php:79
* @route '/api/post-nummer/{post_nummer}'
*/
showForm.get = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::show
* @see app/Http/Controllers/Api/PostNummerApiController.php:79
* @route '/api/post-nummer/{post_nummer}'
*/
showForm.head = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\PostNummerApiController::update
* @see app/Http/Controllers/Api/PostNummerApiController.php:87
* @route '/api/post-nummer/{post_nummer}'
*/
export const update = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/post-nummer/{post_nummer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::update
* @see app/Http/Controllers/Api/PostNummerApiController.php:87
* @route '/api/post-nummer/{post_nummer}'
*/
update.url = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post_nummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            post_nummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        post_nummer: args.post_nummer,
    }

    return update.definition.url
            .replace('{post_nummer}', parsedArgs.post_nummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::update
* @see app/Http/Controllers/Api/PostNummerApiController.php:87
* @route '/api/post-nummer/{post_nummer}'
*/
update.put = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::update
* @see app/Http/Controllers/Api/PostNummerApiController.php:87
* @route '/api/post-nummer/{post_nummer}'
*/
update.patch = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::update
* @see app/Http/Controllers/Api/PostNummerApiController.php:87
* @route '/api/post-nummer/{post_nummer}'
*/
const updateForm = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::update
* @see app/Http/Controllers/Api/PostNummerApiController.php:87
* @route '/api/post-nummer/{post_nummer}'
*/
updateForm.put = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::update
* @see app/Http/Controllers/Api/PostNummerApiController.php:87
* @route '/api/post-nummer/{post_nummer}'
*/
updateForm.patch = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\PostNummerApiController::destroy
* @see app/Http/Controllers/Api/PostNummerApiController.php:97
* @route '/api/post-nummer/{post_nummer}'
*/
export const destroy = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/post-nummer/{post_nummer}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::destroy
* @see app/Http/Controllers/Api/PostNummerApiController.php:97
* @route '/api/post-nummer/{post_nummer}'
*/
destroy.url = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post_nummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            post_nummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        post_nummer: args.post_nummer,
    }

    return destroy.definition.url
            .replace('{post_nummer}', parsedArgs.post_nummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::destroy
* @see app/Http/Controllers/Api/PostNummerApiController.php:97
* @route '/api/post-nummer/{post_nummer}'
*/
destroy.delete = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::destroy
* @see app/Http/Controllers/Api/PostNummerApiController.php:97
* @route '/api/post-nummer/{post_nummer}'
*/
const destroyForm = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::destroy
* @see app/Http/Controllers/Api/PostNummerApiController.php:97
* @route '/api/post-nummer/{post_nummer}'
*/
destroyForm.delete = (args: { post_nummer: string | number } | [post_nummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoQueue
* @see app/Http/Controllers/Api/PostNummerApiController.php:428
* @route '/api/post-nums/merinfo-queue'
*/
export const getMerinfoQueue = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfoQueue.url(options),
    method: 'get',
})

getMerinfoQueue.definition = {
    methods: ["get","head"],
    url: '/api/post-nums/merinfo-queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoQueue
* @see app/Http/Controllers/Api/PostNummerApiController.php:428
* @route '/api/post-nums/merinfo-queue'
*/
getMerinfoQueue.url = (options?: RouteQueryOptions) => {
    return getMerinfoQueue.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoQueue
* @see app/Http/Controllers/Api/PostNummerApiController.php:428
* @route '/api/post-nums/merinfo-queue'
*/
getMerinfoQueue.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfoQueue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoQueue
* @see app/Http/Controllers/Api/PostNummerApiController.php:428
* @route '/api/post-nums/merinfo-queue'
*/
getMerinfoQueue.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMerinfoQueue.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoQueue
* @see app/Http/Controllers/Api/PostNummerApiController.php:428
* @route '/api/post-nums/merinfo-queue'
*/
const getMerinfoQueueForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoQueue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoQueue
* @see app/Http/Controllers/Api/PostNummerApiController.php:428
* @route '/api/post-nums/merinfo-queue'
*/
getMerinfoQueueForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoQueue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoQueue
* @see app/Http/Controllers/Api/PostNummerApiController.php:428
* @route '/api/post-nums/merinfo-queue'
*/
getMerinfoQueueForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoQueue.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getMerinfoQueue.form = getMerinfoQueueForm

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoCount
* @see app/Http/Controllers/Api/PostNummerApiController.php:453
* @route '/api/post-nums/merinfo-count'
*/
export const getMerinfoCount = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfoCount.url(options),
    method: 'get',
})

getMerinfoCount.definition = {
    methods: ["get","head"],
    url: '/api/post-nums/merinfo-count',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoCount
* @see app/Http/Controllers/Api/PostNummerApiController.php:453
* @route '/api/post-nums/merinfo-count'
*/
getMerinfoCount.url = (options?: RouteQueryOptions) => {
    return getMerinfoCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoCount
* @see app/Http/Controllers/Api/PostNummerApiController.php:453
* @route '/api/post-nums/merinfo-count'
*/
getMerinfoCount.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfoCount.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoCount
* @see app/Http/Controllers/Api/PostNummerApiController.php:453
* @route '/api/post-nums/merinfo-count'
*/
getMerinfoCount.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMerinfoCount.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoCount
* @see app/Http/Controllers/Api/PostNummerApiController.php:453
* @route '/api/post-nums/merinfo-count'
*/
const getMerinfoCountForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoCount.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoCount
* @see app/Http/Controllers/Api/PostNummerApiController.php:453
* @route '/api/post-nums/merinfo-count'
*/
getMerinfoCountForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoCount.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getMerinfoCount
* @see app/Http/Controllers/Api/PostNummerApiController.php:453
* @route '/api/post-nums/merinfo-count'
*/
getMerinfoCountForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoCount.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getMerinfoCount.form = getMerinfoCountForm

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
export const getByPostnummer = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByPostnummer.url(args, options),
    method: 'get',
})

getByPostnummer.definition = {
    methods: ["get","put","post","head"],
    url: '/api/post-nums/by-code/{postnummer}',
} satisfies RouteDefinition<["get","put","post","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummer.url = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer: args.postnummer,
    }

    return getByPostnummer.definition.url
            .replace('{postnummer}', parsedArgs.postnummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummer.get = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummer.put = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: getByPostnummer.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummer.post = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getByPostnummer.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummer.head = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getByPostnummer.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
const getByPostnummerForm = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummerForm.get = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByPostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummerForm.put = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getByPostnummer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummerForm.post = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getByPostnummer.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:487
* @route '/api/post-nums/by-code/{postnummer}'
*/
getByPostnummerForm.head = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByPostnummer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getByPostnummer.form = getByPostnummerForm

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nummer/by-code/{postnummer}'
*/
const updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.url(args, options),
    method: 'put',
})

updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.definition = {
    methods: ["put"],
    url: '/api/post-nummer/by-code/{postnummer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nummer/by-code/{postnummer}'
*/
updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.url = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer: args.postnummer,
    }

    return updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.definition.url
            .replace('{postnummer}', parsedArgs.postnummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nummer/by-code/{postnummer}'
*/
updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.put = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nummer/by-code/{postnummer}'
*/
const updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7fForm = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nummer/by-code/{postnummer}'
*/
updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7fForm.put = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f.form = updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7fForm
/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nums/update/{postNummer}'
*/
const updateByPostnummer3966d5fd474f1e8999297ee5bd696f83 = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.url(args, options),
    method: 'put',
})

updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.definition = {
    methods: ["put"],
    url: '/api/post-nums/update/{postNummer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nums/update/{postNummer}'
*/
updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.url = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postNummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postNummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postNummer: args.postNummer,
    }

    return updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.definition.url
            .replace('{postNummer}', parsedArgs.postNummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nums/update/{postNummer}'
*/
updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.put = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nums/update/{postNummer}'
*/
const updateByPostnummer3966d5fd474f1e8999297ee5bd696f83Form = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::updateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:108
* @route '/api/post-nums/update/{postNummer}'
*/
updateByPostnummer3966d5fd474f1e8999297ee5bd696f83Form.put = (args: { postNummer: string | number } | [postNummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateByPostnummer3966d5fd474f1e8999297ee5bd696f83.form = updateByPostnummer3966d5fd474f1e8999297ee5bd696f83Form

export const updateByPostnummer = {
    '/api/post-nummer/by-code/{postnummer}': updateByPostnummer7eb20a1b98a4cf7cf1159a0431beec7f,
    '/api/post-nums/update/{postNummer}': updateByPostnummer3966d5fd474f1e8999297ee5bd696f83,
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:178
* @route '/api/post-nummer/bulk-update'
*/
export const bulkUpdateByPostnummer = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdateByPostnummer.url(options),
    method: 'post',
})

bulkUpdateByPostnummer.definition = {
    methods: ["post"],
    url: '/api/post-nummer/bulk-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:178
* @route '/api/post-nummer/bulk-update'
*/
bulkUpdateByPostnummer.url = (options?: RouteQueryOptions) => {
    return bulkUpdateByPostnummer.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:178
* @route '/api/post-nummer/bulk-update'
*/
bulkUpdateByPostnummer.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdateByPostnummer.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:178
* @route '/api/post-nummer/bulk-update'
*/
const bulkUpdateByPostnummerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdateByPostnummer.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateByPostnummer
* @see app/Http/Controllers/Api/PostNummerApiController.php:178
* @route '/api/post-nummer/bulk-update'
*/
bulkUpdateByPostnummerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdateByPostnummer.url(options),
    method: 'post',
})

bulkUpdateByPostnummer.form = bulkUpdateByPostnummerForm

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateTotals
* @see app/Http/Controllers/Api/PostNummerApiController.php:261
* @route '/api/post-nummer/bulk-update-totals'
*/
export const bulkUpdateTotals = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdateTotals.url(options),
    method: 'post',
})

bulkUpdateTotals.definition = {
    methods: ["post"],
    url: '/api/post-nummer/bulk-update-totals',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateTotals
* @see app/Http/Controllers/Api/PostNummerApiController.php:261
* @route '/api/post-nummer/bulk-update-totals'
*/
bulkUpdateTotals.url = (options?: RouteQueryOptions) => {
    return bulkUpdateTotals.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateTotals
* @see app/Http/Controllers/Api/PostNummerApiController.php:261
* @route '/api/post-nummer/bulk-update-totals'
*/
bulkUpdateTotals.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdateTotals.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateTotals
* @see app/Http/Controllers/Api/PostNummerApiController.php:261
* @route '/api/post-nummer/bulk-update-totals'
*/
const bulkUpdateTotalsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdateTotals.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::bulkUpdateTotals
* @see app/Http/Controllers/Api/PostNummerApiController.php:261
* @route '/api/post-nummer/bulk-update-totals'
*/
bulkUpdateTotalsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdateTotals.url(options),
    method: 'post',
})

bulkUpdateTotals.form = bulkUpdateTotalsForm

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::incrementCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:323
* @route '/api/post-nummer/increment-counters/{postnummer}'
*/
export const incrementCounters = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: incrementCounters.url(args, options),
    method: 'post',
})

incrementCounters.definition = {
    methods: ["post"],
    url: '/api/post-nummer/increment-counters/{postnummer}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::incrementCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:323
* @route '/api/post-nummer/increment-counters/{postnummer}'
*/
incrementCounters.url = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer: args.postnummer,
    }

    return incrementCounters.definition.url
            .replace('{postnummer}', parsedArgs.postnummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::incrementCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:323
* @route '/api/post-nummer/increment-counters/{postnummer}'
*/
incrementCounters.post = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: incrementCounters.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::incrementCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:323
* @route '/api/post-nummer/increment-counters/{postnummer}'
*/
const incrementCountersForm = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: incrementCounters.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::incrementCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:323
* @route '/api/post-nummer/increment-counters/{postnummer}'
*/
incrementCountersForm.post = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: incrementCounters.url(args, options),
    method: 'post',
})

incrementCounters.form = incrementCountersForm

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getResumeInfo
* @see app/Http/Controllers/Api/PostNummerApiController.php:387
* @route '/api/post-nummer/resume-info/{postnummer}'
*/
export const getResumeInfo = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumeInfo.url(args, options),
    method: 'get',
})

getResumeInfo.definition = {
    methods: ["get","head"],
    url: '/api/post-nummer/resume-info/{postnummer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getResumeInfo
* @see app/Http/Controllers/Api/PostNummerApiController.php:387
* @route '/api/post-nummer/resume-info/{postnummer}'
*/
getResumeInfo.url = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer: args.postnummer,
    }

    return getResumeInfo.definition.url
            .replace('{postnummer}', parsedArgs.postnummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getResumeInfo
* @see app/Http/Controllers/Api/PostNummerApiController.php:387
* @route '/api/post-nummer/resume-info/{postnummer}'
*/
getResumeInfo.get = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumeInfo.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getResumeInfo
* @see app/Http/Controllers/Api/PostNummerApiController.php:387
* @route '/api/post-nummer/resume-info/{postnummer}'
*/
getResumeInfo.head = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getResumeInfo.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getResumeInfo
* @see app/Http/Controllers/Api/PostNummerApiController.php:387
* @route '/api/post-nummer/resume-info/{postnummer}'
*/
const getResumeInfoForm = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getResumeInfo.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getResumeInfo
* @see app/Http/Controllers/Api/PostNummerApiController.php:387
* @route '/api/post-nummer/resume-info/{postnummer}'
*/
getResumeInfoForm.get = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getResumeInfo.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::getResumeInfo
* @see app/Http/Controllers/Api/PostNummerApiController.php:387
* @route '/api/post-nummer/resume-info/{postnummer}'
*/
getResumeInfoForm.head = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getResumeInfo.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getResumeInfo.form = getResumeInfoForm

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::resetCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:406
* @route '/api/post-nummer/reset-counters/{postnummer}'
*/
export const resetCounters = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetCounters.url(args, options),
    method: 'post',
})

resetCounters.definition = {
    methods: ["post"],
    url: '/api/post-nummer/reset-counters/{postnummer}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::resetCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:406
* @route '/api/post-nummer/reset-counters/{postnummer}'
*/
resetCounters.url = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer: args.postnummer,
    }

    return resetCounters.definition.url
            .replace('{postnummer}', parsedArgs.postnummer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::resetCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:406
* @route '/api/post-nummer/reset-counters/{postnummer}'
*/
resetCounters.post = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetCounters.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::resetCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:406
* @route '/api/post-nummer/reset-counters/{postnummer}'
*/
const resetCountersForm = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resetCounters.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerApiController::resetCounters
* @see app/Http/Controllers/Api/PostNummerApiController.php:406
* @route '/api/post-nummer/reset-counters/{postnummer}'
*/
resetCountersForm.post = (args: { postnummer: string | number } | [postnummer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resetCounters.url(args, options),
    method: 'post',
})

resetCounters.form = resetCountersForm

const PostNummerApiController = { index, store, show, update, destroy, getMerinfoQueue, getMerinfoCount, getByPostnummer, updateByPostnummer, bulkUpdateByPostnummer, bulkUpdateTotals, incrementCounters, getResumeInfo, resetCounters }

export default PostNummerApiController