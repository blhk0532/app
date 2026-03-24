import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/{tenant}/admins'
*/
const ListAdminsf87dcc002fe221bfc2a31961cd8c3489 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdminsf87dcc002fe221bfc2a31961cd8c3489.url(args, options),
    method: 'get',
})

ListAdminsf87dcc002fe221bfc2a31961cd8c3489.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/{tenant}/admins'
*/
ListAdminsf87dcc002fe221bfc2a31961cd8c3489.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListAdminsf87dcc002fe221bfc2a31961cd8c3489.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/{tenant}/admins'
*/
ListAdminsf87dcc002fe221bfc2a31961cd8c3489.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdminsf87dcc002fe221bfc2a31961cd8c3489.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/{tenant}/admins'
*/
ListAdminsf87dcc002fe221bfc2a31961cd8c3489.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdminsf87dcc002fe221bfc2a31961cd8c3489.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/{tenant}/admins'
*/
const ListAdminsf87dcc002fe221bfc2a31961cd8c3489Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdminsf87dcc002fe221bfc2a31961cd8c3489.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/{tenant}/admins'
*/
ListAdminsf87dcc002fe221bfc2a31961cd8c3489Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdminsf87dcc002fe221bfc2a31961cd8c3489.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/{tenant}/admins'
*/
ListAdminsf87dcc002fe221bfc2a31961cd8c3489Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdminsf87dcc002fe221bfc2a31961cd8c3489.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAdminsf87dcc002fe221bfc2a31961cd8c3489.form = ListAdminsf87dcc002fe221bfc2a31961cd8c3489Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
const ListAdmins5357cae38e08fe81d984649f532c1237 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

ListAdmins5357cae38e08fe81d984649f532c1237.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.url = (options?: RouteQueryOptions) => {
    return ListAdmins5357cae38e08fe81d984649f532c1237.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
const ListAdmins5357cae38e08fe81d984649f532c1237Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAdmins5357cae38e08fe81d984649f532c1237.form = ListAdmins5357cae38e08fe81d984649f532c1237Form

const ListAdmins = {
    '/admin/{tenant}/admins': ListAdminsf87dcc002fe221bfc2a31961cd8c3489,
    '/nds/super/admins': ListAdmins5357cae38e08fe81d984649f532c1237,
}

export default ListAdmins