import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
const ManageGeneralSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageGeneralSettings.url(options),
    method: 'get',
})

ManageGeneralSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-general-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
ManageGeneralSettings.url = (options?: RouteQueryOptions) => {
    return ManageGeneralSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
ManageGeneralSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageGeneralSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
ManageGeneralSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageGeneralSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
const ManageGeneralSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageGeneralSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
ManageGeneralSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageGeneralSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
ManageGeneralSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageGeneralSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageGeneralSettings.form = ManageGeneralSettingsForm

export default ManageGeneralSettings