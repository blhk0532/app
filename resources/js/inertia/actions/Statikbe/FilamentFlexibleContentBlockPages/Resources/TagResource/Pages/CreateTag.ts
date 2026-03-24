import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\CreateTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/CreateTag.php:7
* @route '/blocks/tags/create'
*/
const CreateTag = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTag.url(options),
    method: 'get',
})

CreateTag.definition = {
    methods: ["get","head"],
    url: '/blocks/tags/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\CreateTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/CreateTag.php:7
* @route '/blocks/tags/create'
*/
CreateTag.url = (options?: RouteQueryOptions) => {
    return CreateTag.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\CreateTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/CreateTag.php:7
* @route '/blocks/tags/create'
*/
CreateTag.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTag.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\CreateTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/CreateTag.php:7
* @route '/blocks/tags/create'
*/
CreateTag.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTag.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\CreateTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/CreateTag.php:7
* @route '/blocks/tags/create'
*/
const CreateTagForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTag.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\CreateTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/CreateTag.php:7
* @route '/blocks/tags/create'
*/
CreateTagForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTag.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\CreateTag::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/CreateTag.php:7
* @route '/blocks/tags/create'
*/
CreateTagForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTag.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTag.form = CreateTagForm

export default CreateTag