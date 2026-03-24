import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
export const dashboard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
dashboard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return dashboard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
dashboard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
dashboard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
const dashboardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
dashboardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Dashboard::__invoke
* @see app/Filament/App/Pages/Dashboard.php:7
* @route '/nds/app/team/{tenant}'
*/
dashboardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
export const chats = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chats.url(args, options),
    method: 'get',
})

chats.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
chats.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return chats.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
chats.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chats.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
chats.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chats.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
const chatsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
chatsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppChatDashboard::__invoke
* @see app/Filament/App/Pages/AppChatDashboard.php:7
* @route '/nds/app/team/{tenant}/chats'
*/
chatsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

chats.form = chatsForm

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
export const ringListor = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ringListor.url(args, options),
    method: 'get',
})

ringListor.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ring-listor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
ringListor.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ringListor.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
ringListor.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ringListor.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
ringListor.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ringListor.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
const ringListorForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ringListor.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
ringListorForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ringListor.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppRingLista::__invoke
* @see app/Filament/App/Pages/AppRingLista.php:7
* @route '/nds/app/team/{tenant}/ring-listor'
*/
ringListorForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ringListor.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ringListor.form = ringListorForm

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
export const arbetslista = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: arbetslista.url(args, options),
    method: 'get',
})

arbetslista.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/arbetslista',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
arbetslista.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return arbetslista.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
arbetslista.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: arbetslista.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
arbetslista.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: arbetslista.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
const arbetslistaForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: arbetslista.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
arbetslistaForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: arbetslista.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ArbetslistaDashboard::__invoke
* @see app/Filament/App/Pages/ArbetslistaDashboard.php:7
* @route '/nds/app/team/{tenant}/arbetslista'
*/
arbetslistaForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: arbetslista.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

arbetslista.form = arbetslistaForm

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
export const googleCalendar = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: googleCalendar.url(args, options),
    method: 'get',
})

googleCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/google-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
googleCalendar.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return googleCalendar.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
googleCalendar.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: googleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
googleCalendar.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: googleCalendar.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
const googleCalendarForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
googleCalendarForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
googleCalendarForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCalendar.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

googleCalendar.form = googleCalendarForm

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
export const bokningKalender = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bokningKalender.url(args, options),
    method: 'get',
})

bokningKalender.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/bokning-kalender',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
bokningKalender.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return bokningKalender.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
bokningKalender.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bokningKalender.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
bokningKalender.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bokningKalender.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
const bokningKalenderForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bokningKalender.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
bokningKalenderForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bokningKalender.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
bokningKalenderForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bokningKalender.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bokningKalender.form = bokningKalenderForm

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
export const manuSettings = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manuSettings.url(args, options),
    method: 'get',
})

manuSettings.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/manu-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
manuSettings.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return manuSettings.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
manuSettings.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manuSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
manuSettings.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manuSettings.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
const manuSettingsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manuSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
manuSettingsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manuSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\ManuSettings::__invoke
* @see app/Filament/App/Pages/ManuSettings.php:7
* @route '/nds/app/team/{tenant}/manu-settings'
*/
manuSettingsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manuSettings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manuSettings.form = manuSettingsForm

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
export const sendTestMessage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendTestMessage.url(args, options),
    method: 'get',
})

sendTestMessage.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/send-test-message',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
sendTestMessage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return sendTestMessage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
sendTestMessage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendTestMessage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
sendTestMessage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sendTestMessage.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
const sendTestMessageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendTestMessage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
sendTestMessageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendTestMessage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
sendTestMessageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendTestMessage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sendTestMessage.form = sendTestMessageForm

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
export const settings = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
settings.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return settings.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
settings.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
settings.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
const settingsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
settingsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Settings::__invoke
* @see app/Filament/App/Pages/Settings.php:7
* @route '/nds/app/team/{tenant}/settings'
*/
settingsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

