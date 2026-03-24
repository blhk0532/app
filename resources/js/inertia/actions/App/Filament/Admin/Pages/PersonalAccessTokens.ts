import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
const PersonalAccessTokens = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PersonalAccessTokens.url(args, options),
    method: 'get',
})

PersonalAccessTokens.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/personal-access-tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
PersonalAccessTokens.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return PersonalAccessTokens.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
PersonalAccessTokens.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PersonalAccessTokens.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
PersonalAccessTokens.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PersonalAccessTokens.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
const PersonalAccessTokensForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PersonalAccessTokens.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
PersonalAccessTokensForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PersonalAccessTokens.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
PersonalAccessTokensForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PersonalAccessTokens.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PersonalAccessTokens.form = PersonalAccessTokensForm

export default PersonalAccessTokens