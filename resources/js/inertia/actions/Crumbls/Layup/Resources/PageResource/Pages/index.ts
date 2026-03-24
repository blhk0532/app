import ListPages from './ListPages'
import CreatePage from './CreatePage'
import EditPage from './EditPage'

const Pages = {
    ListPages: Object.assign(ListPages, ListPages),
    CreatePage: Object.assign(CreatePage, CreatePage),
    EditPage: Object.assign(EditPage, EditPage),
}

export default Pages