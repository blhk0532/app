import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/{tenant}/team-invitations'
*/
const ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.url(args, options),
    method: 'get',
})

ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/team-invitations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/{tenant}/team-invitations'
*/
ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/{tenant}/team-invitations'
*/
ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/{tenant}/team-invitations'
*/
ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/{tenant}/team-invitations'
*/
const ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/{tenant}/team-invitations'
*/
ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/{tenant}/team-invitations'
*/
ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001.form = ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001Form
/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
const ManageTeamInvitations011364a502edf6236977c6a55de0f08b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'get',
})

ManageTeamInvitations011364a502edf6236977c6a55de0f08b.definition = {
    methods: ["get","head"],
    url: '/nds/super/team-invitations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url = (options?: RouteQueryOptions) => {
    return ManageTeamInvitations011364a502edf6236977c6a55de0f08b.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
const ManageTeamInvitations011364a502edf6236977c6a55de0f08bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamInvitations011364a502edf6236977c6a55de0f08b.form = ManageTeamInvitations011364a502edf6236977c6a55de0f08bForm

const ManageTeamInvitations = {
    '/admin/{tenant}/team-invitations': ManageTeamInvitationsab8745bc2a0d3acc99dec74abcf3a001,
    '/nds/super/team-invitations': ManageTeamInvitations011364a502edf6236977c6a55de0f08b,
}

export default ManageTeamInvitations