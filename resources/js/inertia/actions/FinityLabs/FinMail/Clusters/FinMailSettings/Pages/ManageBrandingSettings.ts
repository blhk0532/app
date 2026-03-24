import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
const ManageBrandingSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageBrandingSettings.url(options),
    method: 'get',
})

ManageBrandingSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-branding-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
ManageBrandingSettings.url = (options?: RouteQueryOptions) => {
    return ManageBrandingSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
ManageBrandingSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageBrandingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
ManageBrandingSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageBrandingSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
const ManageBrandingSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageBrandingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
ManageBrandingSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageBrandingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
ManageBrandingSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageBrandingSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageBrandingSettings.form = ManageBrandingSettingsForm

export default ManageBrandingSettings