import FinMailSettings from './FinMailSettings'
import Pages from './Pages'

const FinMailSettingsNamespace = {
    FinMailSettings: Object.assign(FinMailSettings, FinMailSettings),
    Pages: Object.assign(Pages, Pages),
}

export default FinMailSettingsNamespace