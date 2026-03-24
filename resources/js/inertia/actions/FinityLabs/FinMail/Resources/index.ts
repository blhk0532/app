import EmailTemplateResource from './EmailTemplateResource'
import EmailThemeResource from './EmailThemeResource'
import SentEmailResource from './SentEmailResource'

const Resources = {
    EmailTemplateResource: Object.assign(EmailTemplateResource, EmailTemplateResource),
    EmailThemeResource: Object.assign(EmailThemeResource, EmailThemeResource),
    SentEmailResource: Object.assign(SentEmailResource, SentEmailResource),
}

export default Resources