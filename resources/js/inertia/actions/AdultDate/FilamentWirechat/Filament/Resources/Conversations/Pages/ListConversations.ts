import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
const ListConversationsf9d1348513ba61c7530bab58f7d7196b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListConversationsf9d1348513ba61c7530bab58f7d7196b.url(options),
    method: 'get',
})

ListConversationsf9d1348513ba61c7530bab58f7d7196b.definition = {
    methods: ["get","head"],
    url: '/nds/notify/conversations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
ListConversationsf9d1348513ba61c7530bab58f7d7196b.url = (options?: RouteQueryOptions) => {
    return ListConversationsf9d1348513ba61c7530bab58f7d7196b.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
ListConversationsf9d1348513ba61c7530bab58f7d7196b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListConversationsf9d1348513ba61c7530bab58f7d7196b.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
ListConversationsf9d1348513ba61c7530bab58f7d7196b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListConversationsf9d1348513ba61c7530bab58f7d7196b.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
const ListConversationsf9d1348513ba61c7530bab58f7d7196bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListConversationsf9d1348513ba61c7530bab58f7d7196b.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
ListConversationsf9d1348513ba61c7530bab58f7d7196bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListConversationsf9d1348513ba61c7530bab58f7d7196b.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
ListConversationsf9d1348513ba61c7530bab58f7d7196bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListConversationsf9d1348513ba61c7530bab58f7d7196b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListConversationsf9d1348513ba61c7530bab58f7d7196b.form = ListConversationsf9d1348513ba61c7530bab58f7d7196bForm
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/super/conversations'
*/
const ListConversations0be6a115b582f2a0565da8cc49cba4ea = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListConversations0be6a115b582f2a0565da8cc49cba4ea.url(options),
    method: 'get',
})

ListConversations0be6a115b582f2a0565da8cc49cba4ea.definition = {
    methods: ["get","head"],
    url: '/nds/super/conversations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/super/conversations'
*/
ListConversations0be6a115b582f2a0565da8cc49cba4ea.url = (options?: RouteQueryOptions) => {
    return ListConversations0be6a115b582f2a0565da8cc49cba4ea.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/super/conversations'
*/
ListConversations0be6a115b582f2a0565da8cc49cba4ea.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListConversations0be6a115b582f2a0565da8cc49cba4ea.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/super/conversations'
*/
ListConversations0be6a115b582f2a0565da8cc49cba4ea.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListConversations0be6a115b582f2a0565da8cc49cba4ea.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/super/conversations'
*/
const ListConversations0be6a115b582f2a0565da8cc49cba4eaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListConversations0be6a115b582f2a0565da8cc49cba4ea.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/super/conversations'
*/
ListConversations0be6a115b582f2a0565da8cc49cba4eaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListConversations0be6a115b582f2a0565da8cc49cba4ea.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/super/conversations'
*/
ListConversations0be6a115b582f2a0565da8cc49cba4eaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListConversations0be6a115b582f2a0565da8cc49cba4ea.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListConversations0be6a115b582f2a0565da8cc49cba4ea.form = ListConversations0be6a115b582f2a0565da8cc49cba4eaForm

const ListConversations = {
    '/nds/notify/conversations': ListConversationsf9d1348513ba61c7530bab58f7d7196b,
    '/nds/super/conversations': ListConversations0be6a115b582f2a0565da8cc49cba4ea,
}

export default ListConversations