import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/{tenant}/teams/create'
*/
const CreateTeamcf0711eedc3adf0a8592b117578c0cd2 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamcf0711eedc3adf0a8592b117578c0cd2.url(args, options),
    method: 'get',
})

CreateTeamcf0711eedc3adf0a8592b117578c0cd2.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/{tenant}/teams/create'
*/
CreateTeamcf0711eedc3adf0a8592b117578c0cd2.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateTeamcf0711eedc3adf0a8592b117578c0cd2.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/{tenant}/teams/create'
*/
CreateTeamcf0711eedc3adf0a8592b117578c0cd2.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamcf0711eedc3adf0a8592b117578c0cd2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/{tenant}/teams/create'
*/
CreateTeamcf0711eedc3adf0a8592b117578c0cd2.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeamcf0711eedc3adf0a8592b117578c0cd2.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/{tenant}/teams/create'
*/
const CreateTeamcf0711eedc3adf0a8592b117578c0cd2Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamcf0711eedc3adf0a8592b117578c0cd2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/{tenant}/teams/create'
*/
CreateTeamcf0711eedc3adf0a8592b117578c0cd2Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamcf0711eedc3adf0a8592b117578c0cd2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/{tenant}/teams/create'
*/
CreateTeamcf0711eedc3adf0a8592b117578c0cd2Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamcf0711eedc3adf0a8592b117578c0cd2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeamcf0711eedc3adf0a8592b117578c0cd2.form = CreateTeamcf0711eedc3adf0a8592b117578c0cd2Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
const CreateTeam438b874aed1800c0be75ebcb9601be12 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

CreateTeam438b874aed1800c0be75ebcb9601be12.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.url = (options?: RouteQueryOptions) => {
    return CreateTeam438b874aed1800c0be75ebcb9601be12.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
const CreateTeam438b874aed1800c0be75ebcb9601be12Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeam438b874aed1800c0be75ebcb9601be12.form = CreateTeam438b874aed1800c0be75ebcb9601be12Form

const CreateTeam = {
    '/admin/{tenant}/teams/create': CreateTeamcf0711eedc3adf0a8592b117578c0cd2,
    '/nds/super/teams/create': CreateTeam438b874aed1800c0be75ebcb9601be12,
}

export default CreateTeam