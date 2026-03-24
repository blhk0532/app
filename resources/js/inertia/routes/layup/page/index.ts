import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
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
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/pages/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
show.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
const showForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
showForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
showForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const page = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default page