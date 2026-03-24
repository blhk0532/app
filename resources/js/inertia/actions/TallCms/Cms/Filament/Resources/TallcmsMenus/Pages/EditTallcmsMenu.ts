import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/{record}/edit'
*/
const EditTallcmsMenu = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTallcmsMenu.url(args, options),
    method: 'get',
})

EditTallcmsMenu.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-menus/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/{record}/edit'
*/
EditTallcmsMenu.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditTallcmsMenu.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/{record}/edit'
*/
EditTallcmsMenu.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/{record}/edit'
*/
EditTallcmsMenu.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTallcmsMenu.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/{record}/edit'
*/
const EditTallcmsMenuForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/{record}/edit'
*/
EditTallcmsMenuForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/nds/dev/tallcms-menus/{record}/edit'
*/
EditTallcmsMenuForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMenu.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTallcmsMenu.form = EditTallcmsMenuForm

export default EditTallcmsMenu