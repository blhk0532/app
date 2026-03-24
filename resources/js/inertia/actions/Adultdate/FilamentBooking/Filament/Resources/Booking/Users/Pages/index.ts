import ListUsers from './ListUsers'
import CreateUser from './CreateUser'
import EditUser from './EditUser'
import ManageServiceProviderSchedules from './ManageServiceProviderSchedules'

const Pages = {
    ListUsers: Object.assign(ListUsers, ListUsers),
    CreateUser: Object.assign(CreateUser, CreateUser),
    EditUser: Object.assign(EditUser, EditUser),
    ManageServiceProviderSchedules: Object.assign(ManageServiceProviderSchedules, ManageServiceProviderSchedules),
}

export default Pages