settings.form = settingsForm

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
export const taskBoard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: taskBoard.url(args, options),
    method: 'get',
})

taskBoard.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/task-board',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
taskBoard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return taskBoard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
taskBoard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: taskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
taskBoard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: taskBoard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
const taskBoardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: taskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
taskBoardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: taskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
taskBoardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: taskBoard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

taskBoard.form = taskBoardForm

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
export const teamInvitationAccept = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teamInvitationAccept.url(args, options),
    method: 'get',
})

teamInvitationAccept.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/team-invitation-accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
teamInvitationAccept.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return teamInvitationAccept.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
teamInvitationAccept.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
teamInvitationAccept.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teamInvitationAccept.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
const teamInvitationAcceptForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
teamInvitationAcceptForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
teamInvitationAcceptForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teamInvitationAccept.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

teamInvitationAccept.form = teamInvitationAcceptForm

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
export const userNotesSettings = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userNotesSettings.url(args, options),
    method: 'get',
})

userNotesSettings.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/user-notes-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
userNotesSettings.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return userNotesSettings.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
userNotesSettings.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userNotesSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
userNotesSettings.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userNotesSettings.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
const userNotesSettingsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userNotesSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
userNotesSettingsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userNotesSettings.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\UserNotesSettings::__invoke
* @see app/Filament/App/Pages/UserNotesSettings.php:7
* @route '/nds/app/team/{tenant}/user-notes-settings'
*/
userNotesSettingsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userNotesSettings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userNotesSettings.form = userNotesSettingsForm

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
export const appDashboard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appDashboard.url(args, options),
    method: 'get',
})

appDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/app-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
appDashboard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return appDashboard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
appDashboard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
appDashboard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: appDashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
const appDashboardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
appDashboardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appDashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDashboard::__invoke
* @see app/Filament/App/Pages/AppDashboard.php:7
* @route '/nds/app/team/{tenant}/app-dashboard'
*/
appDashboardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appDashboard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

appDashboard.form = appDashboardForm

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
export const singleCalendar = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: singleCalendar.url(args, options),
    method: 'get',
})

singleCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/single-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
singleCalendar.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return singleCalendar.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
singleCalendar.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: singleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
singleCalendar.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: singleCalendar.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
const singleCalendarForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
singleCalendarForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
singleCalendarForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singleCalendar.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

singleCalendar.form = singleCalendarForm

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
export const multiCalendars3 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: multiCalendars3.url(args, options),
    method: 'get',
})

multiCalendars3.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/multi-calendars-3',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
multiCalendars3.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return multiCalendars3.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
multiCalendars3.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: multiCalendars3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
multiCalendars3.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: multiCalendars3.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
const multiCalendars3Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: multiCalendars3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
multiCalendars3Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: multiCalendars3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
multiCalendars3Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: multiCalendars3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

multiCalendars3.form = multiCalendars3Form

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
export const queue = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: queue.url(args, options),
    method: 'get',
})

queue.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
queue.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return queue.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
queue.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: queue.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
queue.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: queue.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
const queueForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
queueForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
queueForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

queue.form = queueForm

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
export const dataHistory = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dataHistory.url(args, options),
    method: 'get',
})

dataHistory.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/data-history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
dataHistory.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return dataHistory.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
dataHistory.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dataHistory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
dataHistory.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dataHistory.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
const dataHistoryForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dataHistory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
dataHistoryForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dataHistory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\AppDataHistory::__invoke
* @see app/Filament/App/Pages/AppDataHistory.php:7
* @route '/nds/app/team/{tenant}/data-history'
*/
dataHistoryForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dataHistory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dataHistory.form = dataHistoryForm

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
export const flowForgePage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: flowForgePage.url(args, options),
    method: 'get',
})

