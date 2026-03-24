import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/nds/dev/media-collection/media-collections'
*/
const ListMediaCollections = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMediaCollections.url(options),
    method: 'get',
})

ListMediaCollections.definition = {
    methods: ["get","head"],
    url: '/nds/dev/media-collection/media-collections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/nds/dev/media-collection/media-collections'
*/
ListMediaCollections.url = (options?: RouteQueryOptions) => {
    return ListMediaCollections.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/nds/dev/media-collection/media-collections'
*/
ListMediaCollections.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMediaCollections.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/nds/dev/media-collection/media-collections'
*/
ListMediaCollections.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMediaCollections.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/nds/dev/media-collection/media-collections'
*/
const ListMediaCollectionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMediaCollections.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/nds/dev/media-collection/media-collections'
*/
ListMediaCollectionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMediaCollections.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/nds/dev/media-collection/media-collections'
*/
ListMediaCollectionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMediaCollections.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListMediaCollections.form = ListMediaCollectionsForm

export default ListMediaCollections