import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\ListTagTypes::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/ListTagTypes.php:7
* @route '/blocks/tag-types'
*/
const ListTagTypes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTagTypes.url(options),
    method: 'get',
})

ListTagTypes.definition = {
    methods: ["get","head"],
    url: '/blocks/tag-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\ListTagTypes::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/ListTagTypes.php:7
* @route '/blocks/tag-types'
*/
ListTagTypes.url = (options?: RouteQueryOptions) => {
    return ListTagTypes.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\ListTagTypes::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/ListTagTypes.php:7
* @route '/blocks/tag-types'
*/
ListTagTypes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTagTypes.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\ListTagTypes::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/ListTagTypes.php:7
* @route '/blocks/tag-types'
*/
ListTagTypes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTagTypes.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\ListTagTypes::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/ListTagTypes.php:7
* @route '/blocks/tag-types'
*/
const ListTagTypesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTagTypes.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\ListTagTypes::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/ListTagTypes.php:7
* @route '/blocks/tag-types'
*/
ListTagTypesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTagTypes.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\TagTypeResource\Pages\ListTagTypes::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/TagTypeResource/Pages/ListTagTypes.php:7
* @route '/blocks/tag-types'
*/
ListTagTypesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTagTypes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTagTypes.form = ListTagTypesForm

export default ListTagTypes