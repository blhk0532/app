import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/create'
*/
const CreateTallcmsMenu = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTallcmsMenu.url(options),
    method: 'get',
})

CreateTallcmsMenu.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-menus/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/create'
*/
CreateTallcmsMenu.url = (options?: RouteQueryOptions) => {
    return CreateTallcmsMenu.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/create'
*/
CreateTallcmsMenu.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTallcmsMenu.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/create'
*/
CreateTallcmsMenu.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTallcmsMenu.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/create'
*/
const CreateTallcmsMenuForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMenu.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/create'
*/
CreateTallcmsMenuForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMenu.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/create'
*/
CreateTallcmsMenuForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMenu.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTallcmsMenu.form = CreateTallcmsMenuForm

export default CreateTallcmsMenu