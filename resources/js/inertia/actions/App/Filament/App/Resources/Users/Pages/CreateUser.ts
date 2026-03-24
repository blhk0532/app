import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
const CreateUser = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser.url(args, options),
    method: 'get',
})

CreateUser.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUser.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateUser.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUser.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUser.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
const CreateUserForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUserForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUserForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser.form = CreateUserForm

export default CreateUser