import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
export const store = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/{tenant}/ringa-data/{id}/outcome',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
store.url = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
store.post = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
const storeForm = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RingaDataOutcomeController::store
* @see app/Http/Controllers/RingaDataOutcomeController.php:14
* @route '/{tenant}/ringa-data/{id}/outcome'
*/
storeForm.post = (args: { tenant: string | number, id: string | number } | [tenant: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const outcome = {
    store: Object.assign(store, store),
}

export default outcome