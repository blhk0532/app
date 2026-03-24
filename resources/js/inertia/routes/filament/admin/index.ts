import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import auth from './auth'
import pages from './pages'
import resources from './resources'
import tenant69401c from './tenant'
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
export const home = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(args, options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
home.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return home.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
home.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
home.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
const homeForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
homeForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
homeForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
export const tenant = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tenant.url(options),
    method: 'get',
})

tenant.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
tenant.url = (options?: RouteQueryOptions) => {
    return tenant.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
tenant.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tenant.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
tenant.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tenant.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
const tenantForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tenant.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
tenantForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tenant.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
tenantForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tenant.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tenant.form = tenantForm

const admin = {
    auth: Object.assign(auth, auth),
    home: Object.assign(home, home),
    pages: Object.assign(pages, pages),
    resources: Object.assign(resources, resources),
    tenant: Object.assign(tenant, tenant69401c),
}

export default admin