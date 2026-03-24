import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\ListCmsPages::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/ListCmsPages.php:7
* @route '/nds/dev/cms-pages'
*/
const ListCmsPages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsPages.url(options),
    method: 'get',
})

ListCmsPages.definition = {
    methods: ["get","head"],
    url: '/nds/dev/cms-pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\ListCmsPages::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/ListCmsPages.php:7
* @route '/nds/dev/cms-pages'
*/
ListCmsPages.url = (options?: RouteQueryOptions) => {
    return ListCmsPages.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\ListCmsPages::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/ListCmsPages.php:7
* @route '/nds/dev/cms-pages'
*/
ListCmsPages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsPages.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\ListCmsPages::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/ListCmsPages.php:7
* @route '/nds/dev/cms-pages'
*/
ListCmsPages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCmsPages.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\ListCmsPages::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/ListCmsPages.php:7
* @route '/nds/dev/cms-pages'
*/
const ListCmsPagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPages.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\ListCmsPages::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/ListCmsPages.php:7
* @route '/nds/dev/cms-pages'
*/
ListCmsPagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPages.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\ListCmsPages::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/ListCmsPages.php:7
* @route '/nds/dev/cms-pages'
*/
ListCmsPagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPages.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCmsPages.form = ListCmsPagesForm

export default ListCmsPages