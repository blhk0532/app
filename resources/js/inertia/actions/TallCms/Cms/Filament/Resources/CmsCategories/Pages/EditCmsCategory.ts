import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/nds/dev/cms-categories/{record}/edit'
*/
const EditCmsCategory = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCmsCategory.url(args, options),
    method: 'get',
})

EditCmsCategory.definition = {
    methods: ["get","head"],
    url: '/nds/dev/cms-categories/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/nds/dev/cms-categories/{record}/edit'
*/
EditCmsCategory.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditCmsCategory.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/nds/dev/cms-categories/{record}/edit'
*/
EditCmsCategory.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/nds/dev/cms-categories/{record}/edit'
*/
EditCmsCategory.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCmsCategory.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/nds/dev/cms-categories/{record}/edit'
*/
const EditCmsCategoryForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/nds/dev/cms-categories/{record}/edit'
*/
EditCmsCategoryForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/nds/dev/cms-categories/{record}/edit'
*/
EditCmsCategoryForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCmsCategory.form = EditCmsCategoryForm

export default EditCmsCategory