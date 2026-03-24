import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
const PluginManager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginManager.url(options),
    method: 'get',
})

PluginManager.definition = {
    methods: ["get","head"],
    url: '/nds/dev/plugin-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
PluginManager.url = (options?: RouteQueryOptions) => {
    return PluginManager.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
PluginManager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
PluginManager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PluginManager.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
const PluginManagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
PluginManagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
PluginManagerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginManager.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PluginManager.form = PluginManagerForm

export default PluginManager