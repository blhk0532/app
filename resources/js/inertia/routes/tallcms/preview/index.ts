import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::token
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:53
* @route '/preview/share/{token}'
*/
export const token = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: token.url(args, options),
    method: 'get',
})

token.definition = {
    methods: ["get","head"],
    url: '/preview/share/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::token
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:53
* @route '/preview/share/{token}'
*/
token.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return token.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::token
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:53
* @route '/preview/share/{token}'
*/
token.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: token.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::token
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:53
* @route '/preview/share/{token}'
*/
token.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: token.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::token
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:53
* @route '/preview/share/{token}'
*/
const tokenForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: token.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::token
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:53
* @route '/preview/share/{token}'
*/
tokenForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: token.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::token
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:53
* @route '/preview/share/{token}'
*/
tokenForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: token.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

token.form = tokenForm

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::page
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:20
* @route '/preview/page/{page}'
*/
export const page = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/preview/page/{page}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::page
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:20
* @route '/preview/page/{page}'
*/
page.url = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return page.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::page
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:20
* @route '/preview/page/{page}'
*/
page.get = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::page
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:20
* @route '/preview/page/{page}'
*/
page.head = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::page
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:20
* @route '/preview/page/{page}'
*/
const pageForm = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::page
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:20
* @route '/preview/page/{page}'
*/
pageForm.get = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::page
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:20
* @route '/preview/page/{page}'
*/
pageForm.head = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

page.form = pageForm

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::post
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:35
* @route '/preview/post/{post}'
*/
export const post = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(args, options),
    method: 'get',
})

post.definition = {
    methods: ["get","head"],
    url: '/preview/post/{post}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::post
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:35
* @route '/preview/post/{post}'
*/
post.url = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { post: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        post: typeof args.post === 'object'
        ? args.post.id
        : args.post,
    }

    return post.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::post
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:35
* @route '/preview/post/{post}'
*/
post.get = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::post
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:35
* @route '/preview/post/{post}'
*/
post.head = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: post.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::post
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:35
* @route '/preview/post/{post}'
*/
const postForm = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: post.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::post
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:35
* @route '/preview/post/{post}'
*/
postForm.get = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: post.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\PreviewController::post
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/PreviewController.php:35
* @route '/preview/post/{post}'
*/
postForm.head = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: post.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

post.form = postForm

const preview = {
    token: Object.assign(token, token),
    page: Object.assign(page, page),
    post: Object.assign(post, post),
}

export default preview