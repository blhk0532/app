import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blocks/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
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
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/blocks/settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
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
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/blocks/settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const settings = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default settings