import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/{tenant}/users/create'
*/
const CreateUser985a33e34527bb663494694de5b46170 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser985a33e34527bb663494694de5b46170.url(args, options),
    method: 'get',
})

CreateUser985a33e34527bb663494694de5b46170.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/{tenant}/users/create'
*/
CreateUser985a33e34527bb663494694de5b46170.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return CreateUser985a33e34527bb663494694de5b46170.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/{tenant}/users/create'
*/
CreateUser985a33e34527bb663494694de5b46170.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser985a33e34527bb663494694de5b46170.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/{tenant}/users/create'
*/
CreateUser985a33e34527bb663494694de5b46170.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser985a33e34527bb663494694de5b46170.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/{tenant}/users/create'
*/
const CreateUser985a33e34527bb663494694de5b46170Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser985a33e34527bb663494694de5b46170.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/{tenant}/users/create'
*/
CreateUser985a33e34527bb663494694de5b46170Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser985a33e34527bb663494694de5b46170.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/{tenant}/users/create'
*/
CreateUser985a33e34527bb663494694de5b46170Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser985a33e34527bb663494694de5b46170.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser985a33e34527bb663494694de5b46170.form = CreateUser985a33e34527bb663494694de5b46170Form
/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
const CreateUser7a4044a8bd2b99077d9852507876b355 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

CreateUser7a4044a8bd2b99077d9852507876b355.definition = {
    methods: ["get","head"],
    url: '/nds/super/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.url = (options?: RouteQueryOptions) => {
    return CreateUser7a4044a8bd2b99077d9852507876b355.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
const CreateUser7a4044a8bd2b99077d9852507876b355Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser7a4044a8bd2b99077d9852507876b355.form = CreateUser7a4044a8bd2b99077d9852507876b355Form

const CreateUser = {
    '/admin/{tenant}/users/create': CreateUser985a33e34527bb663494694de5b46170,
    '/nds/super/users/create': CreateUser7a4044a8bd2b99077d9852507876b355,
}

export default CreateUser