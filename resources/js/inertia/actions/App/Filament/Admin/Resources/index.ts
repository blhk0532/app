import Admins from './Admins'
import OutcomeDelaySettings from './OutcomeDelaySettings'
import OutcomeSettings from './OutcomeSettings'
import RingaDataOutcomes from './RingaDataOutcomes'
import TeamInvitations from './TeamInvitations'
import Teams from './Teams'
import TerminalLogResource from './TerminalLogResource'
import Users from './Users'
import WhatsappAgents from './WhatsappAgents'

const Resources = {
    Admins: Object.assign(Admins, Admins),
    OutcomeDelaySettings: Object.assign(OutcomeDelaySettings, OutcomeDelaySettings),
    OutcomeSettings: Object.assign(OutcomeSettings, OutcomeSettings),
    RingaDataOutcomes: Object.assign(RingaDataOutcomes, RingaDataOutcomes),
    TeamInvitations: Object.assign(TeamInvitations, TeamInvitations),
    Teams: Object.assign(Teams, Teams),
    TerminalLogResource: Object.assign(TerminalLogResource, TerminalLogResource),
    Users: Object.assign(Users, Users),
    WhatsappAgents: Object.assign(WhatsappAgents, WhatsappAgents),
}

export default Resources