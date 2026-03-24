import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\CreateUser::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/dev/users/create'
*/
const CreateUser = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser.url(options),
    method: 'get',
})

CreateUser.definition = {
    methods: ["get","head"],
    url: '/nds/dev/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\CreateUser::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/dev/users/create'
*/
CreateUser.url = (options?: RouteQueryOptions) => {
    return CreateUser.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\CreateUser::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/dev/users/create'
*/
CreateUser.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\CreateUser::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/dev/users/create'
*/
CreateUser.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\CreateUser::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/dev/users/create'
*/
const CreateUserForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\CreateUser::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/dev/users/create'
*/
CreateUserForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\Users\Pages\CreateUser::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/dev/users/create'
*/
CreateUserForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser.form = CreateUserForm

export default CreateUser