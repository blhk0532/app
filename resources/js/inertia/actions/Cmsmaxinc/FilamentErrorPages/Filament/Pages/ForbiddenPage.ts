import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
const ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.url(args, options),
    method: 'get',
})

ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/403',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.url(args, options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
const ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2eeForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2eeForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2eeForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee.form = ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2eeForm
/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
const ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.url(options),
    method: 'get',
})

ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.definition = {
    methods: ["get","head"],
    url: '/nds/super/403',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.url = (options?: RouteQueryOptions) => {
    return ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.definition.url + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.url(options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
const ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3aeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3aeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3aeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae.form = ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3aeForm

const ForbiddenPage = {
    '/nds/app/team/{tenant}/403': ForbiddenPage61d0ea9719f1e17327bf5246e6a0d2ee,
    '/nds/super/403': ForbiddenPagee12a6fd6e5ac93fc3da1e751c84ca3ae,
}

export default ForbiddenPage