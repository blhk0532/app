import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:19
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:19
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:19
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:19
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:19
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:19
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:19
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:47
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:47
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:47
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:47
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:47
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see vendor/laravel/pulse/src/PulseServiceProvider.php:113
* @route '/pulse'
*/
export const pulse = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pulse.url(options),
    method: 'get',
})

pulse.definition = {
    methods: ["get","head"],
    url: '/pulse',
} satisfies RouteDefinition<["get","head"]>

/**
* @see vendor/laravel/pulse/src/PulseServiceProvider.php:113
* @route '/pulse'
*/
pulse.url = (options?: RouteQueryOptions) => {
    return pulse.definition.url + queryParams(options)
}

/**
* @see vendor/laravel/pulse/src/PulseServiceProvider.php:113
* @route '/pulse'
*/
pulse.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pulse.url(options),
    method: 'get',
})

/**
* @see vendor/laravel/pulse/src/PulseServiceProvider.php:113
* @route '/pulse'
*/
pulse.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pulse.url(options),
    method: 'head',
})

/**
* @see vendor/laravel/pulse/src/PulseServiceProvider.php:113
* @route '/pulse'
*/
const pulseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pulse.url(options),
    method: 'get',
})

/**
* @see vendor/laravel/pulse/src/PulseServiceProvider.php:113
* @route '/pulse'
*/
pulseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pulse.url(options),
    method: 'get',
})

/**
* @see vendor/laravel/pulse/src/PulseServiceProvider.php:113
* @route '/pulse'
*/
pulseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pulse.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pulse.form = pulseForm

/**
* @see plugins/pxlrbt/filament-excel/routes/web.php:8
* @route '/filament-excel/{path}'
*/
export const filamentExcelDownload = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: filamentExcelDownload.url(args, options),
    method: 'get',
})

filamentExcelDownload.definition = {
    methods: ["get","head"],
    url: '/filament-excel/{path}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see plugins/pxlrbt/filament-excel/routes/web.php:8
* @route '/filament-excel/{path}'
*/
filamentExcelDownload.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args }
    }

    if (Array.isArray(args)) {
        args = {
            path: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        path: args.path,
    }

    return filamentExcelDownload.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see plugins/pxlrbt/filament-excel/routes/web.php:8
* @route '/filament-excel/{path}'
*/
filamentExcelDownload.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: filamentExcelDownload.url(args, options),
    method: 'get',
})

/**
* @see plugins/pxlrbt/filament-excel/routes/web.php:8
* @route '/filament-excel/{path}'
*/
filamentExcelDownload.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: filamentExcelDownload.url(args, options),
    method: 'head',
})

/**
* @see plugins/pxlrbt/filament-excel/routes/web.php:8
* @route '/filament-excel/{path}'
*/
const filamentExcelDownloadForm = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: filamentExcelDownload.url(args, options),
    method: 'get',
})

/**
* @see plugins/pxlrbt/filament-excel/routes/web.php:8
* @route '/filament-excel/{path}'
*/
filamentExcelDownloadForm.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: filamentExcelDownload.url(args, options),
    method: 'get',
})

/**
* @see plugins/pxlrbt/filament-excel/routes/web.php:8
* @route '/filament-excel/{path}'
*/
filamentExcelDownloadForm.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: filamentExcelDownload.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

filamentExcelDownload.form = filamentExcelDownloadForm

/**
* @see routes/web.php:34
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:34
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/web.php:34
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:34
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/web.php:34
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:34
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:34
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see routes/web.php:43
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:43
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see routes/web.php:43
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:43
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see routes/web.php:43
* @route '/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:43
* @route '/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:43
* @route '/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see routes/web.php:44
* @route '/app'
*/
export const app = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: app.url(options),
    method: 'get',
})

app.definition = {
    methods: ["get","head"],
    url: '/app',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:44
* @route '/app'
*/
app.url = (options?: RouteQueryOptions) => {
    return app.definition.url + queryParams(options)
}

/**
* @see routes/web.php:44
* @route '/app'
*/
app.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: app.url(options),
    method: 'get',
})

