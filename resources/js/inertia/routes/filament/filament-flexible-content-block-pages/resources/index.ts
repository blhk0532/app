import pages from './pages'
import settings from './settings'
import redirects from './redirects'
import tags from './tags'
import tagTypes from './tag-types'
import menus from './menus'

const resources = {
    pages: Object.assign(pages, pages),
    settings: Object.assign(settings, settings),
    redirects: Object.assign(redirects, redirects),
    tags: Object.assign(tags, tags),
    tagTypes: Object.assign(tagTypes, tagTypes),
    menus: Object.assign(menus, menus),
}

export default resources