import ListPrivateData from './ListPrivateData'
import CreatePrivateData from './CreatePrivateData'
import EditPrivateData from './EditPrivateData'

const Pages = {
    ListPrivateData: Object.assign(ListPrivateData, ListPrivateData),
    CreatePrivateData: Object.assign(CreatePrivateData, CreatePrivateData),
    EditPrivateData: Object.assign(EditPrivateData, EditPrivateData),
}

export default Pages