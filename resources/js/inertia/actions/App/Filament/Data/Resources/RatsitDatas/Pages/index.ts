import ListRatsitDatas from './ListRatsitDatas'
import CreateRatsitData from './CreateRatsitData'
import ViewRatsitData from './ViewRatsitData'
import EditRatsitData from './EditRatsitData'

const Pages = {
    ListRatsitDatas: Object.assign(ListRatsitDatas, ListRatsitDatas),
    CreateRatsitData: Object.assign(CreateRatsitData, CreateRatsitData),
    ViewRatsitData: Object.assign(ViewRatsitData, ViewRatsitData),
    EditRatsitData: Object.assign(EditRatsitData, EditRatsitData),
}

export default Pages