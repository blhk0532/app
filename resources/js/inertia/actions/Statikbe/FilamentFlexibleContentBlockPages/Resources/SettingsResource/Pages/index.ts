import ListSettings from './ListSettings'
import CreateSettings from './CreateSettings'
import EditSettings from './EditSettings'

const Pages = {
    ListSettings: Object.assign(ListSettings, ListSettings),
    CreateSettings: Object.assign(CreateSettings, CreateSettings),
    EditSettings: Object.assign(EditSettings, EditSettings),
}

export default Pages