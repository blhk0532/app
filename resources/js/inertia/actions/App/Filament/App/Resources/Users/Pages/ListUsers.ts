import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
const ListUsers = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers.url(args, options),
    method: 'get',
})

ListUsers.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsers.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListUsers.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsers.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsers.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
const ListUsersForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsersForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsersForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers.form = ListUsersForm

export default ListUsers