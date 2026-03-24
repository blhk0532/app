import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
export const lockSession = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession.url(options),
    method: 'post',
})

lockSession.definition = {
    methods: ["post"],
    url: '/nds/super/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSession.url = (options?: RouteQueryOptions) => {
    return lockSession.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSession.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
const lockSessionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSessionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession.url(options),
    method: 'post',
})

lockSession.form = lockSessionForm

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
export const page = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/nds/super/screen/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
page.url = (options?: RouteQueryOptions) => {
    return page.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
page.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
page.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(options),
    method: 'head',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
const pageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
pageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see plugins/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
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

const superMethod = {
    lockSession: Object.assign(lockSession, lockSession),
    page: Object.assign(page, page),
}

export default superMethod