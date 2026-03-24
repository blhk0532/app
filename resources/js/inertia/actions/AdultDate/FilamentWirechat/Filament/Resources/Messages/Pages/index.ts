import ListMessages from './ListMessages'
import CreateMessage from './CreateMessage'
import ViewMessage from './ViewMessage'
import EditMessage from './EditMessage'

const Pages = {
    ListMessages: Object.assign(ListMessages, ListMessages),
    CreateMessage: Object.assign(CreateMessage, CreateMessage),
    ViewMessage: Object.assign(ViewMessage, ViewMessage),
    EditMessage: Object.assign(EditMessage, EditMessage),
}

export default Pages