import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
const EditPage = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPage.url(args, options),
    method: 'get',
})

EditPage.definition = {
    methods: ["get","head"],
    url: '/blocks/pages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
EditPage.url = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return EditPage.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
EditPage.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPage.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
EditPage.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPage.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
const EditPageForm = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPage.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
EditPageForm.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPage.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
EditPageForm.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditPage.form = EditPageForm

export default EditPage