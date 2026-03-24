import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/notify/messages/{record}/edit'
*/
const EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.url(args, options),
    method: 'get',
})

EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.definition = {
    methods: ["get","head"],
    url: '/nds/notify/messages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/notify/messages/{record}/edit'
*/
EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/notify/messages/{record}/edit'
*/
EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/notify/messages/{record}/edit'
*/
EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/notify/messages/{record}/edit'
*/
const EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/notify/messages/{record}/edit'
*/
EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/notify/messages/{record}/edit'
*/
EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7.form = EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
const EditMessage324696677d33e38697028f062fa6ea8b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMessage324696677d33e38697028f062fa6ea8b.url(args, options),
    method: 'get',
})

EditMessage324696677d33e38697028f062fa6ea8b.definition = {
    methods: ["get","head"],
    url: '/nds/super/messages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
EditMessage324696677d33e38697028f062fa6ea8b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditMessage324696677d33e38697028f062fa6ea8b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
EditMessage324696677d33e38697028f062fa6ea8b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMessage324696677d33e38697028f062fa6ea8b.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
EditMessage324696677d33e38697028f062fa6ea8b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditMessage324696677d33e38697028f062fa6ea8b.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
const EditMessage324696677d33e38697028f062fa6ea8bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMessage324696677d33e38697028f062fa6ea8b.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
EditMessage324696677d33e38697028f062fa6ea8bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMessage324696677d33e38697028f062fa6ea8b.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
EditMessage324696677d33e38697028f062fa6ea8bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMessage324696677d33e38697028f062fa6ea8b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditMessage324696677d33e38697028f062fa6ea8b.form = EditMessage324696677d33e38697028f062fa6ea8bForm

const EditMessage = {
    '/nds/notify/messages/{record}/edit': EditMessagefa6d8b098c9d8cfd38e0032d46eac1d7,
    '/nds/super/messages/{record}/edit': EditMessage324696677d33e38697028f062fa6ea8b,
}

export default EditMessage