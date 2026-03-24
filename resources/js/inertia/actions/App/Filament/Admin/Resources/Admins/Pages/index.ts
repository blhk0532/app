import ListAdmins from './ListAdmins'
import CreateAdmin from './CreateAdmin'
import ViewAdmin from './ViewAdmin'
import EditAdmin from './EditAdmin'

const Pages = {
    ListAdmins: Object.assign(ListAdmins, ListAdmins),
    CreateAdmin: Object.assign(CreateAdmin, CreateAdmin),
    ViewAdmin: Object.assign(ViewAdmin, ViewAdmin),
    EditAdmin: Object.assign(EditAdmin, EditAdmin),
}

export default Pages