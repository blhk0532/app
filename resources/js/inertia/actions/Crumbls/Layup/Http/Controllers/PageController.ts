import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
const PageController01be313083f752c41dc8b10f96264689 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageController01be313083f752c41dc8b10f96264689.url(options),
    method: 'get',
})

PageController01be313083f752c41dc8b10f96264689.definition = {
    methods: ["get","head"],
    url: '/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
PageController01be313083f752c41dc8b10f96264689.url = (options?: RouteQueryOptions) => {
    return PageController01be313083f752c41dc8b10f96264689.definition.url + queryParams(options)
}

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
PageController01be313083f752c41dc8b10f96264689.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageController01be313083f752c41dc8b10f96264689.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
PageController01be313083f752c41dc8b10f96264689.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PageController01be313083f752c41dc8b10f96264689.url(options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
const PageController01be313083f752c41dc8b10f96264689Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageController01be313083f752c41dc8b10f96264689.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
PageController01be313083f752c41dc8b10f96264689Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageController01be313083f752c41dc8b10f96264689.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages'
*/
PageController01be313083f752c41dc8b10f96264689Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageController01be313083f752c41dc8b10f96264689.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PageController01be313083f752c41dc8b10f96264689.form = PageController01be313083f752c41dc8b10f96264689Form
/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
const PageController9971c294e6eed63ad75b5dc4a6ee5117 = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageController9971c294e6eed63ad75b5dc4a6ee5117.url(args, options),
    method: 'get',
})

PageController9971c294e6eed63ad75b5dc4a6ee5117.definition = {
    methods: ["get","head"],
    url: '/pages/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
PageController9971c294e6eed63ad75b5dc4a6ee5117.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return PageController9971c294e6eed63ad75b5dc4a6ee5117.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
PageController9971c294e6eed63ad75b5dc4a6ee5117.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageController9971c294e6eed63ad75b5dc4a6ee5117.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
PageController9971c294e6eed63ad75b5dc4a6ee5117.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PageController9971c294e6eed63ad75b5dc4a6ee5117.url(args, options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
const PageController9971c294e6eed63ad75b5dc4a6ee5117Form = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageController9971c294e6eed63ad75b5dc4a6ee5117.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
PageController9971c294e6eed63ad75b5dc4a6ee5117Form.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageController9971c294e6eed63ad75b5dc4a6ee5117.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Http\Controllers\PageController::__invoke
* @see plugins/crumbls/layup/src/Http/Controllers/PageController.php:40
* @route '/pages/{slug}'
*/
PageController9971c294e6eed63ad75b5dc4a6ee5117Form.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageController9971c294e6eed63ad75b5dc4a6ee5117.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PageController9971c294e6eed63ad75b5dc4a6ee5117.form = PageController9971c294e6eed63ad75b5dc4a6ee5117Form

const PageController = {
    '/pages': PageController01be313083f752c41dc8b10f96264689,
    '/pages/{slug}': PageController9971c294e6eed63ad75b5dc4a6ee5117,
}

export default PageController