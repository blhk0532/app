import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
const TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.url(args, options),
    method: 'get',
})

TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/team-invitation-accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
const TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0adForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0adForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0adForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad.form = TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0adForm
/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
const TeamInvitationAccepte7d994bfd2b40381a647da575947fd89 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'get',
})

TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/team-invitation-accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
const TeamInvitationAccepte7d994bfd2b40381a647da575947fd89Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.form = TeamInvitationAccepte7d994bfd2b40381a647da575947fd89Form

const TeamInvitationAccept = {
    '/admin/{tenant}/team-invitation-accept': TeamInvitationAcceptba9cb06e37e6f9294052b3f50858f0ad,
    '/nds/app/team/{tenant}/team-invitation-accept': TeamInvitationAccepte7d994bfd2b40381a647da575947fd89,
}

export default TeamInvitationAccept