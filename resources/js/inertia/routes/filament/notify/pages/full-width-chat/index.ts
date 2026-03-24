import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
export const _conversation_ = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: _conversation_.url(args, options),
    method: 'get',
})

_conversation_.definition = {
    methods: ["get","head"],
    url: '/nds/notify/full-width-chat/{conversation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
_conversation_.url = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversation: args }
    }

    if (Array.isArray(args)) {
        args = {
            conversation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        conversation: args.conversation,
    }

    return _conversation_.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
_conversation_.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: _conversation_.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
_conversation_.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: _conversation_.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
const _conversation_Form = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: _conversation_.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
_conversation_Form.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: _conversation_.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
_conversation_Form.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: _conversation_.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

_conversation_.form = _conversation_Form

const fullWidthChat = {
    {conversation}: Object.assign(_conversation_, _conversation_),
}

export default fullWidthChat