import MenuItemsManager from './MenuItemsManager'
import SiteSettings from './SiteSettings'
import PluginManager from './PluginManager'
import PluginLicenses from './PluginLicenses'
import ThemeManager from './ThemeManager'

const Pages = {
    MenuItemsManager: Object.assign(MenuItemsManager, MenuItemsManager),
    SiteSettings: Object.assign(SiteSettings, SiteSettings),
    PluginManager: Object.assign(PluginManager, PluginManager),
    PluginLicenses: Object.assign(PluginLicenses, PluginLicenses),
    ThemeManager: Object.assign(ThemeManager, ThemeManager),
}

export default Pages