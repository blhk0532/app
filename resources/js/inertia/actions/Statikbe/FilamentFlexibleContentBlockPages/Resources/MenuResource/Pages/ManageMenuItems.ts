import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
const ManageMenuItems = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageMenuItems.url(args, options),
    method: 'get',
})

ManageMenuItems.definition = {
    methods: ["get","head"],
    url: '/blocks/menus/{record}/items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
ManageMenuItems.url = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { record: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: typeof args.record === 'object'
        ? args.record.id
        : args.record,
    }

    return ManageMenuItems.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
ManageMenuItems.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageMenuItems.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
ManageMenuItems.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageMenuItems.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
const ManageMenuItemsForm = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageMenuItems.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
ManageMenuItemsForm.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageMenuItems.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
ManageMenuItemsForm.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageMenuItems.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageMenuItems.form = ManageMenuItemsForm

export default ManageMenuItems