import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
const ListMenus = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMenus.url(options),
    method: 'get',
})

ListMenus.definition = {
    methods: ["get","head"],
    url: '/blocks/menus',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
ListMenus.url = (options?: RouteQueryOptions) => {
    return ListMenus.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
ListMenus.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMenus.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
ListMenus.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMenus.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
const ListMenusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMenus.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
ListMenusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMenus.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
ListMenusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMenus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListMenus.form = ListMenusForm

export default ListMenus