import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\AiChatController::chat
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
export const chat = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chat.url(options),
    method: 'post',
})

chat.definition = {
    methods: ["post"],
    url: '/api/ai/chat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AiChatController::chat
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
chat.url = (options?: RouteQueryOptions) => {
    return chat.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AiChatController::chat
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
chat.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chat.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AiChatController::chat
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
const chatForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: chat.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AiChatController::chat
* @see app/Http/Controllers/Api/AiChatController.php:12
* @route '/api/ai/chat'
*/
chatForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: chat.url(options),
    method: 'post',
})

chat.form = chatForm

const ai = {
    chat: Object.assign(chat, chat),
}

export default ai