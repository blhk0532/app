import searches from './searches'
import cmsCategories from './cms-categories'
import cmsPages from './cms-pages'
import cmsPosts from './cms-posts'
import cmsComments from './cms-comments'
import tallcmsContactSubmissions from './tallcms-contact-submissions'
import tallcmsMedia from './tallcms-media'
import mediaCollection from './media-collection'
import tallcmsMenus from './tallcms-menus'
import users from './users'
import shield from './shield'
import pages from './pages'

const resources = {
    searches: Object.assign(searches, searches),
    cmsCategories: Object.assign(cmsCategories, cmsCategories),
    cmsPages: Object.assign(cmsPages, cmsPages),
    cmsPosts: Object.assign(cmsPosts, cmsPosts),
    cmsComments: Object.assign(cmsComments, cmsComments),
    tallcmsContactSubmissions: Object.assign(tallcmsContactSubmissions, tallcmsContactSubmissions),
    tallcmsMedia: Object.assign(tallcmsMedia, tallcmsMedia),
    mediaCollection: Object.assign(mediaCollection, mediaCollection),
    tallcmsMenus: Object.assign(tallcmsMenus, tallcmsMenus),
    users: Object.assign(users, users),
    shield: Object.assign(shield, shield),
    pages: Object.assign(pages, pages),
}

export default resources