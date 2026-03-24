import NotificationChannelResource from './NotificationChannelResource'
import NotificationEventResource from './NotificationEventResource'
import NotificationTemplateResource from './NotificationTemplateResource'
import NotificationResource from './NotificationResource'

const Resources = {
    NotificationChannelResource: Object.assign(NotificationChannelResource, NotificationChannelResource),
    NotificationEventResource: Object.assign(NotificationEventResource, NotificationEventResource),
    NotificationTemplateResource: Object.assign(NotificationTemplateResource, NotificationTemplateResource),
    NotificationResource: Object.assign(NotificationResource, NotificationResource),
}

export default Resources