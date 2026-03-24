import RedirectToHomeController from './RedirectToHomeController'
import RedirectToTenantController from './RedirectToTenantController'

const Controllers = {
    RedirectToHomeController: Object.assign(RedirectToHomeController, RedirectToHomeController),
    RedirectToTenantController: Object.assign(RedirectToTenantController, RedirectToTenantController),
}

export default Controllers