/**
* @see routes/web.php:44
* @route '/app'
*/
app.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: app.url(options),
    method: 'head',
})

/**
* @see routes/web.php:44
* @route '/app'
*/
const appForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: app.url(options),
    method: 'get',
})

/**
* @see routes/web.php:44
* @route '/app'
*/
appForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: app.url(options),
    method: 'get',
})

/**
* @see routes/web.php:44
* @route '/app'
*/
appForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: app.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

app.form = appForm

/**
* @see routes/web.php:45
* @route '/bokningar'
*/
export const bokningar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bokningar.url(options),
    method: 'get',
})

bokningar.definition = {
    methods: ["get","head"],
    url: '/bokningar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:45
* @route '/bokningar'
*/
bokningar.url = (options?: RouteQueryOptions) => {
    return bokningar.definition.url + queryParams(options)
}

/**
* @see routes/web.php:45
* @route '/bokningar'
*/
bokningar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bokningar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:45
* @route '/bokningar'
*/
bokningar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bokningar.url(options),
    method: 'head',
})

/**
* @see routes/web.php:45
* @route '/bokningar'
*/
const bokningarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bokningar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:45
* @route '/bokningar'
*/
bokningarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bokningar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:45
* @route '/bokningar'
*/
bokningarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bokningar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bokningar.form = bokningarForm

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
export const queue = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: queue.url(options),
    method: 'get',
})

queue.definition = {
    methods: ["get","head"],
    url: '/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
queue.url = (options?: RouteQueryOptions) => {
    return queue.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
queue.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: queue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
queue.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: queue.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
const queueForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
queueForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
queueForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

queue.form = queueForm

/**
* @see routes/web.php:50
* @route '/calendar'
*/
export const calendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

calendar.definition = {
    methods: ["get","head"],
    url: '/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:50
* @route '/calendar'
*/
calendar.url = (options?: RouteQueryOptions) => {
    return calendar.definition.url + queryParams(options)
}

/**
* @see routes/web.php:50
* @route '/calendar'
*/
calendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:50
* @route '/calendar'
*/
calendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendar.url(options),
    method: 'head',
})

/**
* @see routes/web.php:50
* @route '/calendar'
*/
const calendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:50
* @route '/calendar'
*/
calendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:50
* @route '/calendar'
*/
calendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendar.form = calendarForm

/**
* @see routes/web.php:51
* @route '/calendars'
*/
export const calendars = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendars.url(options),
    method: 'get',
})

calendars.definition = {
    methods: ["get","head"],
    url: '/calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:51
* @route '/calendars'
*/
calendars.url = (options?: RouteQueryOptions) => {
    return calendars.definition.url + queryParams(options)
}

/**
* @see routes/web.php:51
* @route '/calendars'
*/
calendars.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendars.url(options),
    method: 'get',
})

/**
* @see routes/web.php:51
* @route '/calendars'
*/
calendars.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendars.url(options),
    method: 'head',
})

/**
* @see routes/web.php:51
* @route '/calendars'
*/
const calendarsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendars.url(options),
    method: 'get',
})

/**
* @see routes/web.php:51
* @route '/calendars'
*/
calendarsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendars.url(options),
    method: 'get',
})

/**
* @see routes/web.php:51
* @route '/calendars'
*/
calendarsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendars.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendars.form = calendarsForm

/**
* @see routes/web.php:52
* @route '/calendar-one'
*/
export const calendarOne = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarOne.url(options),
    method: 'get',
})

calendarOne.definition = {
    methods: ["get","head"],
    url: '/calendar-one',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:52
* @route '/calendar-one'
*/
calendarOne.url = (options?: RouteQueryOptions) => {
    return calendarOne.definition.url + queryParams(options)
}

/**
* @see routes/web.php:52
* @route '/calendar-one'
*/
calendarOne.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarOne.url(options),
    method: 'get',
})

