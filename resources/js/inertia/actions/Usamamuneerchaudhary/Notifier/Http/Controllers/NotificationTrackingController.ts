import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackOpen
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:24
* @route '/notifier/track/open/{token}'
*/
export const trackOpen = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trackOpen.url(args, options),
    method: 'get',
})

trackOpen.definition = {
    methods: ["get","head"],
    url: '/notifier/track/open/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackOpen
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:24
* @route '/notifier/track/open/{token}'
*/
trackOpen.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return trackOpen.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackOpen
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:24
* @route '/notifier/track/open/{token}'
*/
trackOpen.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trackOpen.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackOpen
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:24
* @route '/notifier/track/open/{token}'
*/
trackOpen.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trackOpen.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackOpen
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:24
* @route '/notifier/track/open/{token}'
*/
const trackOpenForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trackOpen.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackOpen
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:24
* @route '/notifier/track/open/{token}'
*/
trackOpenForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trackOpen.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackOpen
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:24
* @route '/notifier/track/open/{token}'
*/
trackOpenForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trackOpen.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trackOpen.form = trackOpenForm

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackClick
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:51
* @route '/notifier/track/click/{token}'
*/
export const trackClick = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trackClick.url(args, options),
    method: 'get',
})

trackClick.definition = {
    methods: ["get","head"],
    url: '/notifier/track/click/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackClick
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:51
* @route '/notifier/track/click/{token}'
*/
trackClick.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return trackClick.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackClick
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:51
* @route '/notifier/track/click/{token}'
*/
trackClick.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trackClick.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackClick
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:51
* @route '/notifier/track/click/{token}'
*/
trackClick.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trackClick.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackClick
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:51
* @route '/notifier/track/click/{token}'
*/
const trackClickForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trackClick.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackClick
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:51
* @route '/notifier/track/click/{token}'
*/
trackClickForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trackClick.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationTrackingController::trackClick
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationTrackingController.php:51
* @route '/notifier/track/click/{token}'
*/
trackClickForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trackClick.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trackClick.form = trackClickForm

const NotificationTrackingController = { trackOpen, trackClick }

export default NotificationTrackingController