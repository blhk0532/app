import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
const CreateRedirect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRedirect.url(options),
    method: 'get',
})

CreateRedirect.definition = {
    methods: ["get","head"],
    url: '/blocks/redirects/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
CreateRedirect.url = (options?: RouteQueryOptions) => {
    return CreateRedirect.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
CreateRedirect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRedirect.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
CreateRedirect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRedirect.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
const CreateRedirectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRedirect.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
CreateRedirectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRedirect.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
CreateRedirectForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRedirect.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRedirect.form = CreateRedirectForm

export default CreateRedirect