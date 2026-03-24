import ListCmsPosts from './ListCmsPosts'
import CreateCmsPost from './CreateCmsPost'
import EditCmsPost from './EditCmsPost'

const Pages = {
    ListCmsPosts: Object.assign(ListCmsPosts, ListCmsPosts),
    CreateCmsPost: Object.assign(CreateCmsPost, CreateCmsPost),
    EditCmsPost: Object.assign(EditCmsPost, EditCmsPost),
}

export default Pages