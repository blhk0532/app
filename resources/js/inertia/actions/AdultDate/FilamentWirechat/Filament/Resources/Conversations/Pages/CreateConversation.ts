import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
const CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.url(options),
    method: 'get',
})

CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.definition = {
    methods: ["get","head"],
    url: '/nds/notify/conversations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.url = (options?: RouteQueryOptions) => {
    return CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
const CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e.form = CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7eForm
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/super/conversations/create'
*/
const CreateConversation0d3e20df093a9b0f73154a1af5206eac = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateConversation0d3e20df093a9b0f73154a1af5206eac.url(options),
    method: 'get',
})

CreateConversation0d3e20df093a9b0f73154a1af5206eac.definition = {
    methods: ["get","head"],
    url: '/nds/super/conversations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/super/conversations/create'
*/
CreateConversation0d3e20df093a9b0f73154a1af5206eac.url = (options?: RouteQueryOptions) => {
    return CreateConversation0d3e20df093a9b0f73154a1af5206eac.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/super/conversations/create'
*/
CreateConversation0d3e20df093a9b0f73154a1af5206eac.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateConversation0d3e20df093a9b0f73154a1af5206eac.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/super/conversations/create'
*/
CreateConversation0d3e20df093a9b0f73154a1af5206eac.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateConversation0d3e20df093a9b0f73154a1af5206eac.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/super/conversations/create'
*/
const CreateConversation0d3e20df093a9b0f73154a1af5206eacForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateConversation0d3e20df093a9b0f73154a1af5206eac.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/super/conversations/create'
*/
CreateConversation0d3e20df093a9b0f73154a1af5206eacForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateConversation0d3e20df093a9b0f73154a1af5206eac.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/super/conversations/create'
*/
CreateConversation0d3e20df093a9b0f73154a1af5206eacForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateConversation0d3e20df093a9b0f73154a1af5206eac.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateConversation0d3e20df093a9b0f73154a1af5206eac.form = CreateConversation0d3e20df093a9b0f73154a1af5206eacForm

const CreateConversation = {
    '/nds/notify/conversations/create': CreateConversationc8250ee6cb8f5a26eb6cc8cdf7186f7e,
    '/nds/super/conversations/create': CreateConversation0d3e20df093a9b0f73154a1af5206eac,
}

export default CreateConversation