import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
const ManageAuthEmailSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageAuthEmailSettings.url(options),
    method: 'get',
})

ManageAuthEmailSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-auth-email-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
ManageAuthEmailSettings.url = (options?: RouteQueryOptions) => {
    return ManageAuthEmailSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
ManageAuthEmailSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageAuthEmailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
ManageAuthEmailSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageAuthEmailSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
const ManageAuthEmailSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageAuthEmailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
ManageAuthEmailSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageAuthEmailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
ManageAuthEmailSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageAuthEmailSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageAuthEmailSettings.form = ManageAuthEmailSettingsForm

export default ManageAuthEmailSettings