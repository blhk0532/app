import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
export const redirect = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/whatsapp-widget/redirect/{whatsapp_agent}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
redirect.url = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { whatsapp_agent: args }
    }

    if (Array.isArray(args)) {
        args = {
            whatsapp_agent: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        whatsapp_agent: args.whatsapp_agent,
    }

    return redirect.definition.url
            .replace('{whatsapp_agent}', parsedArgs.whatsapp_agent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
redirect.get = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
redirect.head = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
const redirectForm = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
redirectForm.get = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
redirectForm.head = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

redirect.form = redirectForm

const whatsappWidget = {
    redirect: Object.assign(redirect, redirect),
}

export default whatsappWidget