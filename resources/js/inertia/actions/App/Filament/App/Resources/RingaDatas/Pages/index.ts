import QueueRingaData from './QueueRingaData'
import ListRingaData from './ListRingaData'
import CreateRingaData from './CreateRingaData'
import ViewRingaData from './ViewRingaData'
import EditRingaData from './EditRingaData'

const Pages = {
    QueueRingaData: Object.assign(QueueRingaData, QueueRingaData),
    ListRingaData: Object.assign(ListRingaData, ListRingaData),
    CreateRingaData: Object.assign(CreateRingaData, CreateRingaData),
    ViewRingaData: Object.assign(ViewRingaData, ViewRingaData),
    EditRingaData: Object.assign(EditRingaData, EditRingaData),
}

export default Pages