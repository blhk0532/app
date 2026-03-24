import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
const ThemeManager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ThemeManager.url(options),
    method: 'get',
})

ThemeManager.definition = {
    methods: ["get","head"],
    url: '/nds/dev/theme-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
ThemeManager.url = (options?: RouteQueryOptions) => {
    return ThemeManager.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
ThemeManager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ThemeManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
ThemeManager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ThemeManager.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
const ThemeManagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ThemeManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
ThemeManagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ThemeManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
ThemeManagerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ThemeManager.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ThemeManager.form = ThemeManagerForm

export default ThemeManager