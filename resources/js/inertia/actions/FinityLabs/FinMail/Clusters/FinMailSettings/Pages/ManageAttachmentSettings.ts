import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
const ManageAttachmentSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageAttachmentSettings.url(options),
    method: 'get',
})

ManageAttachmentSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings/manage-attachment-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
ManageAttachmentSettings.url = (options?: RouteQueryOptions) => {
    return ManageAttachmentSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
ManageAttachmentSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageAttachmentSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
ManageAttachmentSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageAttachmentSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
const ManageAttachmentSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageAttachmentSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
ManageAttachmentSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageAttachmentSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\Pages\ManageAttachmentSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/Pages/ManageAttachmentSettings.php:7
* @route '/nds/email/mail-settings/manage-attachment-settings'
*/
ManageAttachmentSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageAttachmentSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageAttachmentSettings.form = ManageAttachmentSettingsForm

export default ManageAttachmentSettings