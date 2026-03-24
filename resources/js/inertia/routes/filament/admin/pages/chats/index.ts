import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/admin/{tenant}/chats/{conversation}'
*/
export const _conversation_ = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: _conversation_.url(args, options),
    method: 'get',
})

_conversation_.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/chats/{conversation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/admin/{tenant}/chats/{conversation}'
*/
_conversation_.url = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            conversation: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        conversation: args.conversation,
    }

    return _conversation_.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/admin/{tenant}/chats/{conversation}'
*/
_conversation_.get = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: _conversation_.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/admin/{tenant}/chats/{conversation}'
*/
_conversation_.head = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: _conversation_.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/admin/{tenant}/chats/{conversation}'
*/
const _conversation_Form = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: _conversation_.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/admin/{tenant}/chats/{conversation}'
*/
_conversation_Form.get = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: _conversation_.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/admin/{tenant}/chats/{conversation}'
*/
_conversation_Form.head = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: _conversation_.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

_conversation_.form = _conversation_Form

const chats = {
    {conversation}: Object.assign(_conversation_, _conversation_),
}

export default chats