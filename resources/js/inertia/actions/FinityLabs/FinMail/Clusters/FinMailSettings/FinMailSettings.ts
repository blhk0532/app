import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
const FinMailSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FinMailSettings.url(options),
    method: 'get',
})

FinMailSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
FinMailSettings.url = (options?: RouteQueryOptions) => {
    return FinMailSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
FinMailSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FinMailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
FinMailSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FinMailSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
const FinMailSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FinMailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
FinMailSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FinMailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
FinMailSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FinMailSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FinMailSettings.form = FinMailSettingsForm

export default FinMailSettings