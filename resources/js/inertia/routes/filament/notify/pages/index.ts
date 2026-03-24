import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import chats8dcd54 from './chats'
import fullWidthChat from './full-width-chat'
/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/notify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
export const notifierDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifierDashboard.url(options),
    method: 'get',
})

notifierDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notifier-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
notifierDashboard.url = (options?: RouteQueryOptions) => {
    return notifierDashboard.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
notifierDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifierDashboard.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
notifierDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifierDashboard.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
const notifierDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifierDashboard.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
notifierDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifierDashboard.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
notifierDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifierDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

notifierDashboard.form = notifierDashboardForm

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
export const notificationSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notificationSettings.url(options),
    method: 'get',
})

notificationSettings.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notification-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
notificationSettings.url = (options?: RouteQueryOptions) => {
    return notificationSettings.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
notificationSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notificationSettings.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
notificationSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notificationSettings.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
const notificationSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notificationSettings.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
notificationSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notificationSettings.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/notify/notification-settings'
*/
notificationSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notificationSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

notificationSettings.form = notificationSettingsForm

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/notify/event-channel-configuration'
*/
export const eventChannelConfiguration = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventChannelConfiguration.url(options),
    method: 'get',
})

eventChannelConfiguration.definition = {
    methods: ["get","head"],
    url: '/nds/notify/event-channel-configuration',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/notify/event-channel-configuration'
*/
eventChannelConfiguration.url = (options?: RouteQueryOptions) => {
    return eventChannelConfiguration.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/notify/event-channel-configuration'
*/
eventChannelConfiguration.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventChannelConfiguration.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/notify/event-channel-configuration'
*/
eventChannelConfiguration.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eventChannelConfiguration.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/notify/event-channel-configuration'
*/
const eventChannelConfigurationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eventChannelConfiguration.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/notify/event-channel-configuration'
*/
eventChannelConfigurationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eventChannelConfiguration.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/notify/event-channel-configuration'
*/
eventChannelConfigurationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eventChannelConfiguration.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

eventChannelConfiguration.form = eventChannelConfigurationForm

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
export const wirechat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wirechat.url(options),
    method: 'get',
})

wirechat.definition = {
    methods: ["get","head"],
    url: '/nds/notify/wirechat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
wirechat.url = (options?: RouteQueryOptions) => {
    return wirechat.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
wirechat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wirechat.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
wirechat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: wirechat.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
const wirechatForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
wirechatForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
wirechatForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

wirechat.form = wirechatForm

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
export const chats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chats.url(options),
    method: 'get',
})

chats.definition = {
    methods: ["get","head"],
    url: '/nds/notify/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
chats.url = (options?: RouteQueryOptions) => {
    return chats.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
chats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chats.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
chats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chats.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
const chatsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
chatsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
chatsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

chats.form = chatsForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    notifierDashboard: Object.assign(notifierDashboard, notifierDashboard),
    notificationSettings: Object.assign(notificationSettings, notificationSettings),
    eventChannelConfiguration: Object.assign(eventChannelConfiguration, eventChannelConfiguration),
    wirechat: Object.assign(wirechat, wirechat),
    chats: Object.assign(chats, chats8dcd54),
    fullWidthChat: Object.assign(fullWidthChat, fullWidthChat),
}

export default pages