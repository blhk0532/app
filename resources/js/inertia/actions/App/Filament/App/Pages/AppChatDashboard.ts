import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
const AppChatDashboard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AppChatDashboard.url(args, options),
    method: 'get',
})

AppChatDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
AppChatDashboard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return AppChatDashboard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
AppChatDashboard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AppChatDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
AppChatDashboard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AppChatDashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
const AppChatDashboardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppChatDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
AppChatDashboardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppChatDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
AppChatDashboardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AppChatDashboard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AppChatDashboard.form = AppChatDashboardForm

export default AppChatDashboard