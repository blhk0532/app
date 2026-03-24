import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
const CreatePage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePage.url(options),
    method: 'get',
})

CreatePage.definition = {
    methods: ["get","head"],
    url: '/blocks/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
CreatePage.url = (options?: RouteQueryOptions) => {
    return CreatePage.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
CreatePage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
CreatePage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePage.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
const CreatePageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
CreatePageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
CreatePageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreatePage.form = CreatePageForm

export default CreatePage