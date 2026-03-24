import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\EmailVerification::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/EmailVerification.php:7
* @route '/admin/email-verification/prompt'
*/
const EmailVerification = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailVerification.url(options),
    method: 'get',
})

EmailVerification.definition = {
    methods: ["get","head"],
    url: '/admin/email-verification/prompt',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\EmailVerification::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/EmailVerification.php:7
* @route '/admin/email-verification/prompt'
*/
EmailVerification.url = (options?: RouteQueryOptions) => {
    return EmailVerification.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\EmailVerification::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/EmailVerification.php:7
* @route '/admin/email-verification/prompt'
*/
EmailVerification.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailVerification.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\EmailVerification::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/EmailVerification.php:7
* @route '/admin/email-verification/prompt'
*/
EmailVerification.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EmailVerification.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\EmailVerification::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/EmailVerification.php:7
* @route '/admin/email-verification/prompt'
*/
const EmailVerificationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailVerification.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\EmailVerification::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/EmailVerification.php:7
* @route '/admin/email-verification/prompt'
*/
EmailVerificationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailVerification.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\EmailVerification::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/EmailVerification.php:7
* @route '/admin/email-verification/prompt'
*/
EmailVerificationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailVerification.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EmailVerification.form = EmailVerificationForm

export default EmailVerification