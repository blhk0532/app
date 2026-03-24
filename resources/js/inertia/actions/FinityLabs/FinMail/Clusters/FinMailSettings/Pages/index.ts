import ManageAttachmentSettings from './ManageAttachmentSettings'
import ManageAuthEmailSettings from './ManageAuthEmailSettings'
import ManageBrandingSettings from './ManageBrandingSettings'
import ManageGeneralSettings from './ManageGeneralSettings'
import ManageLoggingSettings from './ManageLoggingSettings'

const Pages = {
    ManageAttachmentSettings: Object.assign(ManageAttachmentSettings, ManageAttachmentSettings),
    ManageAuthEmailSettings: Object.assign(ManageAuthEmailSettings, ManageAuthEmailSettings),
    ManageBrandingSettings: Object.assign(ManageBrandingSettings, ManageBrandingSettings),
    ManageGeneralSettings: Object.assign(ManageGeneralSettings, ManageGeneralSettings),
    ManageLoggingSettings: Object.assign(ManageLoggingSettings, ManageLoggingSettings),
}

export default Pages