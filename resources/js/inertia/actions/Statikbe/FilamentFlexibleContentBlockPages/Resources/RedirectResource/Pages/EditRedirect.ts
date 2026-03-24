import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
const EditRedirect = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRedirect.url(args, options),
    method: 'get',
})

EditRedirect.definition = {
    methods: ["get","head"],
    url: '/blocks/redirects/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
EditRedirect.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRedirect.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
EditRedirect.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRedirect.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
EditRedirect.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRedirect.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
const EditRedirectForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRedirect.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
EditRedirectForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRedirect.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\RedirectResource\Pages\EditRedirect::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/RedirectResource/Pages/EditRedirect.php:7
* @route '/blocks/redirects/{record}/edit'
*/
EditRedirectForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRedirect.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRedirect.form = EditRedirectForm

export default EditRedirect