/**
* @see routes/web.php:52
* @route '/calendar-one'
*/
calendarOne.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendarOne.url(options),
    method: 'head',
})

/**
* @see routes/web.php:52
* @route '/calendar-one'
*/
const calendarOneForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarOne.url(options),
    method: 'get',
})

/**
* @see routes/web.php:52
* @route '/calendar-one'
*/
calendarOneForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarOne.url(options),
    method: 'get',
})

/**
* @see routes/web.php:52
* @route '/calendar-one'
*/
calendarOneForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarOne.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendarOne.form = calendarOneForm

/**
* @see routes/web.php:53
* @route '/calendar-two'
*/
export const calendarTwo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarTwo.url(options),
    method: 'get',
})

calendarTwo.definition = {
    methods: ["get","head"],
    url: '/calendar-two',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:53
* @route '/calendar-two'
*/
calendarTwo.url = (options?: RouteQueryOptions) => {
    return calendarTwo.definition.url + queryParams(options)
}

/**
* @see routes/web.php:53
* @route '/calendar-two'
*/
calendarTwo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarTwo.url(options),
    method: 'get',
})

/**
* @see routes/web.php:53
* @route '/calendar-two'
*/
calendarTwo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendarTwo.url(options),
    method: 'head',
})

/**
* @see routes/web.php:53
* @route '/calendar-two'
*/
const calendarTwoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarTwo.url(options),
    method: 'get',
})

/**
* @see routes/web.php:53
* @route '/calendar-two'
*/
calendarTwoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarTwo.url(options),
    method: 'get',
})

/**
* @see routes/web.php:53
* @route '/calendar-two'
*/
calendarTwoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarTwo.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendarTwo.form = calendarTwoForm

/**
* @see routes/web.php:54
* @route '/calendar-multi'
*/
export const calendarMulti = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarMulti.url(options),
    method: 'get',
})

calendarMulti.definition = {
    methods: ["get","head"],
    url: '/calendar-multi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:54
* @route '/calendar-multi'
*/
calendarMulti.url = (options?: RouteQueryOptions) => {
    return calendarMulti.definition.url + queryParams(options)
}

/**
* @see routes/web.php:54
* @route '/calendar-multi'
*/
calendarMulti.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarMulti.url(options),
    method: 'get',
})

/**
* @see routes/web.php:54
* @route '/calendar-multi'
*/
calendarMulti.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendarMulti.url(options),
    method: 'head',
})

/**
* @see routes/web.php:54
* @route '/calendar-multi'
*/
const calendarMultiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarMulti.url(options),
    method: 'get',
})

/**
* @see routes/web.php:54
* @route '/calendar-multi'
*/
calendarMultiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarMulti.url(options),
    method: 'get',
})

/**
* @see routes/web.php:54
* @route '/calendar-multi'
*/
calendarMultiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarMulti.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendarMulti.form = calendarMultiForm

/**
* @see routes/web.php:55
* @route '/calendar-example'
*/
export const calendarExample = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarExample.url(options),
    method: 'get',
})

calendarExample.definition = {
    methods: ["get","head"],
    url: '/calendar-example',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:55
* @route '/calendar-example'
*/
calendarExample.url = (options?: RouteQueryOptions) => {
    return calendarExample.definition.url + queryParams(options)
}

/**
* @see routes/web.php:55
* @route '/calendar-example'
*/
calendarExample.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarExample.url(options),
    method: 'get',
})

/**
* @see routes/web.php:55
* @route '/calendar-example'
*/
calendarExample.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendarExample.url(options),
    method: 'head',
})

/**
* @see routes/web.php:55
* @route '/calendar-example'
*/
const calendarExampleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarExample.url(options),
    method: 'get',
})

/**
* @see routes/web.php:55
* @route '/calendar-example'
*/
calendarExampleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarExample.url(options),
    method: 'get',
})

