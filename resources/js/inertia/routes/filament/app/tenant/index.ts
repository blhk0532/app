import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
export const registration = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registration.url(options),
    method: 'get',
})

registration.definition = {
    methods: ["get","head"],
    url: '/nds/app/new',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
registration.url = (options?: RouteQueryOptions) => {
    return registration.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
registration.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registration.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
registration.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registration.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
const registrationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registration.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
registrationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registration.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
registrationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registration.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

registration.form = registrationForm

/**
* @see routes/web.php:169
* @route '/nds/app/team/{tenant}/profile'
*/
export const profile = (args: { tenant: string | number } | [tenant: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:169
* @route '/nds/app/team/{tenant}/profile'
*/
profile.url = (args: { tenant: string | number } | [tenant: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: args.tenant,
    }

    return profile.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see routes/web.php:169
* @route '/nds/app/team/{tenant}/profile'
*/
profile.get = (args: { tenant: string | number } | [tenant: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:169
* @route '/nds/app/team/{tenant}/profile'
*/
profile.head = (args: { tenant: string | number } | [tenant: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(args, options),
    method: 'head',
})

/**
* @see routes/web.php:169
* @route '/nds/app/team/{tenant}/profile'
*/
const profileForm = (args: { tenant: string | number } | [tenant: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:169
* @route '/nds/app/team/{tenant}/profile'
*/
profileForm.get = (args: { tenant: string | number } | [tenant: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:169
* @route '/nds/app/team/{tenant}/profile'
*/
profileForm.head = (args: { tenant: string | number } | [tenant: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

profile.form = profileForm
