import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/api/ringa-data/{id}/outcome'
*/
const store8d27f0ef2eefb9debc166c56015f0bf6 = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8d27f0ef2eefb9debc166c56015f0bf6.url(args, options),
    method: 'post',
})

store8d27f0ef2eefb9debc166c56015f0bf6.definition = {
    methods: ["post"],
    url: '/api/ringa-data/{id}/outcome',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/api/ringa-data/{id}/outcome'
*/
store8d27f0ef2eefb9debc166c56015f0bf6.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return store8d27f0ef2eefb9debc166c56015f0bf6.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/api/ringa-data/{id}/outcome'
*/
store8d27f0ef2eefb9debc166c56015f0bf6.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8d27f0ef2eefb9debc166c56015f0bf6.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/api/ringa-data/{id}/outcome'
*/
const store8d27f0ef2eefb9debc166c56015f0bf6Form = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8d27f0ef2eefb9debc166c56015f0bf6.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/api/ringa-data/{id}/outcome'
*/
store8d27f0ef2eefb9debc166c56015f0bf6Form.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8d27f0ef2eefb9debc166c56015f0bf6.url(args, options),
    method: 'post',
})

store8d27f0ef2eefb9debc166c56015f0bf6.form = store8d27f0ef2eefb9debc166c56015f0bf6Form
/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
const store0ca25eb23aa7555a22ba46072432bb82 = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0ca25eb23aa7555a22ba46072432bb82.url(args, options),
    method: 'post',
})

store0ca25eb23aa7555a22ba46072432bb82.definition = {
    methods: ["post"],
    url: '/{tenant}/ringa-data/{id}/outcome',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
store0ca25eb23aa7555a22ba46072432bb82.url = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            id: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: args.tenant,
        id: args.id,
    }

    return store0ca25eb23aa7555a22ba46072432bb82.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
store0ca25eb23aa7555a22ba46072432bb82.post = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0ca25eb23aa7555a22ba46072432bb82.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
const store0ca25eb23aa7555a22ba46072432bb82Form = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store0ca25eb23aa7555a22ba46072432bb82.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
store0ca25eb23aa7555a22ba46072432bb82Form.post = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store0ca25eb23aa7555a22ba46072432bb82.url(args, options),
    method: 'post',
})

store0ca25eb23aa7555a22ba46072432bb82.form = store0ca25eb23aa7555a22ba46072432bb82Form

export const store = {
    '/api/ringa-data/{id}/outcome': store8d27f0ef2eefb9debc166c56015f0bf6,
    '/{tenant}/ringa-data/{id}/outcome': store0ca25eb23aa7555a22ba46072432bb82,
}

const RingaDataOutcomeController = { store }

export default RingaDataOutcomeController