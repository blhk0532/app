import ListWhatsappInstances from './ListWhatsappInstances'
import CreateWhatsappInstance from './CreateWhatsappInstance'
import ViewWhatsappInstance from './ViewWhatsappInstance'
import EditWhatsappInstance from './EditWhatsappInstance'

const Pages = {
    ListWhatsappInstances: Object.assign(ListWhatsappInstances, ListWhatsappInstances),
    CreateWhatsappInstance: Object.assign(CreateWhatsappInstance, CreateWhatsappInstance),
    ViewWhatsappInstance: Object.assign(ViewWhatsappInstance, ViewWhatsappInstance),
    EditWhatsappInstance: Object.assign(EditWhatsappInstance, EditWhatsappInstance),
}

export default Pages