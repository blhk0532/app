import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\ListTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/ListTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media'
*/
const ListTallcmsMedia = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsMedia.url(options),
    method: 'get',
})

ListTallcmsMedia.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\ListTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/ListTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media'
*/
ListTallcmsMedia.url = (options?: RouteQueryOptions) => {
    return ListTallcmsMedia.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\ListTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/ListTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media'
*/
ListTallcmsMedia.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsMedia.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\ListTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/ListTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media'
*/
ListTallcmsMedia.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTallcmsMedia.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\ListTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/ListTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media'
*/
const ListTallcmsMediaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMedia.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\ListTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/ListTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media'
*/
ListTallcmsMediaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMedia.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\ListTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/ListTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media'
*/
ListTallcmsMediaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMedia.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTallcmsMedia.form = ListTallcmsMediaForm

export default ListTallcmsMedia