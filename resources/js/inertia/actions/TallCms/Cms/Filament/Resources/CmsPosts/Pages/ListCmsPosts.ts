import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/nds/dev/cms-posts'
*/
const ListCmsPosts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsPosts.url(options),
    method: 'get',
})

ListCmsPosts.definition = {
    methods: ["get","head"],
    url: '/nds/dev/cms-posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/nds/dev/cms-posts'
*/
ListCmsPosts.url = (options?: RouteQueryOptions) => {
    return ListCmsPosts.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/nds/dev/cms-posts'
*/
ListCmsPosts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsPosts.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/nds/dev/cms-posts'
*/
ListCmsPosts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCmsPosts.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/nds/dev/cms-posts'
*/
const ListCmsPostsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPosts.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/nds/dev/cms-posts'
*/
ListCmsPostsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPosts.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/nds/dev/cms-posts'
*/
ListCmsPostsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPosts.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCmsPosts.form = ListCmsPostsForm

export default ListCmsPosts