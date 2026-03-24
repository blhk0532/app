import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import chats8dcd54 from './chats'
import fullWidthChat from './full-width-chat'
/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
export const controlPanel = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: controlPanel.url(args, options),
    method: 'get',
})

controlPanel.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/control-panel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
controlPanel.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return controlPanel.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
controlPanel.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: controlPanel.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
controlPanel.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: controlPanel.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
const controlPanelForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: controlPanel.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
controlPanelForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: controlPanel.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
controlPanelForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: controlPanel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

controlPanel.form = controlPanelForm

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/{tenant}/dashboard'
*/
export const dashboard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/{tenant}/dashboard'
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
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/{tenant}/dashboard'
*/
dashboard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/{tenant}/dashboard'
*/
dashboard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/{tenant}/dashboard'
*/
const dashboardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/{tenant}/dashboard'
*/
dashboardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/{tenant}/dashboard'
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
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
export const personalAccessTokens = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: personalAccessTokens.url(args, options),
    method: 'get',
})

personalAccessTokens.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/personal-access-tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
personalAccessTokens.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return personalAccessTokens.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
personalAccessTokens.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: personalAccessTokens.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
personalAccessTokens.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: personalAccessTokens.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
const personalAccessTokensForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: personalAccessTokens.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
personalAccessTokensForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: personalAccessTokens.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\PersonalAccessTokens::__invoke
* @see app/Filament/Admin/Pages/PersonalAccessTokens.php:7
* @route '/admin/{tenant}/personal-access-tokens'
*/
personalAccessTokensForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: personalAccessTokens.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

personalAccessTokens.form = personalAccessTokensForm

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
export const profile = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
profile.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return profile.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
profile.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
profile.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
const profileForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
profileForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Profile::__invoke
* @see app/Filament/Admin/Pages/Profile.php:7
* @route '/admin/{tenant}/profile'
*/
profileForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

profile.form = profileForm

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/{tenant}/send-whatsapp'
*/
export const sendWhatsapp = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendWhatsapp.url(args, options),
    method: 'get',
})

sendWhatsapp.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/send-whatsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/{tenant}/send-whatsapp'
*/
sendWhatsapp.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return sendWhatsapp.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/{tenant}/send-whatsapp'
*/
sendWhatsapp.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendWhatsapp.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/{tenant}/send-whatsapp'
*/
sendWhatsapp.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sendWhatsapp.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/{tenant}/send-whatsapp'
*/
const sendWhatsappForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/{tenant}/send-whatsapp'
*/
sendWhatsappForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/{tenant}/send-whatsapp'
*/
sendWhatsappForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sendWhatsapp.form = sendWhatsappForm

/**
* @see \App\Filament\Admin\Pages\TaskBoard::__invoke
* @see app/Filament/Admin/Pages/TaskBoard.php:7
* @route '/admin/{tenant}/task-board'
*/
export const taskBoard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: taskBoard.url(args, options),
    method: 'get',
})

taskBoard.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/task-board',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\TaskBoard::__invoke
* @see app/Filament/Admin/Pages/TaskBoard.php:7
* @route '/admin/{tenant}/task-board'
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
* @see \App\Filament\Admin\Pages\TaskBoard::__invoke
* @see app/Filament/Admin/Pages/TaskBoard.php:7
* @route '/admin/{tenant}/task-board'
*/
taskBoard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: taskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\TaskBoard::__invoke
* @see app/Filament/Admin/Pages/TaskBoard.php:7
* @route '/admin/{tenant}/task-board'
*/
taskBoard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: taskBoard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\TaskBoard::__invoke
* @see app/Filament/Admin/Pages/TaskBoard.php:7
* @route '/admin/{tenant}/task-board'
*/
const taskBoardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: taskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\TaskBoard::__invoke
* @see app/Filament/Admin/Pages/TaskBoard.php:7
* @route '/admin/{tenant}/task-board'
*/
taskBoardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: taskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\TaskBoard::__invoke
* @see app/Filament/Admin/Pages/TaskBoard.php:7
* @route '/admin/{tenant}/task-board'
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
* @route '/admin/{tenant}/team-invitation-accept'
*/
export const teamInvitationAccept = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teamInvitationAccept.url(args, options),
    method: 'get',
})

