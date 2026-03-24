import ButtonController from './ButtonController'
import WireUiAssetsController from './WireUiAssetsController'
import IconsController from './IconsController'

const Controllers = {
    ButtonController: Object.assign(ButtonController, ButtonController),
    WireUiAssetsController: Object.assign(WireUiAssetsController, WireUiAssetsController),
    IconsController: Object.assign(IconsController, IconsController),
}

export default Controllers