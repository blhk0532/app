import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
const ManagePageTree = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManagePageTree.url(options),
    method: 'get',
})

ManagePageTree.definition = {
    methods: ["get","head"],
    url: '/blocks/pages/tree',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
ManagePageTree.url = (options?: RouteQueryOptions) => {
    return ManagePageTree.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
ManagePageTree.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManagePageTree.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
ManagePageTree.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManagePageTree.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
const ManagePageTreeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManagePageTree.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
ManagePageTreeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManagePageTree.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
ManagePageTreeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManagePageTree.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManagePageTree.form = ManagePageTreeForm

export default ManagePageTree