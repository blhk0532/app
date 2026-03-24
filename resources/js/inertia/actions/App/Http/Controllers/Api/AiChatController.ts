import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\AiChatController::__invoke
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
export const __invoke = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: __invoke.url(options),
    method: 'post',
})

__invoke.definition = {
    methods: ["post"],
    url: '/api/ai/chat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AiChatController::__invoke
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
__invoke.url = (options?: RouteQueryOptions) => {
    return __invoke.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AiChatController::__invoke
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
__invoke.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: __invoke.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AiChatController::__invoke
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
const __invokeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: __invoke.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AiChatController::__invoke
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
__invokeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: __invoke.url(options),
    method: 'post',
})

__invoke.form = __invokeForm

const AiChatController = { __invoke }

export default AiChatController