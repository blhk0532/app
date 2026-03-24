import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Chat\Pages\ChatDashboard::__invoke
* @see app/Filament/Chat/Pages/ChatDashboard.php:7
* @route '/nds/chat/dashboard'
*/
const ChatDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard.url(options),
    method: 'get',
})

ChatDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/chat/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Chat\Pages\ChatDashboard::__invoke
* @see app/Filament/Chat/Pages/ChatDashboard.php:7
* @route '/nds/chat/dashboard'
*/
ChatDashboard.url = (options?: RouteQueryOptions) => {
    return ChatDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Chat\Pages\ChatDashboard::__invoke
* @see app/Filament/Chat/Pages/ChatDashboard.php:7
* @route '/nds/chat/dashboard'
*/
ChatDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Chat\Pages\ChatDashboard::__invoke
* @see app/Filament/Chat/Pages/ChatDashboard.php:7
* @route '/nds/chat/dashboard'
*/
ChatDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Chat\Pages\ChatDashboard::__invoke
* @see app/Filament/Chat/Pages/ChatDashboard.php:7
* @route '/nds/chat/dashboard'
*/
const ChatDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Chat\Pages\ChatDashboard::__invoke
* @see app/Filament/Chat/Pages/ChatDashboard.php:7
* @route '/nds/chat/dashboard'
*/
ChatDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Chat\Pages\ChatDashboard::__invoke
* @see app/Filament/Chat/Pages/ChatDashboard.php:7
* @route '/nds/chat/dashboard'
*/
ChatDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatDashboard.form = ChatDashboardForm

export default ChatDashboard