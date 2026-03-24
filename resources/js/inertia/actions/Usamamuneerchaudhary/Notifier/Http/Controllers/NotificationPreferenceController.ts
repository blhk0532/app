import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::index
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:24
* @route '/api/notifier/preferences'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/notifier/preferences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::index
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:24
* @route '/api/notifier/preferences'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::index
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:24
* @route '/api/notifier/preferences'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::index
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:24
* @route '/api/notifier/preferences'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::index
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:24
* @route '/api/notifier/preferences'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::index
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:24
* @route '/api/notifier/preferences'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::index
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:24
* @route '/api/notifier/preferences'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::available
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:52
* @route '/api/notifier/preferences/available'
*/
export const available = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: available.url(options),
    method: 'get',
})

available.definition = {
    methods: ["get","head"],
    url: '/api/notifier/preferences/available',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::available
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:52
* @route '/api/notifier/preferences/available'
*/
available.url = (options?: RouteQueryOptions) => {
    return available.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::available
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:52
* @route '/api/notifier/preferences/available'
*/
available.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: available.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::available
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:52
* @route '/api/notifier/preferences/available'
*/
available.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: available.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::available
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:52
* @route '/api/notifier/preferences/available'
*/
const availableForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: available.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::available
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:52
* @route '/api/notifier/preferences/available'
*/
availableForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: available.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::available
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:52
* @route '/api/notifier/preferences/available'
*/
availableForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: available.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

available.form = availableForm

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::show
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:89
* @route '/api/notifier/preferences/{eventKey}'
*/
export const show = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/notifier/preferences/{eventKey}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::show
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:89
* @route '/api/notifier/preferences/{eventKey}'
*/
show.url = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { eventKey: args }
    }

    if (Array.isArray(args)) {
        args = {
            eventKey: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        eventKey: args.eventKey,
    }

    return show.definition.url
            .replace('{eventKey}', parsedArgs.eventKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::show
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:89
* @route '/api/notifier/preferences/{eventKey}'
*/
show.get = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::show
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:89
* @route '/api/notifier/preferences/{eventKey}'
*/
show.head = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::show
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:89
* @route '/api/notifier/preferences/{eventKey}'
*/
const showForm = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::show
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:89
* @route '/api/notifier/preferences/{eventKey}'
*/
showForm.get = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::show
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:89
* @route '/api/notifier/preferences/{eventKey}'
*/
showForm.head = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::update
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:117
* @route '/api/notifier/preferences/{eventKey}'
*/
export const update = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/notifier/preferences/{eventKey}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::update
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:117
* @route '/api/notifier/preferences/{eventKey}'
*/
update.url = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { eventKey: args }
    }

    if (Array.isArray(args)) {
        args = {
            eventKey: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        eventKey: args.eventKey,
    }

    return update.definition.url
            .replace('{eventKey}', parsedArgs.eventKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::update
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:117
* @route '/api/notifier/preferences/{eventKey}'
*/
update.put = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::update
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:117
* @route '/api/notifier/preferences/{eventKey}'
*/
const updateForm = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Http\Controllers\NotificationPreferenceController::update
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Http/Controllers/NotificationPreferenceController.php:117
* @route '/api/notifier/preferences/{eventKey}'
*/
updateForm.put = (args: { eventKey: string | number } | [eventKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const NotificationPreferenceController = { index, available, show, update }

export default NotificationPreferenceController