flowForgePage.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/flow-forge-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
flowForgePage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return flowForgePage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
flowForgePage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: flowForgePage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
flowForgePage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: flowForgePage.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
const flowForgePageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: flowForgePage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
flowForgePageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: flowForgePage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\FlowForge\FlowForgePage::__invoke
* @see app/Filament/Pages/FlowForge/FlowForgePage.php:7
* @route '/nds/app/team/{tenant}/flow-forge-page'
*/
flowForgePageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: flowForgePage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

flowForgePage.form = flowForgePageForm

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
export const method404 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method404.url(args, options),
    method: 'get',
})

method404.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/404',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
method404.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return method404.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
method404.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method404.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
method404.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: method404.url(args, options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
const method404Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method404.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
method404Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method404.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
method404Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method404.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

method404.form = method404Form

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
export const method403 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method403.url(args, options),
    method: 'get',
})

method403.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/403',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
method403.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return method403.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
method403.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method403.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
method403.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: method403.url(args, options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
const method403Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method403.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
method403Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method403.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
method403Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method403.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

method403.form = method403Form

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
export const myProfile = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(args, options),
    method: 'get',
})

myProfile.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/my-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
myProfile.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return myProfile.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
myProfile.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
myProfile.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myProfile.url(args, options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
const myProfileForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
myProfileForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
myProfileForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

myProfile.form = myProfileForm

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
export const wirechat = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wirechat.url(args, options),
    method: 'get',
})

wirechat.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/wirechat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
wirechat.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return wirechat.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
wirechat.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wirechat.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
wirechat.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: wirechat.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
const wirechatForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
wirechatForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
wirechatForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

wirechat.form = wirechatForm

/**
* @see routes/web.php:141
* @route '/filament/app/chat-dashboard'
*/
export const chatDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chatDashboard.url(options),
    method: 'get',
})

chatDashboard.definition = {
    methods: ["get","head"],
    url: '/filament/app/chat-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:141
* @route '/filament/app/chat-dashboard'
*/
chatDashboard.url = (options?: RouteQueryOptions) => {
    return chatDashboard.definition.url + queryParams(options)
}

/**
* @see routes/web.php:141
* @route '/filament/app/chat-dashboard'
*/
chatDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chatDashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:141
* @route '/filament/app/chat-dashboard'
*/
chatDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chatDashboard.url(options),
    method: 'head',
})

/**
* @see routes/web.php:141
* @route '/filament/app/chat-dashboard'
*/
const chatDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:141
* @route '/filament/app/chat-dashboard'
*/
chatDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:141
* @route '/filament/app/chat-dashboard'
*/
chatDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

chatDashboard.form = chatDashboardForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    chats: Object.assign(chats, chats),
    ringListor: Object.assign(ringListor, ringListor),
    arbetslista: Object.assign(arbetslista, arbetslista),
    googleCalendar: Object.assign(googleCalendar, googleCalendar),
    bokningKalender: Object.assign(bokningKalender, bokningKalender),
    manuSettings: Object.assign(manuSettings, manuSettings),
    sendTestMessage: Object.assign(sendTestMessage, sendTestMessage),
    settings: Object.assign(settings, settings),
    taskBoard: Object.assign(taskBoard, taskBoard),
    teamInvitationAccept: Object.assign(teamInvitationAccept, teamInvitationAccept),
    userNotesSettings: Object.assign(userNotesSettings, userNotesSettings),
    appDashboard: Object.assign(appDashboard, appDashboard),
    singleCalendar: Object.assign(singleCalendar, singleCalendar),
    multiCalendars3: Object.assign(multiCalendars3, multiCalendars3),
    queue: Object.assign(queue, queue),
    dataHistory: Object.assign(dataHistory, dataHistory),
    flowForgePage: Object.assign(flowForgePage, flowForgePage),
    404: Object.assign(method404, method404),
    403: Object.assign(method403, method403),
    myProfile: Object.assign(myProfile, myProfile),
    wirechat: Object.assign(wirechat, wirechat),
    chatDashboard: Object.assign(chatDashboard, chatDashboard),
}

export default pages