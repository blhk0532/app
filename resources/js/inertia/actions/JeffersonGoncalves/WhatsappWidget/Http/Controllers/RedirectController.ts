import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
const RedirectController = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController.url(args, options),
    method: 'get',
})

RedirectController.definition = {
    methods: ["get","head"],
    url: '/whatsapp-widget/redirect/{whatsapp_agent}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
RedirectController.url = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return RedirectController.definition.url
            .replace('{whatsapp_agent}', parsedArgs.whatsapp_agent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
RedirectController.get = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
RedirectController.head = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
const RedirectControllerForm = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
RedirectControllerForm.get = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\RedirectController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/RedirectController.php:10
* @route '/whatsapp-widget/redirect/{whatsapp_agent}'
*/
RedirectControllerForm.head = (args: { whatsapp_agent: string | number } | [whatsapp_agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController.form = RedirectControllerForm

export default RedirectController