import ListPostNums from './ListPostNums'
import CreatePostNum from './CreatePostNum'
import ViewPostNum from './ViewPostNum'
import EditPostNum from './EditPostNum'

const Pages = {
    ListPostNums: Object.assign(ListPostNums, ListPostNums),
    CreatePostNum: Object.assign(CreatePostNum, CreatePostNum),
    ViewPostNum: Object.assign(ViewPostNum, ViewPostNum),
    EditPostNum: Object.assign(EditPostNum, EditPostNum),
}

export default Pages