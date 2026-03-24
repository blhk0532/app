import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
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
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
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
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
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
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
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

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
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
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
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
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
export const compose = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compose.url(args, options),
    method: 'get',
})

compose.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates/{record}/compose',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
compose.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return compose.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
compose.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compose.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
compose.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: compose.url(args, options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
const composeForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: compose.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
composeForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: compose.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
composeForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: compose.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

compose.form = composeForm

const emailTemplates = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
    view: Object.assign(view, view),
    compose: Object.assign(compose, compose),
}

export default emailTemplates