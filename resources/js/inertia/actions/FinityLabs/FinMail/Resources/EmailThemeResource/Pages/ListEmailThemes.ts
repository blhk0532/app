import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ListEmailThemes::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ListEmailThemes.php:7
* @route '/nds/email/email-themes'
*/
const ListEmailThemes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEmailThemes.url(options),
    method: 'get',
})

ListEmailThemes.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-themes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ListEmailThemes::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ListEmailThemes.php:7
* @route '/nds/email/email-themes'
*/
ListEmailThemes.url = (options?: RouteQueryOptions) => {
    return ListEmailThemes.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ListEmailThemes::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ListEmailThemes.php:7
* @route '/nds/email/email-themes'
*/
ListEmailThemes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEmailThemes.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ListEmailThemes::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ListEmailThemes.php:7
* @route '/nds/email/email-themes'
*/
ListEmailThemes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListEmailThemes.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ListEmailThemes::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ListEmailThemes.php:7
* @route '/nds/email/email-themes'
*/
const ListEmailThemesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmailThemes.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ListEmailThemes::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ListEmailThemes.php:7
* @route '/nds/email/email-themes'
*/
ListEmailThemesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmailThemes.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ListEmailThemes::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ListEmailThemes.php:7
* @route '/nds/email/email-themes'
*/
ListEmailThemesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmailThemes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListEmailThemes.form = ListEmailThemesForm

export default ListEmailThemes