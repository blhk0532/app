import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\WhatsappsController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/WhatsappsController.php:11
* @route '/api/whatsapps'
*/
const WhatsappsController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: WhatsappsController.url(options),
    method: 'get',
})

WhatsappsController.definition = {
    methods: ["get","head"],
    url: '/api/whatsapps',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\WhatsappsController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/WhatsappsController.php:11
* @route '/api/whatsapps'
*/
WhatsappsController.url = (options?: RouteQueryOptions) => {
    return WhatsappsController.definition.url + queryParams(options)
}

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\WhatsappsController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/WhatsappsController.php:11
* @route '/api/whatsapps'
*/
WhatsappsController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: WhatsappsController.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\WhatsappsController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/WhatsappsController.php:11
* @route '/api/whatsapps'
*/
WhatsappsController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: WhatsappsController.url(options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\WhatsappsController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/WhatsappsController.php:11
* @route '/api/whatsapps'
*/
const WhatsappsControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: WhatsappsController.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\WhatsappsController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/WhatsappsController.php:11
* @route '/api/whatsapps'
*/
WhatsappsControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: WhatsappsController.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\WhatsappWidget\Http\Controllers\WhatsappsController::__invoke
* @see vendor/jeffersongoncalves/laravel-whatsapp-widget/src/Http/Controllers/WhatsappsController.php:11
* @route '/api/whatsapps'
*/
WhatsappsControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: WhatsappsController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

WhatsappsController.form = WhatsappsControllerForm

export default WhatsappsController