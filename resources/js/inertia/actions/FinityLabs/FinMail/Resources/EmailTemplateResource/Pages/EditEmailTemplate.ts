import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
const EditEmailTemplate = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditEmailTemplate.url(args, options),
    method: 'get',
})

EditEmailTemplate.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
EditEmailTemplate.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditEmailTemplate.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
EditEmailTemplate.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditEmailTemplate.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
EditEmailTemplate.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditEmailTemplate.url(args, options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
const EditEmailTemplateForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEmailTemplate.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
EditEmailTemplateForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEmailTemplate.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\EditEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/EditEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}/edit'
*/
EditEmailTemplateForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEmailTemplate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditEmailTemplate.form = EditEmailTemplateForm

export default EditEmailTemplate