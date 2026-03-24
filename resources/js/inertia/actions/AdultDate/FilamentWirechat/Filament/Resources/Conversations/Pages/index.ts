import ListConversations from './ListConversations'
import CreateConversation from './CreateConversation'
import ViewConversation from './ViewConversation'
import EditConversation from './EditConversation'

const Pages = {
    ListConversations: Object.assign(ListConversations, ListConversations),
    CreateConversation: Object.assign(CreateConversation, CreateConversation),
    ViewConversation: Object.assign(ViewConversation, ViewConversation),
    EditConversation: Object.assign(EditConversation, EditConversation),
}

export default Pages