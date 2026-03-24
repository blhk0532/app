import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/notify/conversations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ListConversations::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ListConversations.php:7
* @route '/nds/notify/conversations'
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
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/notify/conversations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\CreateConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/CreateConversation.php:7
* @route '/nds/notify/conversations/create'
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
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/notify/conversations/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
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
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\ViewConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/ViewConversation.php:7
* @route '/nds/notify/conversations/{record}'
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
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/notify/conversations/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
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
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Conversations\Pages\EditConversation::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Conversations/Pages/EditConversation.php:7
* @route '/nds/notify/conversations/{record}/edit'
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

const conversations = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
}

export default conversations