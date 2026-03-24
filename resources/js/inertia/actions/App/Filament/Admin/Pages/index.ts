import ControlPanel from './ControlPanel'
import Dashboard from './Dashboard'
import PersonalAccessTokens from './PersonalAccessTokens'
import Profile from './Profile'
import SendWhatsapp from './SendWhatsapp'
import TaskBoard from './TaskBoard'

const Pages = {
    ControlPanel: Object.assign(ControlPanel, ControlPanel),
    Dashboard: Object.assign(Dashboard, Dashboard),
    PersonalAccessTokens: Object.assign(PersonalAccessTokens, PersonalAccessTokens),
    Profile: Object.assign(Profile, Profile),
    SendWhatsapp: Object.assign(SendWhatsapp, SendWhatsapp),
    TaskBoard: Object.assign(TaskBoard, TaskBoard),
}

export default Pages