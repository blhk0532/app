import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import auth from './auth'
import pages from './pages'
import mailSettings2d79d5 from './mail-settings'
import resources from './resources'
/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
export const mailSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mailSettings.url(options),
    method: 'get',
})

mailSettings.definition = {
    methods: ["get","head"],
    url: '/nds/email/mail-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
mailSettings.url = (options?: RouteQueryOptions) => {
    return mailSettings.definition.url + queryParams(options)
}

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
mailSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
mailSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: mailSettings.url(options),
    method: 'head',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
const mailSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
mailSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mailSettings.url(options),
    method: 'get',
})

/**
* @see \FinityLabs\FinMail\Clusters\FinMailSettings\FinMailSettings::__invoke
* @see vendor/finity-labs/fin-mail/src/Clusters/FinMailSettings/FinMailSettings.php:7
* @route '/nds/email/mail-settings'
*/
mailSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mailSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

mailSettings.form = mailSettingsForm

const email = {
    auth: Object.assign(auth, auth),
    pages: Object.assign(pages, pages),
    mailSettings: Object.assign(mailSettings, mailSettings2d79d5),
    resources: Object.assign(resources, resources),
}

export default email