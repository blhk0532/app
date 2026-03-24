import ListMenus from './ListMenus'
import CreateMenu from './CreateMenu'
import EditMenu from './EditMenu'
import ManageMenuItems from './ManageMenuItems'

const Pages = {
    ListMenus: Object.assign(ListMenus, ListMenus),
    CreateMenu: Object.assign(CreateMenu, CreateMenu),
    EditMenu: Object.assign(EditMenu, EditMenu),
    ManageMenuItems: Object.assign(ManageMenuItems, ManageMenuItems),
}

export default Pages