/**
* @see routes/web.php:55
* @route '/calendar-example'
*/
calendarExampleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarExample.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendarExample.form = calendarExampleForm

/**
* @see routes/web.php:56
* @route '/big-calendar'
*/
export const bigCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bigCalendar.url(options),
    method: 'get',
})

bigCalendar.definition = {
    methods: ["get","head"],
    url: '/big-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:56
* @route '/big-calendar'
*/
bigCalendar.url = (options?: RouteQueryOptions) => {
    return bigCalendar.definition.url + queryParams(options)
}

/**
* @see routes/web.php:56
* @route '/big-calendar'
*/
bigCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bigCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:56
* @route '/big-calendar'
*/
bigCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bigCalendar.url(options),
    method: 'head',
})

/**
* @see routes/web.php:56
* @route '/big-calendar'
*/
const bigCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bigCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:56
* @route '/big-calendar'
*/
bigCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bigCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:56
* @route '/big-calendar'
*/
bigCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bigCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bigCalendar.form = bigCalendarForm

/**
* @see routes/web.php:57
* @route '/full-calendar'
*/
export const fullCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fullCalendar.url(options),
    method: 'get',
})

fullCalendar.definition = {
    methods: ["get","head"],
    url: '/full-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:57
* @route '/full-calendar'
*/
fullCalendar.url = (options?: RouteQueryOptions) => {
    return fullCalendar.definition.url + queryParams(options)
}

/**
* @see routes/web.php:57
* @route '/full-calendar'
*/
fullCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fullCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:57
* @route '/full-calendar'
*/
fullCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fullCalendar.url(options),
    method: 'head',
})

/**
* @see routes/web.php:57
* @route '/full-calendar'
*/
const fullCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fullCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:57
* @route '/full-calendar'
*/
fullCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fullCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:57
* @route '/full-calendar'
*/
fullCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fullCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fullCalendar.form = fullCalendarForm

/**
* @see routes/web.php:58
* @route '/shadcn-event-calendar'
*/
export const shadcnEventCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shadcnEventCalendar.url(options),
    method: 'get',
})

shadcnEventCalendar.definition = {
    methods: ["get","head"],
    url: '/shadcn-event-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:58
* @route '/shadcn-event-calendar'
*/
shadcnEventCalendar.url = (options?: RouteQueryOptions) => {
    return shadcnEventCalendar.definition.url + queryParams(options)
}

/**
* @see routes/web.php:58
* @route '/shadcn-event-calendar'
*/
shadcnEventCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shadcnEventCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:58
* @route '/shadcn-event-calendar'
*/
shadcnEventCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shadcnEventCalendar.url(options),
    method: 'head',
})

/**
* @see routes/web.php:58
* @route '/shadcn-event-calendar'
*/
const shadcnEventCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shadcnEventCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:58
* @route '/shadcn-event-calendar'
*/
shadcnEventCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shadcnEventCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:58
* @route '/shadcn-event-calendar'
*/
shadcnEventCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shadcnEventCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

shadcnEventCalendar.form = shadcnEventCalendarForm

/**
* @see routes/web.php:59
* @route '/booking-calendar'
*/
export const bookingCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendar.url(options),
    method: 'get',
})

bookingCalendar.definition = {
    methods: ["get","head"],
    url: '/booking-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:59
* @route '/booking-calendar'
*/
bookingCalendar.url = (options?: RouteQueryOptions) => {
    return bookingCalendar.definition.url + queryParams(options)
}

/**
* @see routes/web.php:59
* @route '/booking-calendar'
*/
bookingCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:59
* @route '/booking-calendar'
*/
bookingCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bookingCalendar.url(options),
    method: 'head',
})

/**
* @see routes/web.php:59
* @route '/booking-calendar'
*/
const bookingCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:59
* @route '/booking-calendar'
*/
bookingCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendar.url(options),
    method: 'get',
})

/**
* @see routes/web.php:59
* @route '/booking-calendar'
*/
bookingCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bookingCalendar.form = bookingCalendarForm
