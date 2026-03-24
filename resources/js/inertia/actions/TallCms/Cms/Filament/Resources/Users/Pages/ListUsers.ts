import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\ListUsers::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/dev/users'
*/
const ListUsers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers.url(options),
    method: 'get',
})

ListUsers.definition = {
    methods: ["get","head"],
    url: '/nds/dev/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\ListUsers::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/dev/users'
*/
ListUsers.url = (options?: RouteQueryOptions) => {
    return ListUsers.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\ListUsers::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/dev/users'
*/
ListUsers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\ListUsers::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/dev/users'
*/
ListUsers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\ListUsers::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/dev/users'
*/
const ListUsersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\ListUsers::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/dev/users'
*/
ListUsersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\ListUsers::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/dev/users'
*/
ListUsersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers.form = ListUsersForm

export default ListUsers