import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/email/sent-emails',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\SentEmailResource\Pages\ListSentEmails::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/SentEmailResource/Pages/ListSentEmails.php:7
* @route '/nds/email/sent-emails'
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

const sentEmails = {
    index: Object.assign(index, index),
}

export default sentEmails