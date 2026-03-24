import ListWhatsappAgents from './ListWhatsappAgents'
import CreateWhatsappAgent from './CreateWhatsappAgent'
import EditWhatsappAgent from './EditWhatsappAgent'

const Pages = {
    ListWhatsappAgents: Object.assign(ListWhatsappAgents, ListWhatsappAgents),
    CreateWhatsappAgent: Object.assign(CreateWhatsappAgent, CreateWhatsappAgent),
    EditWhatsappAgent: Object.assign(EditWhatsappAgent, EditWhatsappAgent),
}

export default Pages