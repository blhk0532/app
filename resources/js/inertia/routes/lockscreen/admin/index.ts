import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
export const lockSession = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession.url(options),
    method: 'post',
})

lockSession.definition = {
    methods: ["post"],
    url: '/admin/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSession.url = (options?: RouteQueryOptions) => {
    return lockSession.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSession.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
const lockSessionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSessionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession.url(options),
    method: 'post',
})

lockSession.form = lockSessionForm

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
export const page = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/admin/screen/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
page.url = (options?: RouteQueryOptions) => {
    return page.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
page.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
page.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(options),
    method: 'head',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
const pageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
pageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
pageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

page.form = pageForm

const admin = {
    lockSession: Object.assign(lockSession, lockSession),
    page: Object.assign(page, page),
}

export default admin