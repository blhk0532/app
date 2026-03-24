import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
export const update = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/postnummer-que/{postnummer_que}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
update.url = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postnummer_que: args }
    }

    if (Array.isArray(args)) {
        args = {
            postnummer_que: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postnummer_que: args.postnummer_que,
    }

    return update.definition.url
            .replace('{postnummer_que}', parsedArgs.postnummer_que.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
update.put = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
update.patch = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
const updateForm = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
updateForm.put = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PostNummerQueController::update
* @see app/Http/Controllers/Api/PostNummerQueController.php:60
* @route '/api/postnummer-que/{postnummer_que}'
*/
updateForm.patch = (args: { postnummer_que: string | number } | [postnummer_que: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const postnummerQue = {
    update: Object.assign(update, update),
}

export default postnummerQue