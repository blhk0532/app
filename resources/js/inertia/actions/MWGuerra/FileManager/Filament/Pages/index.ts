import FileManagerBase from './FileManagerBase'
import FileSystem from './FileSystem'
import SchemaExample from './SchemaExample'

const Pages = {
    FileManagerBase: Object.assign(FileManagerBase, FileManagerBase),
    FileSystem: Object.assign(FileSystem, FileSystem),
    SchemaExample: Object.assign(SchemaExample, SchemaExample),
}

export default Pages