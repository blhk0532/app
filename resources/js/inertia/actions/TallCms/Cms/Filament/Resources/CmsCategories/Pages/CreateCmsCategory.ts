import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/nds/dev/cms-categories/create'
*/
const CreateCmsCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCmsCategory.url(options),
    method: 'get',
})

CreateCmsCategory.definition = {
    methods: ["get","head"],
    url: '/nds/dev/cms-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/nds/dev/cms-categories/create'
*/
CreateCmsCategory.url = (options?: RouteQueryOptions) => {
    return CreateCmsCategory.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/nds/dev/cms-categories/create'
*/
CreateCmsCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCmsCategory.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/nds/dev/cms-categories/create'
*/
CreateCmsCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCmsCategory.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/nds/dev/cms-categories/create'
*/
const CreateCmsCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsCategory.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/nds/dev/cms-categories/create'
*/
CreateCmsCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsCategory.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/nds/dev/cms-categories/create'
*/
CreateCmsCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsCategory.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCmsCategory.form = CreateCmsCategoryForm

export default CreateCmsCategory