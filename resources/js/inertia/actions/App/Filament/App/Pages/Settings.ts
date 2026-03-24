import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
const Settings = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Settings.url(args, options),
    method: 'get',
})

Settings.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
Settings.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return Settings.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
Settings.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
Settings.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Settings.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
const SettingsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
SettingsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
SettingsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Settings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Settings.form = SettingsForm

export default Settings