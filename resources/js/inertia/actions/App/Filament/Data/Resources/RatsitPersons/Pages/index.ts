import ListRatsitPersons from './ListRatsitPersons'
import CreateRatsitPerson from './CreateRatsitPerson'
import ViewRatsitPerson from './ViewRatsitPerson'
import EditRatsitPerson from './EditRatsitPerson'

const Pages = {
    ListRatsitPersons: Object.assign(ListRatsitPersons, ListRatsitPersons),
    CreateRatsitPerson: Object.assign(CreateRatsitPerson, CreateRatsitPerson),
    ViewRatsitPerson: Object.assign(ViewRatsitPerson, ViewRatsitPerson),
    EditRatsitPerson: Object.assign(EditRatsitPerson, EditRatsitPerson),
}

export default Pages