import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
const PageNotFoundPageed7eccc0b796a62e281e95983c809007 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageNotFoundPageed7eccc0b796a62e281e95983c809007.url(args, options),
    method: 'get',
})

PageNotFoundPageed7eccc0b796a62e281e95983c809007.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/404',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPageed7eccc0b796a62e281e95983c809007.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return PageNotFoundPageed7eccc0b796a62e281e95983c809007.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPageed7eccc0b796a62e281e95983c809007.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageNotFoundPageed7eccc0b796a62e281e95983c809007.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPageed7eccc0b796a62e281e95983c809007.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PageNotFoundPageed7eccc0b796a62e281e95983c809007.url(args, options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
const PageNotFoundPageed7eccc0b796a62e281e95983c809007Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPageed7eccc0b796a62e281e95983c809007.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPageed7eccc0b796a62e281e95983c809007Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPageed7eccc0b796a62e281e95983c809007.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPageed7eccc0b796a62e281e95983c809007Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPageed7eccc0b796a62e281e95983c809007.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PageNotFoundPageed7eccc0b796a62e281e95983c809007.form = PageNotFoundPageed7eccc0b796a62e281e95983c809007Form
/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
const PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.url(options),
    method: 'get',
})

PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.definition = {
    methods: ["get","head"],
    url: '/nds/super/404',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.url = (options?: RouteQueryOptions) => {
    return PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.definition.url + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.url(options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
const PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f.form = PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6fForm

const PageNotFoundPage = {
    '/nds/app/team/{tenant}/404': PageNotFoundPageed7eccc0b796a62e281e95983c809007,
    '/nds/super/404': PageNotFoundPagef8e6daeec6dd74f0f95daf92770e7b6f,
}

export default PageNotFoundPage