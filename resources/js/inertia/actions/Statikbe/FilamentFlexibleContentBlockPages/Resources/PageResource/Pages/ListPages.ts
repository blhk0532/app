import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
const ListPages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPages.url(options),
    method: 'get',
})

ListPages.definition = {
    methods: ["get","head"],
    url: '/blocks/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
ListPages.url = (options?: RouteQueryOptions) => {
    return ListPages.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
ListPages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPages.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
ListPages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPages.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
const ListPagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPages.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
ListPagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPages.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
ListPagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPages.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListPages.form = ListPagesForm

export default ListPages