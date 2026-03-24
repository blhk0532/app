import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
const UserNotesSettings = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserNotesSettings.url(args, options),
    method: 'get',
})

UserNotesSettings.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/user-notes-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
UserNotesSettings.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return UserNotesSettings.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
UserNotesSettings.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserNotesSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
UserNotesSettings.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UserNotesSettings.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
const UserNotesSettingsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserNotesSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
UserNotesSettingsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserNotesSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
UserNotesSettingsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserNotesSettings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

UserNotesSettings.form = UserNotesSettingsForm

export default UserNotesSettings