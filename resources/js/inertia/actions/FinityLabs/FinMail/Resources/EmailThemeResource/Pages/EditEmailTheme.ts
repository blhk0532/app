import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\EditEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/EditEmailTheme.php:7
* @route '/nds/email/email-themes/{record}/edit'
*/
const EditEmailTheme = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditEmailTheme.url(args, options),
    method: 'get',
})

EditEmailTheme.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-themes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\EditEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/EditEmailTheme.php:7
* @route '/nds/email/email-themes/{record}/edit'
*/
EditEmailTheme.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditEmailTheme.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\EditEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/EditEmailTheme.php:7
* @route '/nds/email/email-themes/{record}/edit'
*/
EditEmailTheme.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditEmailTheme.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\EditEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/EditEmailTheme.php:7
* @route '/nds/email/email-themes/{record}/edit'
*/
EditEmailTheme.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditEmailTheme.url(args, options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\EditEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/EditEmailTheme.php:7
* @route '/nds/email/email-themes/{record}/edit'
*/
const EditEmailThemeForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEmailTheme.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\EditEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/EditEmailTheme.php:7
* @route '/nds/email/email-themes/{record}/edit'
*/
EditEmailThemeForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEmailTheme.url(args, options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\EditEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/EditEmailTheme.php:7
* @route '/nds/email/email-themes/{record}/edit'
*/
EditEmailThemeForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEmailTheme.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditEmailTheme.form = EditEmailThemeForm

export default EditEmailTheme