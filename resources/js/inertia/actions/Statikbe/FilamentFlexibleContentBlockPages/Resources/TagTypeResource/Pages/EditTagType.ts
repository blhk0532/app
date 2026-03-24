import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\EditTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/EditTagType.php:7
* @route '/blocks/tag-types/{record}/edit'
*/
const EditTagType = (args: { record: string | number | { code: string | number } } | [record: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTagType.url(args, options),
    method: 'get',
})

EditTagType.definition = {
    methods: ["get","head"],
    url: '/blocks/tag-types/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\EditTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/EditTagType.php:7
* @route '/blocks/tag-types/{record}/edit'
*/
EditTagType.url = (args: { record: string | number | { code: string | number } } | [record: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'code' in args) {
        args = { record: args.code }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: typeof args.record === 'object'
        ? args.record.code
        : args.record,
    }

    return EditTagType.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\EditTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/EditTagType.php:7
* @route '/blocks/tag-types/{record}/edit'
*/
EditTagType.get = (args: { record: string | number | { code: string | number } } | [record: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTagType.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\EditTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/EditTagType.php:7
* @route '/blocks/tag-types/{record}/edit'
*/
EditTagType.head = (args: { record: string | number | { code: string | number } } | [record: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTagType.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\EditTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/EditTagType.php:7
* @route '/blocks/tag-types/{record}/edit'
*/
const EditTagTypeForm = (args: { record: string | number | { code: string | number } } | [record: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTagType.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\EditTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/EditTagType.php:7
* @route '/blocks/tag-types/{record}/edit'
*/
EditTagTypeForm.get = (args: { record: string | number | { code: string | number } } | [record: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTagType.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\EditTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/EditTagType.php:7
* @route '/blocks/tag-types/{record}/edit'
*/
EditTagTypeForm.head = (args: { record: string | number | { code: string | number } } | [record: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTagType.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTagType.form = EditTagTypeForm

export default EditTagType