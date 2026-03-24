import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\ListTags::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/ListTags.php:7
* @route '/blocks/tags'
*/
const ListTags = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTags.url(options),
    method: 'get',
})

ListTags.definition = {
    methods: ["get","head"],
    url: '/blocks/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\ListTags::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/ListTags.php:7
* @route '/blocks/tags'
*/
ListTags.url = (options?: RouteQueryOptions) => {
    return ListTags.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\ListTags::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/ListTags.php:7
* @route '/blocks/tags'
*/
ListTags.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTags.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\ListTags::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/ListTags.php:7
* @route '/blocks/tags'
*/
ListTags.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTags.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\ListTags::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/ListTags.php:7
* @route '/blocks/tags'
*/
const ListTagsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTags.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\ListTags::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/ListTags.php:7
* @route '/blocks/tags'
*/
ListTagsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTags.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagResource\Pages\ListTags::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagResource/Pages/ListTags.php:7
* @route '/blocks/tags'
*/
ListTagsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTags.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTags.form = ListTagsForm

export default ListTags