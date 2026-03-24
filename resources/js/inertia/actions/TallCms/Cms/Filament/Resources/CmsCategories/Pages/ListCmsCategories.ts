import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\ListCmsCategories::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/ListCmsCategories.php:7
* @route '/nds/dev/cms-categories'
*/
const ListCmsCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsCategories.url(options),
    method: 'get',
})

ListCmsCategories.definition = {
    methods: ["get","head"],
    url: '/nds/dev/cms-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\ListCmsCategories::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/ListCmsCategories.php:7
* @route '/nds/dev/cms-categories'
*/
ListCmsCategories.url = (options?: RouteQueryOptions) => {
    return ListCmsCategories.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\ListCmsCategories::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/ListCmsCategories.php:7
* @route '/nds/dev/cms-categories'
*/
ListCmsCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsCategories.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\ListCmsCategories::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/ListCmsCategories.php:7
* @route '/nds/dev/cms-categories'
*/
ListCmsCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCmsCategories.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\ListCmsCategories::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/ListCmsCategories.php:7
* @route '/nds/dev/cms-categories'
*/
const ListCmsCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsCategories.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\ListCmsCategories::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/ListCmsCategories.php:7
* @route '/nds/dev/cms-categories'
*/
ListCmsCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsCategories.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\ListCmsCategories::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/ListCmsCategories.php:7
* @route '/nds/dev/cms-categories'
*/
ListCmsCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCmsCategories.form = ListCmsCategoriesForm

export default ListCmsCategories