import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/nds/dev/media-collection/media-collections/create'
*/
const CreateMediaCollection = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMediaCollection.url(options),
    method: 'get',
})

CreateMediaCollection.definition = {
    methods: ["get","head"],
    url: '/nds/dev/media-collection/media-collections/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/nds/dev/media-collection/media-collections/create'
*/
CreateMediaCollection.url = (options?: RouteQueryOptions) => {
    return CreateMediaCollection.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/nds/dev/media-collection/media-collections/create'
*/
CreateMediaCollection.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMediaCollection.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/nds/dev/media-collection/media-collections/create'
*/
CreateMediaCollection.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMediaCollection.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/nds/dev/media-collection/media-collections/create'
*/
const CreateMediaCollectionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMediaCollection.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/nds/dev/media-collection/media-collections/create'
*/
CreateMediaCollectionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMediaCollection.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/nds/dev/media-collection/media-collections/create'
*/
CreateMediaCollectionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMediaCollection.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateMediaCollection.form = CreateMediaCollectionForm

export default CreateMediaCollection