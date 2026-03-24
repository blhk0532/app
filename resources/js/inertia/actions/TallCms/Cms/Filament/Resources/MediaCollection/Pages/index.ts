import ListMediaCollections from './ListMediaCollections'
import CreateMediaCollection from './CreateMediaCollection'
import EditMediaCollection from './EditMediaCollection'

const Pages = {
    ListMediaCollections: Object.assign(ListMediaCollections, ListMediaCollections),
    CreateMediaCollection: Object.assign(CreateMediaCollection, CreateMediaCollection),
    EditMediaCollection: Object.assign(EditMediaCollection, EditMediaCollection),
}

export default Pages