import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\CreateTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/CreateTagType.php:7
* @route '/blocks/tag-types/create'
*/
const CreateTagType = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTagType.url(options),
    method: 'get',
})

CreateTagType.definition = {
    methods: ["get","head"],
    url: '/blocks/tag-types/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\CreateTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/CreateTagType.php:7
* @route '/blocks/tag-types/create'
*/
CreateTagType.url = (options?: RouteQueryOptions) => {
    return CreateTagType.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\CreateTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/CreateTagType.php:7
* @route '/blocks/tag-types/create'
*/
CreateTagType.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTagType.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\CreateTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/CreateTagType.php:7
* @route '/blocks/tag-types/create'
*/
CreateTagType.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTagType.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\CreateTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/CreateTagType.php:7
* @route '/blocks/tag-types/create'
*/
const CreateTagTypeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTagType.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\CreateTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/CreateTagType.php:7
* @route '/blocks/tag-types/create'
*/
CreateTagTypeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTagType.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\CreateTagType::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/CreateTagType.php:7
* @route '/blocks/tag-types/create'
*/
CreateTagTypeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTagType.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTagType.form = CreateTagTypeForm

export default CreateTagType