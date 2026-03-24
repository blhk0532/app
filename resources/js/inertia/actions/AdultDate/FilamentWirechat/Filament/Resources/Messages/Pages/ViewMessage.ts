import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/notify/messages/{record}'
*/
const ViewMessagef41be46cdab11ef089fd4aa4d6ae6856 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.url(args, options),
    method: 'get',
})

ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.definition = {
    methods: ["get","head"],
    url: '/nds/notify/messages/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/notify/messages/{record}'
*/
ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/notify/messages/{record}'
*/
ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/notify/messages/{record}'
*/
ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/notify/messages/{record}'
*/
const ViewMessagef41be46cdab11ef089fd4aa4d6ae6856Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/notify/messages/{record}'
*/
ViewMessagef41be46cdab11ef089fd4aa4d6ae6856Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/notify/messages/{record}'
*/
ViewMessagef41be46cdab11ef089fd4aa4d6ae6856Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewMessagef41be46cdab11ef089fd4aa4d6ae6856.form = ViewMessagef41be46cdab11ef089fd4aa4d6ae6856Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
const ViewMessage7f05121a695099d3e9bd56f03fb78150 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewMessage7f05121a695099d3e9bd56f03fb78150.url(args, options),
    method: 'get',
})

ViewMessage7f05121a695099d3e9bd56f03fb78150.definition = {
    methods: ["get","head"],
    url: '/nds/super/messages/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
ViewMessage7f05121a695099d3e9bd56f03fb78150.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewMessage7f05121a695099d3e9bd56f03fb78150.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
ViewMessage7f05121a695099d3e9bd56f03fb78150.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewMessage7f05121a695099d3e9bd56f03fb78150.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
ViewMessage7f05121a695099d3e9bd56f03fb78150.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewMessage7f05121a695099d3e9bd56f03fb78150.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
const ViewMessage7f05121a695099d3e9bd56f03fb78150Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMessage7f05121a695099d3e9bd56f03fb78150.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
ViewMessage7f05121a695099d3e9bd56f03fb78150Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMessage7f05121a695099d3e9bd56f03fb78150.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
ViewMessage7f05121a695099d3e9bd56f03fb78150Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMessage7f05121a695099d3e9bd56f03fb78150.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewMessage7f05121a695099d3e9bd56f03fb78150.form = ViewMessage7f05121a695099d3e9bd56f03fb78150Form

const ViewMessage = {
    '/nds/notify/messages/{record}': ViewMessagef41be46cdab11ef089fd4aa4d6ae6856,
    '/nds/super/messages/{record}': ViewMessage7f05121a695099d3e9bd56f03fb78150,
}

export default ViewMessage