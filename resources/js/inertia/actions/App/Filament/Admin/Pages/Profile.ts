import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
const Profile = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Profile.url(args, options),
    method: 'get',
})

Profile.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
Profile.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return Profile.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
Profile.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Profile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
Profile.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Profile.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
const ProfileForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Profile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
ProfileForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Profile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
ProfileForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Profile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Profile.form = ProfileForm

export default Profile