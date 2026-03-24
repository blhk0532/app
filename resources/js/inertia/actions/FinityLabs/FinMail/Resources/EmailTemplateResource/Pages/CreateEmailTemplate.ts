import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
const CreateEmailTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateEmailTemplate.url(options),
    method: 'get',
})

CreateEmailTemplate.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
CreateEmailTemplate.url = (options?: RouteQueryOptions) => {
    return CreateEmailTemplate.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
CreateEmailTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateEmailTemplate.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
CreateEmailTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateEmailTemplate.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
const CreateEmailTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEmailTemplate.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
CreateEmailTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEmailTemplate.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\CreateEmailTemplate::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/CreateEmailTemplate.php:7
* @route '/nds/email/email-templates/create'
*/
CreateEmailTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEmailTemplate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateEmailTemplate.form = CreateEmailTemplateForm

export default CreateEmailTemplate