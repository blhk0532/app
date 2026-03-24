import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
const ManuSettings = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManuSettings.url(args, options),
    method: 'get',
})

ManuSettings.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/manu-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
ManuSettings.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ManuSettings.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
ManuSettings.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManuSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
ManuSettings.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManuSettings.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
const ManuSettingsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManuSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
ManuSettingsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManuSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
ManuSettingsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManuSettings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManuSettings.form = ManuSettingsForm

export default ManuSettings