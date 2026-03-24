import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/{tenant}/teams'
*/
const ListTeams5e06162e49617f64e53108ddcf4182f9 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams5e06162e49617f64e53108ddcf4182f9.url(args, options),
    method: 'get',
})

ListTeams5e06162e49617f64e53108ddcf4182f9.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/{tenant}/teams'
*/
ListTeams5e06162e49617f64e53108ddcf4182f9.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListTeams5e06162e49617f64e53108ddcf4182f9.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/{tenant}/teams'
*/
ListTeams5e06162e49617f64e53108ddcf4182f9.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams5e06162e49617f64e53108ddcf4182f9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/{tenant}/teams'
*/
ListTeams5e06162e49617f64e53108ddcf4182f9.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeams5e06162e49617f64e53108ddcf4182f9.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/{tenant}/teams'
*/
const ListTeams5e06162e49617f64e53108ddcf4182f9Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams5e06162e49617f64e53108ddcf4182f9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/{tenant}/teams'
*/
ListTeams5e06162e49617f64e53108ddcf4182f9Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams5e06162e49617f64e53108ddcf4182f9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/{tenant}/teams'
*/
ListTeams5e06162e49617f64e53108ddcf4182f9Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams5e06162e49617f64e53108ddcf4182f9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTeams5e06162e49617f64e53108ddcf4182f9.form = ListTeams5e06162e49617f64e53108ddcf4182f9Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
const ListTeamsd656303a01fc2a64489cd0bac6021617 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

ListTeamsd656303a01fc2a64489cd0bac6021617.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.url = (options?: RouteQueryOptions) => {
    return ListTeamsd656303a01fc2a64489cd0bac6021617.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
const ListTeamsd656303a01fc2a64489cd0bac6021617Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTeamsd656303a01fc2a64489cd0bac6021617.form = ListTeamsd656303a01fc2a64489cd0bac6021617Form

const ListTeams = {
    '/admin/{tenant}/teams': ListTeams5e06162e49617f64e53108ddcf4182f9,
    '/nds/super/teams': ListTeamsd656303a01fc2a64489cd0bac6021617,
}

export default ListTeams