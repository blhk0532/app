import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/super/messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/super/messages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\CreateMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/CreateMessage.php:7
* @route '/nds/super/messages/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/super/messages/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ViewMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ViewMessage.php:7
* @route '/nds/super/messages/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/super/messages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\EditMessage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/EditMessage.php:7
* @route '/nds/super/messages/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const messages = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
}

export default messages