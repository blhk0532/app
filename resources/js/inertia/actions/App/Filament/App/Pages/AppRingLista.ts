import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
const AppRingLista = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AppRingLista.url(args, options),
    method: 'get',
})

AppRingLista.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ring-listor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
AppRingLista.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return AppRingLista.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
AppRingLista.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AppRingLista.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
AppRingLista.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AppRingLista.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
const AppRingListaForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppRingLista.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
AppRingListaForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppRingLista.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
AppRingListaForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppRingLista.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AppRingLista.form = AppRingListaForm

export default AppRingLista