import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
const ListRedirects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRedirects.url(options),
    method: 'get',
})

ListRedirects.definition = {
    methods: ["get","head"],
    url: '/blocks/redirects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
ListRedirects.url = (options?: RouteQueryOptions) => {
    return ListRedirects.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
ListRedirects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRedirects.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
ListRedirects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRedirects.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
const ListRedirectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRedirects.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
ListRedirectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRedirects.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
ListRedirectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRedirects.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRedirects.form = ListRedirectsForm

export default ListRedirects