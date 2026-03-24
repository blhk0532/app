import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
const RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.url(args, options),
    method: 'get',
})

RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
const RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/{tenant}'
*/
RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4.form = RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4Form
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
const RedirectToHomeController8c64bc6fca39405dd2e574c532b93366 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'get',
})

RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.definition = {
    methods: ["get","head"],
    url: '/nds/chat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url = (options?: RouteQueryOptions) => {
    return RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
const RedirectToHomeController8c64bc6fca39405dd2e574c532b93366Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.form = RedirectToHomeController8c64bc6fca39405dd2e574c532b93366Form
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/blocks'
*/
const RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.url(options),
    method: 'get',
})

RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.definition = {
    methods: ["get","head"],
    url: '/blocks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/blocks'
*/
RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.url = (options?: RouteQueryOptions) => {
    return RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/blocks'
*/
RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/blocks'
*/
RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/blocks'
*/
const RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/blocks'
*/
RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/blocks'
*/
RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11.form = RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11Form

const RedirectToHomeController = {
    '/admin/{tenant}': RedirectToHomeControllerb36f2705fbd31301159707b18268ffe4,
    '/nds/chat': RedirectToHomeController8c64bc6fca39405dd2e574c532b93366,
    '/blocks': RedirectToHomeController7e4a5a2e113644d1913c836b7531cb11,
}

export default RedirectToHomeController