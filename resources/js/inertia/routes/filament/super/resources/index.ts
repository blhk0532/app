import admins from './admins'
import outcomeDelaySettings from './outcome-delay-settings'
import outcomeSettings from './outcome-settings'
import ringaDataOutcomes from './ringa-data-outcomes'
import teamInvitations from './team-invitations'
import teams from './teams'
import terminalLogs from './terminal-logs'
import users from './users'
import whatsappAgents from './whatsapp-agents'
import panelAccesses from './panel-accesses'
import services from './services'
import booking from './booking'
import bookingCalendars from './booking-calendars'
import bookingDataLeads from './booking-data-leads'
import exceptions from './exceptions'
import commandRunner from './command-runner'
import failedJobs from './failed-jobs'
import whatsappInstances from './whatsapp-instances'
import whatsappMessages from './whatsapp-messages'
import whatsappWebhooks from './whatsapp-webhooks'
import notificationChannels from './notification-channels'
import notificationEvents from './notification-events'
import notificationTemplates from './notification-templates'
import notifications from './notifications'
import shield from './shield'
import conversations from './conversations'
import messages from './messages'

const resources = {
    admins: Object.assign(admins, admins),
    outcomeDelaySettings: Object.assign(outcomeDelaySettings, outcomeDelaySettings),
    outcomeSettings: Object.assign(outcomeSettings, outcomeSettings),
    ringaDataOutcomes: Object.assign(ringaDataOutcomes, ringaDataOutcomes),
    teamInvitations: Object.assign(teamInvitations, teamInvitations),
    teams: Object.assign(teams, teams),
    terminalLogs: Object.assign(terminalLogs, terminalLogs),
    users: Object.assign(users, users),
    whatsappAgents: Object.assign(whatsappAgents, whatsappAgents),
    panelAccesses: Object.assign(panelAccesses, panelAccesses),
    services: Object.assign(services, services),
    booking: Object.assign(booking, booking),
    bookingCalendars: Object.assign(bookingCalendars, bookingCalendars),
    bookingDataLeads: Object.assign(bookingDataLeads, bookingDataLeads),
    exceptions: Object.assign(exceptions, exceptions),
    commandRunner: Object.assign(commandRunner, commandRunner),
    failedJobs: Object.assign(failedJobs, failedJobs),
    whatsappInstances: Object.assign(whatsappInstances, whatsappInstances),
    whatsappMessages: Object.assign(whatsappMessages, whatsappMessages),
    whatsappWebhooks: Object.assign(whatsappWebhooks, whatsappWebhooks),
    notificationChannels: Object.assign(notificationChannels, notificationChannels),
    notificationEvents: Object.assign(notificationEvents, notificationEvents),
    notificationTemplates: Object.assign(notificationTemplates, notificationTemplates),
    notifications: Object.assign(notifications, notifications),
    shield: Object.assign(shield, shield),
    conversations: Object.assign(conversations, conversations),
    messages: Object.assign(messages, messages),
}

export default resources