import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::create
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/verify-email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::create
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::create
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::create
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::create
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::create
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::create
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::store
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/email/verification-notification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::store
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::store
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::store
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::store
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::update
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:0
* @route '/verify-email/{id}/{hash}'
*/
export const update = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: update.url(args, options),
    method: 'get',
})

update.definition = {
    methods: ["get","head"],
    url: '/verify-email/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::update
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:0
* @route '/verify-email/{id}/{hash}'
*/
update.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            hash: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        hash: args.hash,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::update
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:0
* @route '/verify-email/{id}/{hash}'
*/
update.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: update.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::update
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:0
* @route '/verify-email/{id}/{hash}'
*/
update.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: update.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::update
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:0
* @route '/verify-email/{id}/{hash}'
*/
const updateForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::update
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:0
* @route '/verify-email/{id}/{hash}'
*/
updateForm.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::update
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:0
* @route '/verify-email/{id}/{hash}'
*/
updateForm.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

update.form = updateForm

const UserEmailVerificationNotificationController = { create, store, update }

export default UserEmailVerificationNotificationController