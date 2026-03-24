import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:16
* @route '/sitemap.xml'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/sitemap.xml',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:16
* @route '/sitemap.xml'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:16
* @route '/sitemap.xml'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:16
* @route '/sitemap.xml'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:16
* @route '/sitemap.xml'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:16
* @route '/sitemap.xml'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:16
* @route '/sitemap.xml'
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
* @see \TallCms\Cms\Http\Controllers\SitemapController::pages
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:35
* @route '/sitemap-pages.xml'
*/
export const pages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pages.url(options),
    method: 'get',
})

pages.definition = {
    methods: ["get","head"],
    url: '/sitemap-pages.xml',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::pages
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:35
* @route '/sitemap-pages.xml'
*/
pages.url = (options?: RouteQueryOptions) => {
    return pages.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::pages
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:35
* @route '/sitemap-pages.xml'
*/
pages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pages.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::pages
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:35
* @route '/sitemap-pages.xml'
*/
pages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pages.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::pages
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:35
* @route '/sitemap-pages.xml'
*/
const pagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pages.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::pages
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:35
* @route '/sitemap-pages.xml'
*/
pagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pages.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::pages
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:35
* @route '/sitemap-pages.xml'
*/
pagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pages.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pages.form = pagesForm

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::posts
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:49
* @route '/sitemap-posts-{page}.xml'
*/
export const posts = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: posts.url(args, options),
    method: 'get',
})

posts.definition = {
    methods: ["get","head"],
    url: '/sitemap-posts-{page}.xml',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::posts
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:49
* @route '/sitemap-posts-{page}.xml'
*/
posts.url = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: args.page,
    }

    return posts.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::posts
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:49
* @route '/sitemap-posts-{page}.xml'
*/
posts.get = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: posts.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::posts
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:49
* @route '/sitemap-posts-{page}.xml'
*/
posts.head = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: posts.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::posts
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:49
* @route '/sitemap-posts-{page}.xml'
*/
const postsForm = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: posts.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::posts
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:49
* @route '/sitemap-posts-{page}.xml'
*/
postsForm.get = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: posts.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::posts
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:49
* @route '/sitemap-posts-{page}.xml'
*/
postsForm.head = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: posts.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

posts.form = postsForm

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::categories
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:67
* @route '/sitemap-categories.xml'
*/
export const categories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

categories.definition = {
    methods: ["get","head"],
    url: '/sitemap-categories.xml',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::categories
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:67
* @route '/sitemap-categories.xml'
*/
categories.url = (options?: RouteQueryOptions) => {
    return categories.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::categories
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:67
* @route '/sitemap-categories.xml'
*/
categories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::categories
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:67
* @route '/sitemap-categories.xml'
*/
categories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categories.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::categories
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:67
* @route '/sitemap-categories.xml'
*/
const categoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::categories
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:67
* @route '/sitemap-categories.xml'
*/
categoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::categories
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:67
* @route '/sitemap-categories.xml'
*/
categoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categories.form = categoriesForm

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::authors
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:85
* @route '/sitemap-authors.xml'
*/
export const authors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authors.url(options),
    method: 'get',
})

authors.definition = {
    methods: ["get","head"],
    url: '/sitemap-authors.xml',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::authors
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:85
* @route '/sitemap-authors.xml'
*/
authors.url = (options?: RouteQueryOptions) => {
    return authors.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::authors
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:85
* @route '/sitemap-authors.xml'
*/
authors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authors.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::authors
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:85
* @route '/sitemap-authors.xml'
*/
authors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: authors.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::authors
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:85
* @route '/sitemap-authors.xml'
*/
const authorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authors.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::authors
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:85
* @route '/sitemap-authors.xml'
*/
authorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authors.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\SitemapController::authors
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/SitemapController.php:85
* @route '/sitemap-authors.xml'
*/
authorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authors.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

authors.form = authorsForm

const SitemapController = { index, pages, posts, categories, authors }

export default SitemapController