import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import ViewContact from './ViewContact'
import EditContact from './EditContact'

const Pages = {
    ListContacts: Object.assign(ListContacts, ListContacts),
    CreateContact: Object.assign(CreateContact, CreateContact),
    ViewContact: Object.assign(ViewContact, ViewContact),
    EditContact: Object.assign(EditContact, EditContact),
}

export default Pages