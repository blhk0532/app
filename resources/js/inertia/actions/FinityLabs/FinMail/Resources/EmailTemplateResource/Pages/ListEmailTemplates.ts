import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
const ListEmailTemplates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEmailTemplates.url(options),
    method: 'get',
})

ListEmailTemplates.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
ListEmailTemplates.url = (options?: RouteQueryOptions) => {
    return ListEmailTemplates.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
ListEmailTemplates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEmailTemplates.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
ListEmailTemplates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListEmailTemplates.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
const ListEmailTemplatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmailTemplates.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
ListEmailTemplatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmailTemplates.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ListEmailTemplates::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ListEmailTemplates.php:7
* @route '/nds/email/email-templates'
*/
ListEmailTemplatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmailTemplates.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListEmailTemplates.form = ListEmailTemplatesForm

export default ListEmailTemplates