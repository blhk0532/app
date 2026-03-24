import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/create'
*/
const CreateTallcmsMedia = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTallcmsMedia.url(options),
    method: 'get',
})

CreateTallcmsMedia.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-media/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/create'
*/
CreateTallcmsMedia.url = (options?: RouteQueryOptions) => {
    return CreateTallcmsMedia.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/create'
*/
CreateTallcmsMedia.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTallcmsMedia.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/create'
*/
CreateTallcmsMedia.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTallcmsMedia.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/create'
*/
const CreateTallcmsMediaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMedia.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/create'
*/
CreateTallcmsMediaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMedia.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/create'
*/
CreateTallcmsMediaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMedia.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTallcmsMedia.form = CreateTallcmsMediaForm

export default CreateTallcmsMedia