import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
const CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.url(options),
    method: 'get',
})

CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.definition = {
    methods: ["get","head"],
    url: '/cms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.url = (options?: RouteQueryOptions) => {
    return CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
const CmsPageRenderer8b627146ee45a6cbef923e8384a87a3dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
CmsPageRenderer8b627146ee45a6cbef923e8384a87a3dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms'
*/
CmsPageRenderer8b627146ee45a6cbef923e8384a87a3dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d.form = CmsPageRenderer8b627146ee45a6cbef923e8384a87a3dForm
/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
const CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5 = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.url(args, options),
    method: 'get',
})

CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.definition = {
    methods: ["get","head"],
    url: '/cms/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
const CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5Form = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5Form.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\CmsPageRenderer::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/CmsPageRenderer.php:7
* @route '/cms/{slug}'
*/
CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5Form.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5.form = CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5Form

const CmsPageRenderer = {
    '/cms': CmsPageRenderer8b627146ee45a6cbef923e8384a87a3d,
    '/cms/{slug}': CmsPageRendererec7a0c7649cf37f3b67ec9a54cb264c5,
}

export default CmsPageRenderer