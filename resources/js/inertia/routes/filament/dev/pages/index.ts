import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/dev',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
export const menuItemsManager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: menuItemsManager.url(options),
    method: 'get',
})

menuItemsManager.definition = {
    methods: ["get","head"],
    url: '/nds/dev/menu-items-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
menuItemsManager.url = (options?: RouteQueryOptions) => {
    return menuItemsManager.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
menuItemsManager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: menuItemsManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
menuItemsManager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: menuItemsManager.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
const menuItemsManagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: menuItemsManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
menuItemsManagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: menuItemsManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
menuItemsManagerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: menuItemsManager.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

menuItemsManager.form = menuItemsManagerForm

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
export const siteSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: siteSettings.url(options),
    method: 'get',
})

siteSettings.definition = {
    methods: ["get","head"],
    url: '/nds/dev/site-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
siteSettings.url = (options?: RouteQueryOptions) => {
    return siteSettings.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
siteSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: siteSettings.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
siteSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: siteSettings.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
const siteSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: siteSettings.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
siteSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: siteSettings.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/nds/dev/site-settings'
*/
siteSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: siteSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

siteSettings.form = siteSettingsForm

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
export const pluginManager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pluginManager.url(options),
    method: 'get',
})

pluginManager.definition = {
    methods: ["get","head"],
    url: '/nds/dev/plugin-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
pluginManager.url = (options?: RouteQueryOptions) => {
    return pluginManager.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
pluginManager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pluginManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
pluginManager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pluginManager.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
const pluginManagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pluginManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
pluginManagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pluginManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/nds/dev/plugin-manager'
*/
pluginManagerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pluginManager.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pluginManager.form = pluginManagerForm

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
export const pluginLicenses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pluginLicenses.url(options),
    method: 'get',
})

pluginLicenses.definition = {
    methods: ["get","head"],
    url: '/nds/dev/plugin-licenses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
pluginLicenses.url = (options?: RouteQueryOptions) => {
    return pluginLicenses.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
pluginLicenses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pluginLicenses.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
pluginLicenses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pluginLicenses.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
const pluginLicensesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pluginLicenses.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
pluginLicensesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pluginLicenses.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/nds/dev/plugin-licenses'
*/
pluginLicensesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pluginLicenses.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pluginLicenses.form = pluginLicensesForm

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
export const themeManager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: themeManager.url(options),
    method: 'get',
})

themeManager.definition = {
    methods: ["get","head"],
    url: '/nds/dev/theme-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
themeManager.url = (options?: RouteQueryOptions) => {
    return themeManager.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
themeManager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: themeManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
themeManager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: themeManager.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
const themeManagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: themeManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
themeManagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: themeManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/nds/dev/theme-manager'
*/
themeManagerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: themeManager.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

themeManager.form = themeManagerForm

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
export const generalSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettingsPage.url(options),
    method: 'get',
})

generalSettingsPage.definition = {
    methods: ["get","head"],
    url: '/nds/dev/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPage.url = (options?: RouteQueryOptions) => {
    return generalSettingsPage.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generalSettingsPage.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
const generalSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

generalSettingsPage.form = generalSettingsPageForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    menuItemsManager: Object.assign(menuItemsManager, menuItemsManager),
    siteSettings: Object.assign(siteSettings, siteSettings),
    pluginManager: Object.assign(pluginManager, pluginManager),
    pluginLicenses: Object.assign(pluginLicenses, pluginLicenses),
    themeManager: Object.assign(themeManager, themeManager),
    generalSettingsPage: Object.assign(generalSettingsPage, generalSettingsPage),
}

export default pages