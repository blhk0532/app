import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blocks/redirects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\ListRedirects::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/ListRedirects.php:7
* @route '/blocks/redirects'
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
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/blocks/redirects/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\CreateRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/CreateRedirect.php:7
* @route '/blocks/redirects/create'
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
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/blocks/redirects/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
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
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
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

const redirects = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default redirects