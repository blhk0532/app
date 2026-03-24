import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blocks/menus',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ListMenus::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ListMenus.php:7
* @route '/blocks/menus'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/blocks/menus/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\CreateMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/CreateMenu.php:7
* @route '/blocks/menus/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
export const edit = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/blocks/menus/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
edit.url = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
edit.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
edit.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
const editForm = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
editForm.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\EditMenu::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/EditMenu.php:7
* @route '/blocks/menus/{record}/edit'
*/
editForm.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
export const items = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: items.url(args, options),
    method: 'get',
})

items.definition = {
    methods: ["get","head"],
    url: '/blocks/menus/{record}/items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
items.url = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return items.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
items.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: items.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
items.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: items.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
const itemsForm = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: items.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
itemsForm.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: items.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\MenuResource\Pages\ManageMenuItems::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/MenuResource/Pages/ManageMenuItems.php:7
* @route '/blocks/menus/{record}/items'
*/
itemsForm.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: items.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

items.form = itemsForm

const menus = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
    items: Object.assign(items, items),
}

export default menus