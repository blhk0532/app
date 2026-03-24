import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
const lockSession9101e8e937ff331ad6e5c840c310e3db = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession9101e8e937ff331ad6e5c840c310e3db.url(options),
    method: 'post',
})

lockSession9101e8e937ff331ad6e5c840c310e3db.definition = {
    methods: ["post"],
    url: '/admin/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSession9101e8e937ff331ad6e5c840c310e3db.url = (options?: RouteQueryOptions) => {
    return lockSession9101e8e937ff331ad6e5c840c310e3db.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSession9101e8e937ff331ad6e5c840c310e3db.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession9101e8e937ff331ad6e5c840c310e3db.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
const lockSession9101e8e937ff331ad6e5c840c310e3dbForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession9101e8e937ff331ad6e5c840c310e3db.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSession9101e8e937ff331ad6e5c840c310e3dbForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession9101e8e937ff331ad6e5c840c310e3db.url(options),
    method: 'post',
})

lockSession9101e8e937ff331ad6e5c840c310e3db.form = lockSession9101e8e937ff331ad6e5c840c310e3dbForm
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
const lockSessiondfba708ed98b7b3dc5b78db3439fb911 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSessiondfba708ed98b7b3dc5b78db3439fb911.url(options),
    method: 'post',
})

lockSessiondfba708ed98b7b3dc5b78db3439fb911.definition = {
    methods: ["post"],
    url: '/nds/super/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSessiondfba708ed98b7b3dc5b78db3439fb911.url = (options?: RouteQueryOptions) => {
    return lockSessiondfba708ed98b7b3dc5b78db3439fb911.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSessiondfba708ed98b7b3dc5b78db3439fb911.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSessiondfba708ed98b7b3dc5b78db3439fb911.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
const lockSessiondfba708ed98b7b3dc5b78db3439fb911Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSessiondfba708ed98b7b3dc5b78db3439fb911.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see plugins/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSessiondfba708ed98b7b3dc5b78db3439fb911Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSessiondfba708ed98b7b3dc5b78db3439fb911.url(options),
    method: 'post',
})

lockSessiondfba708ed98b7b3dc5b78db3439fb911.form = lockSessiondfba708ed98b7b3dc5b78db3439fb911Form

export const lockSession = {
    '/admin/lock-session': lockSession9101e8e937ff331ad6e5c840c310e3db,
    '/nds/super/lock-session': lockSessiondfba708ed98b7b3dc5b78db3439fb911,
}

const LockscreenSessionController = { lockSession }

export default LockscreenSessionController