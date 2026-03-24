import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
const PluginLicenses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginLicenses.url(options),
    method: 'get',
})

PluginLicenses.definition = {
    methods: ["get","head"],
    url: '/nds/dev/plugin-licenses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
PluginLicenses.url = (options?: RouteQueryOptions) => {
    return PluginLicenses.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
PluginLicenses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginLicenses.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
PluginLicenses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PluginLicenses.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
const PluginLicensesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginLicenses.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
PluginLicensesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginLicenses.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
PluginLicensesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginLicenses.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PluginLicenses.form = PluginLicensesForm

export default PluginLicenses