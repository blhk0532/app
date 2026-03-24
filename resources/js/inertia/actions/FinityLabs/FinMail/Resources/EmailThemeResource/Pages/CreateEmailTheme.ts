import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\CreateEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/CreateEmailTheme.php:7
* @route '/nds/email/email-themes/create'
*/
const CreateEmailTheme = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateEmailTheme.url(options),
    method: 'get',
})

CreateEmailTheme.definition = {
    methods: ["get","head"],
    url: '/nds/email/email-themes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\CreateEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/CreateEmailTheme.php:7
* @route '/nds/email/email-themes/create'
*/
CreateEmailTheme.url = (options?: RouteQueryOptions) => {
    return CreateEmailTheme.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\CreateEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/CreateEmailTheme.php:7
* @route '/nds/email/email-themes/create'
*/
CreateEmailTheme.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateEmailTheme.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\CreateEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/CreateEmailTheme.php:7
* @route '/nds/email/email-themes/create'
*/
CreateEmailTheme.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateEmailTheme.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\CreateEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/CreateEmailTheme.php:7
* @route '/nds/email/email-themes/create'
*/
const CreateEmailThemeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEmailTheme.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\CreateEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/CreateEmailTheme.php:7
* @route '/nds/email/email-themes/create'
*/
CreateEmailThemeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEmailTheme.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Resources\EmailThemeResource\Pages\CreateEmailTheme::__invoke
* @see vendor/finity-labs/fin-mail/src/Resources/EmailThemeResource/Pages/CreateEmailTheme.php:7
* @route '/nds/email/email-themes/create'
*/
CreateEmailThemeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEmailTheme.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateEmailTheme.form = CreateEmailThemeForm

export default CreateEmailTheme