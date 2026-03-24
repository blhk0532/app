import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
const SiteSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SiteSettings.url(options),
    method: 'get',
})

SiteSettings.definition = {
    methods: ["get","head"],
    url: '/nds/dev/site-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
SiteSettings.url = (options?: RouteQueryOptions) => {
    return SiteSettings.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
SiteSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SiteSettings.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
SiteSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SiteSettings.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
const SiteSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteSettings.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
SiteSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteSettings.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
SiteSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SiteSettings.form = SiteSettingsForm

export default SiteSettings