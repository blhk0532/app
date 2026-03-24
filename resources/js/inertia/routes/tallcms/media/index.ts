import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
export const download = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/media/download/{media}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
download.url = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { media: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { media: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            media: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        media: typeof args.media === 'object'
        ? args.media.id
        : args.media,
    }

    return download.definition.url
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
download.get = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
download.head = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
const downloadForm = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
downloadForm.get = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
downloadForm.head = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

const media = {
    download: Object.assign(download, download),
}

export default media