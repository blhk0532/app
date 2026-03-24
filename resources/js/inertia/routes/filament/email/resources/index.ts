import searches from './searches'
import emails from './emails'
import emailTemplates from './email-templates'
import emailThemes from './email-themes'
import sentEmails from './sent-emails'

const resources = {
    searches: Object.assign(searches, searches),
    emails: Object.assign(emails, emails),
    emailTemplates: Object.assign(emailTemplates, emailTemplates),
    emailThemes: Object.assign(emailThemes, emailThemes),
    sentEmails: Object.assign(sentEmails, sentEmails),
}

export default resources