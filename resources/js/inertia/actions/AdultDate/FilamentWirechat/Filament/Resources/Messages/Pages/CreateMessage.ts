import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/notify/messages/create'
*/
const CreateMessage0fecc253e0695a6a5e8ada5fea5fa327 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.url(options),
    method: 'get',
})

CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.definition = {
    methods: ["get","head"],
    url: '/nds/notify/messages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/notify/messages/create'
*/
CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.url = (options?: RouteQueryOptions) => {
    return CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/notify/messages/create'
*/
CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/notify/messages/create'
*/
CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/notify/messages/create'
*/
const CreateMessage0fecc253e0695a6a5e8ada5fea5fa327Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/notify/messages/create'
*/
CreateMessage0fecc253e0695a6a5e8ada5fea5fa327Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/notify/messages/create'
*/
CreateMessage0fecc253e0695a6a5e8ada5fea5fa327Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateMessage0fecc253e0695a6a5e8ada5fea5fa327.form = CreateMessage0fecc253e0695a6a5e8ada5fea5fa327Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
const CreateMessage064ae9c9671730324e91f5954be9f0d0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMessage064ae9c9671730324e91f5954be9f0d0.url(options),
    method: 'get',
})

CreateMessage064ae9c9671730324e91f5954be9f0d0.definition = {
    methods: ["get","head"],
    url: '/nds/super/messages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
CreateMessage064ae9c9671730324e91f5954be9f0d0.url = (options?: RouteQueryOptions) => {
    return CreateMessage064ae9c9671730324e91f5954be9f0d0.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
CreateMessage064ae9c9671730324e91f5954be9f0d0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMessage064ae9c9671730324e91f5954be9f0d0.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
CreateMessage064ae9c9671730324e91f5954be9f0d0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMessage064ae9c9671730324e91f5954be9f0d0.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
const CreateMessage064ae9c9671730324e91f5954be9f0d0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMessage064ae9c9671730324e91f5954be9f0d0.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
CreateMessage064ae9c9671730324e91f5954be9f0d0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMessage064ae9c9671730324e91f5954be9f0d0.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
CreateMessage064ae9c9671730324e91f5954be9f0d0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMessage064ae9c9671730324e91f5954be9f0d0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateMessage064ae9c9671730324e91f5954be9f0d0.form = CreateMessage064ae9c9671730324e91f5954be9f0d0Form

const CreateMessage = {
    '/nds/notify/messages/create': CreateMessage0fecc253e0695a6a5e8ada5fea5fa327,
    '/nds/super/messages/create': CreateMessage064ae9c9671730324e91f5954be9f0d0,
}

export default CreateMessage