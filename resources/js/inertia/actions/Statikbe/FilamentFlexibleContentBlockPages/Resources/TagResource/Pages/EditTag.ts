import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\EditTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/EditTag.php:7
* @route '/blocks/tags/{record}/edit'
*/
const EditTag = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTag.url(args, options),
    method: 'get',
})

EditTag.definition = {
    methods: ["get","head"],
    url: '/blocks/tags/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\EditTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/EditTag.php:7
* @route '/blocks/tags/{record}/edit'
*/
EditTag.url = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return EditTag.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\EditTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/EditTag.php:7
* @route '/blocks/tags/{record}/edit'
*/
EditTag.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTag.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\EditTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/EditTag.php:7
* @route '/blocks/tags/{record}/edit'
*/
EditTag.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTag.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\EditTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/EditTag.php:7
* @route '/blocks/tags/{record}/edit'
*/
const EditTagForm = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTag.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\EditTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/EditTag.php:7
* @route '/blocks/tags/{record}/edit'
*/
EditTagForm.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTag.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\EditTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/EditTag.php:7
* @route '/blocks/tags/{record}/edit'
*/
EditTagForm.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTag.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTag.form = EditTagForm

export default EditTag