teamInvitationAccept.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/team-invitation-accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
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
* @route '/admin/{tenant}/team-invitation-accept'
*/
teamInvitationAccept.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
teamInvitationAccept.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teamInvitationAccept.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
const teamInvitationAcceptForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
*/
teamInvitationAcceptForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/{tenant}/team-invitation-accept'
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
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
export const fileManager = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileManager.url(args, options),
    method: 'get',
})

fileManager.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/file-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
fileManager.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return fileManager.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
fileManager.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileManager.url(args, options),
    method: 'get',
})

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
fileManager.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fileManager.url(args, options),
    method: 'head',
})

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
const fileManagerForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManager.url(args, options),
    method: 'get',
})

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
fileManagerForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManager.url(args, options),
    method: 'get',
})

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
fileManagerForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManager.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fileManager.form = fileManagerForm

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/admin/{tenant}/my-profile'
*/
export const myProfile = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(args, options),
    method: 'get',
})

myProfile.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/my-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/admin/{tenant}/my-profile'
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
* @route '/admin/{tenant}/my-profile'
*/
myProfile.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/admin/{tenant}/my-profile'
*/
myProfile.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myProfile.url(args, options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/admin/{tenant}/my-profile'
*/
const myProfileForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/admin/{tenant}/my-profile'
*/
myProfileForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/admin/{tenant}/my-profile'
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
* @route '/admin/{tenant}/wirechat'
*/
export const wirechat = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wirechat.url(args, options),
    method: 'get',
})

wirechat.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/wirechat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
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
* @route '/admin/{tenant}/wirechat'
*/
wirechat.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wirechat.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
wirechat.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: wirechat.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
const wirechatForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
wirechatForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
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
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/{tenant}/chats'
*/
export const chats = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chats.url(args, options),
    method: 'get',
})

chats.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/{tenant}/chats'
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
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/{tenant}/chats'
*/
chats.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chats.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/{tenant}/chats'
*/
chats.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chats.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/{tenant}/chats'
*/
const chatsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/{tenant}/chats'
*/
chatsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/{tenant}/chats'
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
* @see routes/web.php:148
* @route '/filament/admin/chat-dashboard'
*/
export const chatDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chatDashboard.url(options),
    method: 'get',
})

chatDashboard.definition = {
    methods: ["get","head"],
    url: '/filament/admin/chat-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:148
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.url = (options?: RouteQueryOptions) => {
    return chatDashboard.definition.url + queryParams(options)
}

/**
* @see routes/web.php:148
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chatDashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:148
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chatDashboard.url(options),
    method: 'head',
})

/**
* @see routes/web.php:148
* @route '/filament/admin/chat-dashboard'
*/
const chatDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:148
* @route '/filament/admin/chat-dashboard'
*/
chatDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:148
* @route '/filament/admin/chat-dashboard'
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
    controlPanel: Object.assign(controlPanel, controlPanel),
    dashboard: Object.assign(dashboard, dashboard),
    personalAccessTokens: Object.assign(personalAccessTokens, personalAccessTokens),
    profile: Object.assign(profile, profile),
    sendWhatsapp: Object.assign(sendWhatsapp, sendWhatsapp),
    taskBoard: Object.assign(taskBoard, taskBoard),
    teamInvitationAccept: Object.assign(teamInvitationAccept, teamInvitationAccept),
    fileManager: Object.assign(fileManager, fileManager),
    myProfile: Object.assign(myProfile, myProfile),
    wirechat: Object.assign(wirechat, wirechat),
    chats: Object.assign(chats, chats8dcd54),
    fullWidthChat: Object.assign(fullWidthChat, fullWidthChat),
    chatDashboard: Object.assign(chatDashboard, chatDashboard),
}

export default pages