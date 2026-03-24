import WhatsappsController from './WhatsappsController'
import RedirectController from './RedirectController'

const Controllers = {
    WhatsappsController: Object.assign(WhatsappsController, WhatsappsController),
    RedirectController: Object.assign(RedirectController, RedirectController),
}

export default Controllers