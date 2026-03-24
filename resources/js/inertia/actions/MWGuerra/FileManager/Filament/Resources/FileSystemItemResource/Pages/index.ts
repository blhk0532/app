import ListFileSystemItems from './ListFileSystemItems'
import CreateFileSystemItem from './CreateFileSystemItem'
import EditFileSystemItem from './EditFileSystemItem'

const Pages = {
    ListFileSystemItems: Object.assign(ListFileSystemItems, ListFileSystemItems),
    CreateFileSystemItem: Object.assign(CreateFileSystemItem, CreateFileSystemItem),
    EditFileSystemItem: Object.assign(EditFileSystemItem, EditFileSystemItem),
}

export default Pages