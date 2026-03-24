import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/cms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
export const page = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/cms/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
page.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return page.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
page.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
page.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
const pageForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
pageForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
pageForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

page.form = pageForm

const cms = {
    home: Object.assign(home, home),
    page: Object.assign(page, page),
}

export default cms