import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
const ViewConversation98af9d8a37c5cdae96fdf9309ea1121a = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.url(args, options),
    method: 'get',
})

ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.definition = {
    methods: ["get","head"],
    url: '/nds/notify/conversations/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
const ViewConversation98af9d8a37c5cdae96fdf9309ea1121aForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
ViewConversation98af9d8a37c5cdae96fdf9309ea1121aForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
ViewConversation98af9d8a37c5cdae96fdf9309ea1121aForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewConversation98af9d8a37c5cdae96fdf9309ea1121a.form = ViewConversation98af9d8a37c5cdae96fdf9309ea1121aForm
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/super/conversations/{record}'
*/
const ViewConversatione4d6a7814159c4502671fa15ba05737b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewConversatione4d6a7814159c4502671fa15ba05737b.url(args, options),
    method: 'get',
})

ViewConversatione4d6a7814159c4502671fa15ba05737b.definition = {
    methods: ["get","head"],
    url: '/nds/super/conversations/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/super/conversations/{record}'
*/
ViewConversatione4d6a7814159c4502671fa15ba05737b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewConversatione4d6a7814159c4502671fa15ba05737b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/super/conversations/{record}'
*/
ViewConversatione4d6a7814159c4502671fa15ba05737b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewConversatione4d6a7814159c4502671fa15ba05737b.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/super/conversations/{record}'
*/
ViewConversatione4d6a7814159c4502671fa15ba05737b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewConversatione4d6a7814159c4502671fa15ba05737b.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/super/conversations/{record}'
*/
const ViewConversatione4d6a7814159c4502671fa15ba05737bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewConversatione4d6a7814159c4502671fa15ba05737b.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/super/conversations/{record}'
*/
ViewConversatione4d6a7814159c4502671fa15ba05737bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewConversatione4d6a7814159c4502671fa15ba05737b.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/super/conversations/{record}'
*/
ViewConversatione4d6a7814159c4502671fa15ba05737bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewConversatione4d6a7814159c4502671fa15ba05737b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewConversatione4d6a7814159c4502671fa15ba05737b.form = ViewConversatione4d6a7814159c4502671fa15ba05737bForm

const ViewConversation = {
    '/nds/notify/conversations/{record}': ViewConversation98af9d8a37c5cdae96fdf9309ea1121a,
    '/nds/super/conversations/{record}': ViewConversatione4d6a7814159c4502671fa15ba05737b,
}

export default ViewConversation