import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\CalendarBookingController::publicIndex
* @see app/Http/Controllers/Api/CalendarBookingController.php:29
* @route '/api/calendar/bookings/public'
*/
export const publicIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex.url(options),
    method: 'get',
})

publicIndex.definition = {
    methods: ["get","head"],
    url: '/api/calendar/bookings/public',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::publicIndex
* @see app/Http/Controllers/Api/CalendarBookingController.php:29
* @route '/api/calendar/bookings/public'
*/
publicIndex.url = (options?: RouteQueryOptions) => {
    return publicIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::publicIndex
* @see app/Http/Controllers/Api/CalendarBookingController.php:29
* @route '/api/calendar/bookings/public'
*/
publicIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::publicIndex
* @see app/Http/Controllers/Api/CalendarBookingController.php:29
* @route '/api/calendar/bookings/public'
*/
publicIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::publicIndex
* @see app/Http/Controllers/Api/CalendarBookingController.php:29
* @route '/api/calendar/bookings/public'
*/
const publicIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::publicIndex
* @see app/Http/Controllers/Api/CalendarBookingController.php:29
* @route '/api/calendar/bookings/public'
*/
publicIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::publicIndex
* @see app/Http/Controllers/Api/CalendarBookingController.php:29
* @route '/api/calendar/bookings/public'
*/
publicIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicIndex.form = publicIndexForm

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::index
* @see app/Http/Controllers/Api/CalendarBookingController.php:24
* @route '/api/calendar/bookings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/calendar/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::index
* @see app/Http/Controllers/Api/CalendarBookingController.php:24
* @route '/api/calendar/bookings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::index
* @see app/Http/Controllers/Api/CalendarBookingController.php:24
* @route '/api/calendar/bookings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::index
* @see app/Http/Controllers/Api/CalendarBookingController.php:24
* @route '/api/calendar/bookings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::index
* @see app/Http/Controllers/Api/CalendarBookingController.php:24
* @route '/api/calendar/bookings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::index
* @see app/Http/Controllers/Api/CalendarBookingController.php:24
* @route '/api/calendar/bookings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::index
* @see app/Http/Controllers/Api/CalendarBookingController.php:24
* @route '/api/calendar/bookings'
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
* @see \App\Http\Controllers\Api\CalendarBookingController::store
* @see app/Http/Controllers/Api/CalendarBookingController.php:34
* @route '/api/calendar/bookings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/calendar/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::store
* @see app/Http/Controllers/Api/CalendarBookingController.php:34
* @route '/api/calendar/bookings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::store
* @see app/Http/Controllers/Api/CalendarBookingController.php:34
* @route '/api/calendar/bookings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::store
* @see app/Http/Controllers/Api/CalendarBookingController.php:34
* @route '/api/calendar/bookings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::store
* @see app/Http/Controllers/Api/CalendarBookingController.php:34
* @route '/api/calendar/bookings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::update
* @see app/Http/Controllers/Api/CalendarBookingController.php:74
* @route '/api/calendar/bookings/{booking}'
*/
export const update = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/calendar/bookings/{booking}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::update
* @see app/Http/Controllers/Api/CalendarBookingController.php:74
* @route '/api/calendar/bookings/{booking}'
*/
update.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { booking: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.id
        : args.booking,
    }

    return update.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::update
* @see app/Http/Controllers/Api/CalendarBookingController.php:74
* @route '/api/calendar/bookings/{booking}'
*/
update.put = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::update
* @see app/Http/Controllers/Api/CalendarBookingController.php:74
* @route '/api/calendar/bookings/{booking}'
*/
const updateForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::update
* @see app/Http/Controllers/Api/CalendarBookingController.php:74
* @route '/api/calendar/bookings/{booking}'
*/
updateForm.put = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::destroy
* @see app/Http/Controllers/Api/CalendarBookingController.php:119
* @route '/api/calendar/bookings/{booking}'
*/
export const destroy = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/calendar/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::destroy
* @see app/Http/Controllers/Api/CalendarBookingController.php:119
* @route '/api/calendar/bookings/{booking}'
*/
destroy.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { booking: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.id
        : args.booking,
    }

    return destroy.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::destroy
* @see app/Http/Controllers/Api/CalendarBookingController.php:119
* @route '/api/calendar/bookings/{booking}'
*/
destroy.delete = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::destroy
* @see app/Http/Controllers/Api/CalendarBookingController.php:119
* @route '/api/calendar/bookings/{booking}'
*/
const destroyForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::destroy
* @see app/Http/Controllers/Api/CalendarBookingController.php:119
* @route '/api/calendar/bookings/{booking}'
*/
destroyForm.delete = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::move
* @see app/Http/Controllers/Api/CalendarBookingController.php:145
* @route '/api/calendar/bookings/{booking}/move'
*/
export const move = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: move.url(args, options),
    method: 'patch',
})

move.definition = {
    methods: ["patch"],
    url: '/api/calendar/bookings/{booking}/move',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::move
* @see app/Http/Controllers/Api/CalendarBookingController.php:145
* @route '/api/calendar/bookings/{booking}/move'
*/
move.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { booking: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.id
        : args.booking,
    }

    return move.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::move
* @see app/Http/Controllers/Api/CalendarBookingController.php:145
* @route '/api/calendar/bookings/{booking}/move'
*/
move.patch = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: move.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::move
* @see app/Http/Controllers/Api/CalendarBookingController.php:145
* @route '/api/calendar/bookings/{booking}/move'
*/
const moveForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: move.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::move
* @see app/Http/Controllers/Api/CalendarBookingController.php:145
* @route '/api/calendar/bookings/{booking}/move'
*/
moveForm.patch = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: move.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

move.form = moveForm

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::resize
* @see app/Http/Controllers/Api/CalendarBookingController.php:199
* @route '/api/calendar/bookings/{booking}/resize'
*/
export const resize = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: resize.url(args, options),
    method: 'patch',
})

resize.definition = {
    methods: ["patch"],
    url: '/api/calendar/bookings/{booking}/resize',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::resize
* @see app/Http/Controllers/Api/CalendarBookingController.php:199
* @route '/api/calendar/bookings/{booking}/resize'
*/
resize.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { booking: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.id
        : args.booking,
    }

    return resize.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::resize
* @see app/Http/Controllers/Api/CalendarBookingController.php:199
* @route '/api/calendar/bookings/{booking}/resize'
*/
resize.patch = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: resize.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::resize
* @see app/Http/Controllers/Api/CalendarBookingController.php:199
* @route '/api/calendar/bookings/{booking}/resize'
*/
const resizeForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resize.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CalendarBookingController::resize
* @see app/Http/Controllers/Api/CalendarBookingController.php:199
* @route '/api/calendar/bookings/{booking}/resize'
*/
resizeForm.patch = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resize.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

resize.form = resizeForm

const CalendarBookingController = { publicIndex, index, store, update, destroy, move, resize }

export default CalendarBookingController