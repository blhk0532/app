import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/nds/dev/cms-comments'
*/
const ListCmsComments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsComments.url(options),
    method: 'get',
})

ListCmsComments.definition = {
    methods: ["get","head"],
    url: '/nds/dev/cms-comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/nds/dev/cms-comments'
*/
ListCmsComments.url = (options?: RouteQueryOptions) => {
    return ListCmsComments.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/nds/dev/cms-comments'
*/
ListCmsComments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsComments.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/nds/dev/cms-comments'
*/
ListCmsComments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCmsComments.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/nds/dev/cms-comments'
*/
const ListCmsCommentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsComments.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/nds/dev/cms-comments'
*/
ListCmsCommentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsComments.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/nds/dev/cms-comments'
*/
ListCmsCommentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsComments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCmsComments.form = ListCmsCommentsForm

export default ListCmsComments