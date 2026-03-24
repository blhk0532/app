import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
const ManageLoggingSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageLoggingSettings.url(options),
    method: 'get',
})

ManageLoggingSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-logging-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
ManageLoggingSettings.url = (options?: RouteQueryOptions) => {
    return ManageLoggingSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
ManageLoggingSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageLoggingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
ManageLoggingSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageLoggingSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
const ManageLoggingSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageLoggingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
ManageLoggingSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageLoggingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
ManageLoggingSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageLoggingSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageLoggingSettings.form = ManageLoggingSettingsForm

export default ManageLoggingSettings