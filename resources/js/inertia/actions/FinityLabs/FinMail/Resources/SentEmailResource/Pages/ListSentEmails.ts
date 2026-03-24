import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
const ListSentEmails = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSentEmails.url(options),
    method: 'get',
})

ListSentEmails.definition = {
    methods: ["get","head"],
    url: '/nds/email/sent-emails',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
ListSentEmails.url = (options?: RouteQueryOptions) => {
    return ListSentEmails.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
ListSentEmails.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSentEmails.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
ListSentEmails.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSentEmails.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
const ListSentEmailsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSentEmails.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
ListSentEmailsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSentEmails.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
ListSentEmailsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSentEmails.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSentEmails.form = ListSentEmailsForm

export default ListSentEmails