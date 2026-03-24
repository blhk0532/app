import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
const MenuItemsManager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MenuItemsManager.url(options),
    method: 'get',
})

MenuItemsManager.definition = {
    methods: ["get","head"],
    url: '/nds/dev/menu-items-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
MenuItemsManager.url = (options?: RouteQueryOptions) => {
    return MenuItemsManager.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
MenuItemsManager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MenuItemsManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
MenuItemsManager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: MenuItemsManager.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
const MenuItemsManagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MenuItemsManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
MenuItemsManagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MenuItemsManager.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/nds/dev/menu-items-manager'
*/
MenuItemsManagerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MenuItemsManager.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

MenuItemsManager.form = MenuItemsManagerForm

export default MenuItemsManager