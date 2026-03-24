import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\CreateCmsPost::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/CreateCmsPost.php:7
* @route '/nds/dev/cms-posts/create'
*/
const CreateCmsPost = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCmsPost.url(options),
    method: 'get',
})

CreateCmsPost.definition = {
    methods: ["get","head"],
    url: '/nds/dev/cms-posts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\CreateCmsPost::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/CreateCmsPost.php:7
* @route '/nds/dev/cms-posts/create'
*/
CreateCmsPost.url = (options?: RouteQueryOptions) => {
    return CreateCmsPost.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\CreateCmsPost::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/CreateCmsPost.php:7
* @route '/nds/dev/cms-posts/create'
*/
CreateCmsPost.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCmsPost.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\CreateCmsPost::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/CreateCmsPost.php:7
* @route '/nds/dev/cms-posts/create'
*/
CreateCmsPost.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCmsPost.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\CreateCmsPost::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/CreateCmsPost.php:7
* @route '/nds/dev/cms-posts/create'
*/
const CreateCmsPostForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsPost.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\CreateCmsPost::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/CreateCmsPost.php:7
* @route '/nds/dev/cms-posts/create'
*/
CreateCmsPostForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsPost.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\CreateCmsPost::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/CreateCmsPost.php:7
* @route '/nds/dev/cms-posts/create'
*/
CreateCmsPostForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsPost.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCmsPost.form = CreateCmsPostForm

export default CreateCmsPost