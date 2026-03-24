import CmsCategories from './CmsCategories'
import CmsPages from './CmsPages'
import CmsPosts from './CmsPosts'
import CmsComments from './CmsComments'
import TallcmsContactSubmissions from './TallcmsContactSubmissions'
import TallcmsMedia from './TallcmsMedia'
import MediaCollection from './MediaCollection'
import TallcmsMenus from './TallcmsMenus'
import Users from './Users'

const Resources = {
    CmsCategories: Object.assign(CmsCategories, CmsCategories),
    CmsPages: Object.assign(CmsPages, CmsPages),
    CmsPosts: Object.assign(CmsPosts, CmsPosts),
    CmsComments: Object.assign(CmsComments, CmsComments),
    TallcmsContactSubmissions: Object.assign(TallcmsContactSubmissions, TallcmsContactSubmissions),
    TallcmsMedia: Object.assign(TallcmsMedia, TallcmsMedia),
    MediaCollection: Object.assign(MediaCollection, MediaCollection),
    TallcmsMenus: Object.assign(TallcmsMenus, TallcmsMenus),
    Users: Object.assign(Users, Users),
}

export default Resources