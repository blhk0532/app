import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
const ViewEmailTemplate = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewEmailTemplate.url(args, options),
    method: 'get',
})

ViewEmailTemplate.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
ViewEmailTemplate.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewEmailTemplate.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
ViewEmailTemplate.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewEmailTemplate.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
ViewEmailTemplate.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewEmailTemplate.url(args, options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
const ViewEmailTemplateForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmailTemplate.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
ViewEmailTemplateForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmailTemplate.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ViewEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ViewEmailTemplate.php:7
* @route '/nds/email/email-templates/{record}'
*/
ViewEmailTemplateForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmailTemplate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewEmailTemplate.form = ViewEmailTemplateForm

export default ViewEmailTemplate