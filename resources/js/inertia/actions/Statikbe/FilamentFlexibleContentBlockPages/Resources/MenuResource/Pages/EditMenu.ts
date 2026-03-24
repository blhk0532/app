import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
const EditMenu = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMenu.url(args, options),
    method: 'get',
})

EditMenu.definition = {
    methods: ["get","head"],
    url: '/blocks/menus/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
EditMenu.url = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return EditMenu.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
EditMenu.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMenu.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
EditMenu.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditMenu.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
const EditMenuForm = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMenu.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
EditMenuForm.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMenu.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
EditMenuForm.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMenu.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditMenu.form = EditMenuForm

export default EditMenu