import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
const WebhookController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: WebhookController.url(options),
    method: 'post',
})

WebhookController.definition = {
    methods: ["post"],
    url: '/api/webhooks/evolution',
} satisfies RouteDefinition<["post"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
WebhookController.url = (options?: RouteQueryOptions) => {
    return WebhookController.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
WebhookController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: WebhookController.url(options),
    method: 'post',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
const WebhookControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: WebhookController.url(options),
    method: 'post',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
WebhookControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: WebhookController.url(options),
    method: 'post',
})

WebhookController.form = WebhookControllerForm

export default WebhookController