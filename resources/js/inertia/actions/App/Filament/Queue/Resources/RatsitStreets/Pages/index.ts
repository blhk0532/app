import ListRatsitStreets from './ListRatsitStreets'
import CreateRatsitStreet from './CreateRatsitStreet'
import ViewRatsitStreet from './ViewRatsitStreet'
import EditRatsitStreet from './EditRatsitStreet'

const Pages = {
    ListRatsitStreets: Object.assign(ListRatsitStreets, ListRatsitStreets),
    CreateRatsitStreet: Object.assign(CreateRatsitStreet, CreateRatsitStreet),
    ViewRatsitStreet: Object.assign(ViewRatsitStreet, ViewRatsitStreet),
    EditRatsitStreet: Object.assign(EditRatsitStreet, EditRatsitStreet),
}

export default Pages