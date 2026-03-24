import ListSearches from './ListSearches'
import CreateSearch from './CreateSearch'
import ViewSearch from './ViewSearch'
import EditSearch from './EditSearch'

const Pages = {
    ListSearches: Object.assign(ListSearches, ListSearches),
    CreateSearch: Object.assign(CreateSearch, CreateSearch),
    ViewSearch: Object.assign(ViewSearch, ViewSearch),
    EditSearch: Object.assign(EditSearch, EditSearch),
}

export default Pages