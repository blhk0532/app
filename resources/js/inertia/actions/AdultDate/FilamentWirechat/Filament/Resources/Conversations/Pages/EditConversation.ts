import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
const EditConversationfaad9b21e19cf32bb400b3eb5012d60a = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditConversationfaad9b21e19cf32bb400b3eb5012d60a.url(args, options),
    method: 'get',
})

EditConversationfaad9b21e19cf32bb400b3eb5012d60a.definition = {
    methods: ["get","head"],
    url: '/nds/notify/conversations/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
EditConversationfaad9b21e19cf32bb400b3eb5012d60a.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditConversationfaad9b21e19cf32bb400b3eb5012d60a.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
EditConversationfaad9b21e19cf32bb400b3eb5012d60a.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditConversationfaad9b21e19cf32bb400b3eb5012d60a.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
EditConversationfaad9b21e19cf32bb400b3eb5012d60a.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditConversationfaad9b21e19cf32bb400b3eb5012d60a.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
const EditConversationfaad9b21e19cf32bb400b3eb5012d60aForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditConversationfaad9b21e19cf32bb400b3eb5012d60a.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
EditConversationfaad9b21e19cf32bb400b3eb5012d60aForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditConversationfaad9b21e19cf32bb400b3eb5012d60a.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
EditConversationfaad9b21e19cf32bb400b3eb5012d60aForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditConversationfaad9b21e19cf32bb400b3eb5012d60a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditConversationfaad9b21e19cf32bb400b3eb5012d60a.form = EditConversationfaad9b21e19cf32bb400b3eb5012d60aForm
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/super/conversations/{record}/edit'
*/
const EditConversation70fb86ac6c8c78eff963542294b9a819 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditConversation70fb86ac6c8c78eff963542294b9a819.url(args, options),
    method: 'get',
})

EditConversation70fb86ac6c8c78eff963542294b9a819.definition = {
    methods: ["get","head"],
    url: '/nds/super/conversations/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/super/conversations/{record}/edit'
*/
EditConversation70fb86ac6c8c78eff963542294b9a819.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditConversation70fb86ac6c8c78eff963542294b9a819.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/super/conversations/{record}/edit'
*/
EditConversation70fb86ac6c8c78eff963542294b9a819.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditConversation70fb86ac6c8c78eff963542294b9a819.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/super/conversations/{record}/edit'
*/
EditConversation70fb86ac6c8c78eff963542294b9a819.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditConversation70fb86ac6c8c78eff963542294b9a819.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/super/conversations/{record}/edit'
*/
const EditConversation70fb86ac6c8c78eff963542294b9a819Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditConversation70fb86ac6c8c78eff963542294b9a819.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/super/conversations/{record}/edit'
*/
EditConversation70fb86ac6c8c78eff963542294b9a819Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditConversation70fb86ac6c8c78eff963542294b9a819.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/super/conversations/{record}/edit'
*/
EditConversation70fb86ac6c8c78eff963542294b9a819Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditConversation70fb86ac6c8c78eff963542294b9a819.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditConversation70fb86ac6c8c78eff963542294b9a819.form = EditConversation70fb86ac6c8c78eff963542294b9a819Form

const EditConversation = {
    '/nds/notify/conversations/{record}/edit': EditConversationfaad9b21e19cf32bb400b3eb5012d60a,
    '/nds/super/conversations/{record}/edit': EditConversation70fb86ac6c8c78eff963542294b9a819,
}

export default EditConversation