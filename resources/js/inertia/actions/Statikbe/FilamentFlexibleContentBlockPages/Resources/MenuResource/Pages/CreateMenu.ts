import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
const CreateMenu = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMenu.url(options),
    method: 'get',
})

CreateMenu.definition = {
    methods: ["get","head"],
    url: '/blocks/menus/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
CreateMenu.url = (options?: RouteQueryOptions) => {
    return CreateMenu.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
CreateMenu.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMenu.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
CreateMenu.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMenu.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
const CreateMenuForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMenu.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
CreateMenuForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMenu.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
CreateMenuForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMenu.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateMenu.form = CreateMenuForm

export default CreateMenu