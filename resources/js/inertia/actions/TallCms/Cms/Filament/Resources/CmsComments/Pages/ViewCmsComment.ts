import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ViewCmsComment::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ViewCmsComment.php:7
* @route '/nds/dev/cms-comments/{record}'
*/
const ViewCmsComment = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCmsComment.url(args, options),
    method: 'get',
})

ViewCmsComment.definition = {
    methods: ["get","head"],
    url: '/nds/dev/cms-comments/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ViewCmsComment::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ViewCmsComment.php:7
* @route '/nds/dev/cms-comments/{record}'
*/
ViewCmsComment.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewCmsComment.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ViewCmsComment::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ViewCmsComment.php:7
* @route '/nds/dev/cms-comments/{record}'
*/
ViewCmsComment.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCmsComment.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ViewCmsComment::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ViewCmsComment.php:7
* @route '/nds/dev/cms-comments/{record}'
*/
ViewCmsComment.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewCmsComment.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ViewCmsComment::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ViewCmsComment.php:7
* @route '/nds/dev/cms-comments/{record}'
*/
const ViewCmsCommentForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCmsComment.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ViewCmsComment::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ViewCmsComment.php:7
* @route '/nds/dev/cms-comments/{record}'
*/
ViewCmsCommentForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCmsComment.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ViewCmsComment::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ViewCmsComment.php:7
* @route '/nds/dev/cms-comments/{record}'
*/
ViewCmsCommentForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewCmsComment.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewCmsComment.form = ViewCmsCommentForm

export default ViewCmsComment