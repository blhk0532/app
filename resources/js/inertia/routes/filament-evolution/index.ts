import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
export const webhook = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

webhook.definition = {
    methods: ["post"],
    url: '/api/webhooks/evolution',
} satisfies RouteDefinition<["post"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
webhook.url = (options?: RouteQueryOptions) => {
    return webhook.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
webhook.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
const webhookForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(options),
    method: 'post',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Http\Controllers\WebhookController::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Http/Controllers/WebhookController.php:16
* @route '/api/webhooks/evolution'
*/
webhookForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(options),
    method: 'post',
})

webhook.form = webhookForm

const filamentEvolution = {
    webhook: Object.assign(webhook, webhook),
}

export default filamentEvolution