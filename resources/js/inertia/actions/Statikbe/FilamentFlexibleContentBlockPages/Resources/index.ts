import PageResource from './PageResource'
import SettingsResource from './SettingsResource'
import RedirectResource from './RedirectResource'
import TagResource from './TagResource'
import TagTypeResource from './TagTypeResource'
import MenuResource from './MenuResource'

const Resources = {
    PageResource: Object.assign(PageResource, PageResource),
    SettingsResource: Object.assign(SettingsResource, SettingsResource),
    RedirectResource: Object.assign(RedirectResource, RedirectResource),
    TagResource: Object.assign(TagResource, TagResource),
    TagTypeResource: Object.assign(TagTypeResource, TagTypeResource),
    MenuResource: Object.assign(MenuResource, MenuResource),
}

export default Resources