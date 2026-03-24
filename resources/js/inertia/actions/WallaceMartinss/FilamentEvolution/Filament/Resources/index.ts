import WhatsappInstanceResource from './WhatsappInstanceResource'
import WhatsappMessageResource from './WhatsappMessageResource'
import WhatsappWebhookResource from './WhatsappWebhookResource'

const Resources = {
    WhatsappInstanceResource: Object.assign(WhatsappInstanceResource, WhatsappInstanceResource),
    WhatsappMessageResource: Object.assign(WhatsappMessageResource, WhatsappMessageResource),
    WhatsappWebhookResource: Object.assign(WhatsappWebhookResource, WhatsappWebhookResource),
}

export default Resources