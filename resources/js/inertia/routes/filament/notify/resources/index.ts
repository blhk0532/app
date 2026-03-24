import searches from './searches'
import notificationChannels from './notification-channels'
import notificationEvents from './notification-events'
import notificationTemplates from './notification-templates'
import notifications from './notifications'
import whatsappInstances from './whatsapp-instances'
import whatsappMessages from './whatsapp-messages'
import whatsappWebhooks from './whatsapp-webhooks'
import conversations from './conversations'
import messages from './messages'

const resources = {
    searches: Object.assign(searches, searches),
    notificationChannels: Object.assign(notificationChannels, notificationChannels),
    notificationEvents: Object.assign(notificationEvents, notificationEvents),
    notificationTemplates: Object.assign(notificationTemplates, notificationTemplates),
    notifications: Object.assign(notifications, notifications),
    whatsappInstances: Object.assign(whatsappInstances, whatsappInstances),
    whatsappMessages: Object.assign(whatsappMessages, whatsappMessages),
    whatsappWebhooks: Object.assign(whatsappWebhooks, whatsappWebhooks),
    conversations: Object.assign(conversations, conversations),
    messages: Object.assign(messages, messages),
}

export default resources