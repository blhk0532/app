import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
const MediaDownloadController = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MediaDownloadController.url(args, options),
    method: 'get',
})

MediaDownloadController.definition = {
    methods: ["get","head"],
    url: '/media/download/{media}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
MediaDownloadController.url = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return MediaDownloadController.definition.url
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
MediaDownloadController.get = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MediaDownloadController.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
MediaDownloadController.head = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: MediaDownloadController.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
const MediaDownloadControllerForm = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MediaDownloadController.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
MediaDownloadControllerForm.get = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MediaDownloadController.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\MediaDownloadController::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/MediaDownloadController.php:15
* @route '/media/download/{media}'
*/
MediaDownloadControllerForm.head = (args: { media: number | { id: number } } | [media: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MediaDownloadController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

MediaDownloadController.form = MediaDownloadControllerForm

export default MediaDownloadController