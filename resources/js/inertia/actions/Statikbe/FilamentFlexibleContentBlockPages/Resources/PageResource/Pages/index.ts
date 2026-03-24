import ListPages from './ListPages'
import CreatePage from './CreatePage'
import EditPage from './EditPage'
import ManagePageTree from './ManagePageTree'

const Pages = {
    ListPages: Object.assign(ListPages, ListPages),
    CreatePage: Object.assign(CreatePage, CreatePage),
    EditPage: Object.assign(EditPage, EditPage),
    ManagePageTree: Object.assign(ManagePageTree, ManagePageTree),
}

export default Pages