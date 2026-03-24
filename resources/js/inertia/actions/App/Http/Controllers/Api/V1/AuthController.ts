import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\AuthController::register
* @see app/Http/Controllers/Api/V1/AuthController.php:25
* @route '/api/v1/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/v1/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::register
* @see app/Http/Controllers/Api/V1/AuthController.php:25
* @route '/api/v1/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::register
* @see app/Http/Controllers/Api/V1/AuthController.php:25
* @route '/api/v1/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::register
* @see app/Http/Controllers/Api/V1/AuthController.php:25
* @route '/api/v1/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::register
* @see app/Http/Controllers/Api/V1/AuthController.php:25
* @route '/api/v1/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

/**
* @see \App\Http\Controllers\Api\V1\AuthController::login
* @see app/Http/Controllers/Api/V1/AuthController.php:43
* @route '/api/v1/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/v1/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::login
* @see app/Http/Controllers/Api/V1/AuthController.php:43
* @route '/api/v1/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::login
* @see app/Http/Controllers/Api/V1/AuthController.php:43
* @route '/api/v1/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::login
* @see app/Http/Controllers/Api/V1/AuthController.php:43
* @route '/api/v1/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::login
* @see app/Http/Controllers/Api/V1/AuthController.php:43
* @route '/api/v1/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
* @see app/Http/Controllers/Api/V1/AuthController.php:59
* @route '/api/v1/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/api/v1/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
* @see app/Http/Controllers/Api/V1/AuthController.php:59
* @route '/api/v1/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
* @see app/Http/Controllers/Api/V1/AuthController.php:59
* @route '/api/v1/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
* @see app/Http/Controllers/Api/V1/AuthController.php:59
* @route '/api/v1/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
* @see app/Http/Controllers/Api/V1/AuthController.php:59
* @route '/api/v1/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
* @see app/Http/Controllers/Api/V1/AuthController.php:68
* @route '/api/v1/me'
*/
export const me = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ["get","head"],
    url: '/api/v1/me',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
* @see app/Http/Controllers/Api/V1/AuthController.php:68
* @route '/api/v1/me'
*/
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
* @see app/Http/Controllers/Api/V1/AuthController.php:68
* @route '/api/v1/me'
*/
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
* @see app/Http/Controllers/Api/V1/AuthController.php:68
* @route '/api/v1/me'
*/
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
* @see app/Http/Controllers/Api/V1/AuthController.php:68
* @route '/api/v1/me'
*/
const meForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
* @see app/Http/Controllers/Api/V1/AuthController.php:68
* @route '/api/v1/me'
*/
meForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
* @see app/Http/Controllers/Api/V1/AuthController.php:68
* @route '/api/v1/me'
*/
meForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

me.form = meForm

/**
* @see \App\Http\Controllers\Api\V1\AuthController::verifyEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:73
* @route '/api/v1/email/verify/{id}/{hash}'
*/
export const verifyEmail = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyEmail.url(args, options),
    method: 'post',
})

verifyEmail.definition = {
    methods: ["post"],
    url: '/api/v1/email/verify/{id}/{hash}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::verifyEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:73
* @route '/api/v1/email/verify/{id}/{hash}'
*/
verifyEmail.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            hash: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        hash: args.hash,
    }

    return verifyEmail.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::verifyEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:73
* @route '/api/v1/email/verify/{id}/{hash}'
*/
verifyEmail.post = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyEmail.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::verifyEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:73
* @route '/api/v1/email/verify/{id}/{hash}'
*/
const verifyEmailForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyEmail.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::verifyEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:73
* @route '/api/v1/email/verify/{id}/{hash}'
*/
verifyEmailForm.post = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyEmail.url(args, options),
    method: 'post',
})

verifyEmail.form = verifyEmailForm

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resendVerificationEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:89
* @route '/api/v1/email/resend'
*/
export const resendVerificationEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resendVerificationEmail.url(options),
    method: 'post',
})

resendVerificationEmail.definition = {
    methods: ["post"],
    url: '/api/v1/email/resend',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resendVerificationEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:89
* @route '/api/v1/email/resend'
*/
resendVerificationEmail.url = (options?: RouteQueryOptions) => {
    return resendVerificationEmail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resendVerificationEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:89
* @route '/api/v1/email/resend'
*/
resendVerificationEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resendVerificationEmail.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resendVerificationEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:89
* @route '/api/v1/email/resend'
*/
const resendVerificationEmailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resendVerificationEmail.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resendVerificationEmail
* @see app/Http/Controllers/Api/V1/AuthController.php:89
* @route '/api/v1/email/resend'
*/
resendVerificationEmailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resendVerificationEmail.url(options),
    method: 'post',
})

resendVerificationEmail.form = resendVerificationEmailForm

/**
* @see \App\Http\Controllers\Api\V1\AuthController::forgotPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:106
* @route '/api/v1/forgot-password'
*/
export const forgotPassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forgotPassword.url(options),
    method: 'post',
})

forgotPassword.definition = {
    methods: ["post"],
    url: '/api/v1/forgot-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::forgotPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:106
* @route '/api/v1/forgot-password'
*/
forgotPassword.url = (options?: RouteQueryOptions) => {
    return forgotPassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::forgotPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:106
* @route '/api/v1/forgot-password'
*/
forgotPassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forgotPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::forgotPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:106
* @route '/api/v1/forgot-password'
*/
const forgotPasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forgotPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::forgotPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:106
* @route '/api/v1/forgot-password'
*/
forgotPasswordForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forgotPassword.url(options),
    method: 'post',
})

forgotPassword.form = forgotPasswordForm

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resetPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:119
* @route '/api/v1/reset-password'
*/
export const resetPassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetPassword.url(options),
    method: 'post',
})

resetPassword.definition = {
    methods: ["post"],
    url: '/api/v1/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resetPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:119
* @route '/api/v1/reset-password'
*/
resetPassword.url = (options?: RouteQueryOptions) => {
    return resetPassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resetPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:119
* @route '/api/v1/reset-password'
*/
resetPassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resetPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:119
* @route '/api/v1/reset-password'
*/
const resetPasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resetPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::resetPassword
* @see app/Http/Controllers/Api/V1/AuthController.php:119
* @route '/api/v1/reset-password'
*/
resetPasswordForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resetPassword.url(options),
    method: 'post',
})

resetPassword.form = resetPasswordForm

const AuthController = { register, login, logout, me, verifyEmail, resendVerificationEmail, forgotPassword, resetPassword }

export default AuthController