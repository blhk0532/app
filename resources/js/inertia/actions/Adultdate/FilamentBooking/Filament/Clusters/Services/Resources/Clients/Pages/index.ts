import ListClients from './ListClients'
import CreateClient from './CreateClient'
import EditClient from './EditClient'

const Pages = {
    ListClients: Object.assign(ListClients, ListClients),
    CreateClient: Object.assign(CreateClient, CreateClient),
    EditClient: Object.assign(EditClient, EditClient),
}

export default Pages