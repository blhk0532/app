import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ViewEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ViewEmailTheme.php:7
* @route '/nds/email/email-themes/{record}'
*/
const ViewEmailTheme = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewEmailTheme.url(args, options),
    method: 'get',
})

ViewEmailTheme.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-themes/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ViewEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ViewEmailTheme.php:7
* @route '/nds/email/email-themes/{record}'
*/
ViewEmailTheme.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewEmailTheme.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ViewEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ViewEmailTheme.php:7
* @route '/nds/email/email-themes/{record}'
*/
ViewEmailTheme.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewEmailTheme.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ViewEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ViewEmailTheme.php:7
* @route '/nds/email/email-themes/{record}'
*/
ViewEmailTheme.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewEmailTheme.url(args, options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ViewEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ViewEmailTheme.php:7
* @route '/nds/email/email-themes/{record}'
*/
const ViewEmailThemeForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmailTheme.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ViewEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ViewEmailTheme.php:7
* @route '/nds/email/email-themes/{record}'
*/
ViewEmailThemeForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmailTheme.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\ViewEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/ViewEmailTheme.php:7
* @route '/nds/email/email-themes/{record}'
*/
ViewEmailThemeForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmailTheme.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewEmailTheme.form = ViewEmailThemeForm

export default ViewEmailTheme