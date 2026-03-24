import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/nds/dev/tallcms-menus'
*/
const ListTallcmsMenus = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsMenus.url(options),
    method: 'get',
})

ListTallcmsMenus.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-menus',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/nds/dev/tallcms-menus'
*/
ListTallcmsMenus.url = (options?: RouteQueryOptions) => {
    return ListTallcmsMenus.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/nds/dev/tallcms-menus'
*/
ListTallcmsMenus.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsMenus.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/nds/dev/tallcms-menus'
*/
ListTallcmsMenus.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTallcmsMenus.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/nds/dev/tallcms-menus'
*/
const ListTallcmsMenusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMenus.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/nds/dev/tallcms-menus'
*/
ListTallcmsMenusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMenus.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/nds/dev/tallcms-menus'
*/
ListTallcmsMenusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMenus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTallcmsMenus.form = ListTallcmsMenusForm

export default ListTallcmsMenus