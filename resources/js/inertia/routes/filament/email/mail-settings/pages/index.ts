import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
export const manageAttachmentSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageAttachmentSettings.url(options),
    method: 'get',
})

manageAttachmentSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-attachment-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
manageAttachmentSettings.url = (options?: RouteQueryOptions) => {
    return manageAttachmentSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
manageAttachmentSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageAttachmentSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
manageAttachmentSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageAttachmentSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
const manageAttachmentSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAttachmentSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
manageAttachmentSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAttachmentSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
manageAttachmentSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAttachmentSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manageAttachmentSettings.form = manageAttachmentSettingsForm

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
export const manageAuthEmailSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageAuthEmailSettings.url(options),
    method: 'get',
})

manageAuthEmailSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-auth-email-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
manageAuthEmailSettings.url = (options?: RouteQueryOptions) => {
    return manageAuthEmailSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
manageAuthEmailSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageAuthEmailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
manageAuthEmailSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageAuthEmailSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
const manageAuthEmailSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAuthEmailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
manageAuthEmailSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAuthEmailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAuthEmailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAuthEmailSettings.php:7
* @route '/nds/email/mail-settings/manage-auth-email-settings'
*/
manageAuthEmailSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAuthEmailSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manageAuthEmailSettings.form = manageAuthEmailSettingsForm

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
export const manageBrandingSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageBrandingSettings.url(options),
    method: 'get',
})

manageBrandingSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-branding-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
manageBrandingSettings.url = (options?: RouteQueryOptions) => {
    return manageBrandingSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
manageBrandingSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageBrandingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
manageBrandingSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageBrandingSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
const manageBrandingSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageBrandingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
manageBrandingSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageBrandingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageBrandingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageBrandingSettings.php:7
* @route '/nds/email/mail-settings/manage-branding-settings'
*/
manageBrandingSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageBrandingSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manageBrandingSettings.form = manageBrandingSettingsForm

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
export const manageGeneralSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageGeneralSettings.url(options),
    method: 'get',
})

manageGeneralSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-general-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
manageGeneralSettings.url = (options?: RouteQueryOptions) => {
    return manageGeneralSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
manageGeneralSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageGeneralSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
manageGeneralSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageGeneralSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
const manageGeneralSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageGeneralSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
manageGeneralSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageGeneralSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageGeneralSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageGeneralSettings.php:7
* @route '/nds/email/mail-settings/manage-general-settings'
*/
manageGeneralSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageGeneralSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manageGeneralSettings.form = manageGeneralSettingsForm

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
export const manageLoggingSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageLoggingSettings.url(options),
    method: 'get',
})

manageLoggingSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-logging-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
manageLoggingSettings.url = (options?: RouteQueryOptions) => {
    return manageLoggingSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
manageLoggingSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageLoggingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
manageLoggingSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageLoggingSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
const manageLoggingSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageLoggingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
manageLoggingSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageLoggingSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageLoggingSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageLoggingSettings.php:7
* @route '/nds/email/mail-settings/manage-logging-settings'
*/
manageLoggingSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageLoggingSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manageLoggingSettings.form = manageLoggingSettingsForm

const pages = {
    manageAttachmentSettings: Object.assign(manageAttachmentSettings, manageAttachmentSettings),
    manageAuthEmailSettings: Object.assign(manageAuthEmailSettings, manageAuthEmailSettings),
    manageBrandingSettings: Object.assign(manageBrandingSettings, manageBrandingSettings),
    manageGeneralSettings: Object.assign(manageGeneralSettings, manageGeneralSettings),
    manageLoggingSettings: Object.assign(manageLoggingSettings, manageLoggingSettings),
}

export default pages