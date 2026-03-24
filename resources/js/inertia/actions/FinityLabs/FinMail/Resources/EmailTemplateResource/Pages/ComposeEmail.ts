import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
const ComposeEmail = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ComposeEmail.url(args, options),
    method: 'get',
})

ComposeEmail.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-templates/{record}/compose',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
ComposeEmail.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ComposeEmail.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
ComposeEmail.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ComposeEmail.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
ComposeEmail.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ComposeEmail.url(args, options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
const ComposeEmailForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ComposeEmail.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
ComposeEmailForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ComposeEmail.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailTemplateResource\Pages\ComposeEmail::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailTemplateResource/Pages/ComposeEmail.php:7
* @route '/nds/email/email-templates/{record}/compose'
*/
ComposeEmailForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ComposeEmail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ComposeEmail.form = ComposeEmailForm

export default ComposeEmail