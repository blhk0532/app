import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/{tenant}/users'
*/
const ListUsers33749af2d9dc8e680d1b1d927b2b7a89 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers33749af2d9dc8e680d1b1d927b2b7a89.url(args, options),
    method: 'get',
})

ListUsers33749af2d9dc8e680d1b1d927b2b7a89.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/{tenant}/users'
*/
ListUsers33749af2d9dc8e680d1b1d927b2b7a89.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListUsers33749af2d9dc8e680d1b1d927b2b7a89.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/{tenant}/users'
*/
ListUsers33749af2d9dc8e680d1b1d927b2b7a89.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers33749af2d9dc8e680d1b1d927b2b7a89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/{tenant}/users'
*/
ListUsers33749af2d9dc8e680d1b1d927b2b7a89.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers33749af2d9dc8e680d1b1d927b2b7a89.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/{tenant}/users'
*/
const ListUsers33749af2d9dc8e680d1b1d927b2b7a89Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers33749af2d9dc8e680d1b1d927b2b7a89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/{tenant}/users'
*/
ListUsers33749af2d9dc8e680d1b1d927b2b7a89Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers33749af2d9dc8e680d1b1d927b2b7a89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/{tenant}/users'
*/
ListUsers33749af2d9dc8e680d1b1d927b2b7a89Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers33749af2d9dc8e680d1b1d927b2b7a89.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers33749af2d9dc8e680d1b1d927b2b7a89.form = ListUsers33749af2d9dc8e680d1b1d927b2b7a89Form
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
const ListUsers3967b78d234b6c596ee24968d3182b6f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'get',
})

ListUsers3967b78d234b6c596ee24968d3182b6f.definition = {
    methods: ["get","head"],
    url: '/nds/super/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6f.url = (options?: RouteQueryOptions) => {
    return ListUsers3967b78d234b6c596ee24968d3182b6f.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
const ListUsers3967b78d234b6c596ee24968d3182b6fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers3967b78d234b6c596ee24968d3182b6f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers3967b78d234b6c596ee24968d3182b6f.form = ListUsers3967b78d234b6c596ee24968d3182b6fForm

const ListUsers = {
    '/admin/{tenant}/users': ListUsers33749af2d9dc8e680d1b1d927b2b7a89,
    '/nds/super/users': ListUsers3967b78d234b6c596ee24968d3182b6f,
}

export default ListUsers