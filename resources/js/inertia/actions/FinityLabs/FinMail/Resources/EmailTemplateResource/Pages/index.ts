import ListEmailTemplates from './ListEmailTemplates'
import CreateEmailTemplate from './CreateEmailTemplate'
import EditEmailTemplate from './EditEmailTemplate'
import ViewEmailTemplate from './ViewEmailTemplate'
import ComposeEmail from './ComposeEmail'

const Pages = {
    ListEmailTemplates: Object.assign(ListEmailTemplates, ListEmailTemplates),
    CreateEmailTemplate: Object.assign(CreateEmailTemplate, CreateEmailTemplate),
    EditEmailTemplate: Object.assign(EditEmailTemplate, EditEmailTemplate),
    ViewEmailTemplate: Object.assign(ViewEmailTemplate, ViewEmailTemplate),
    ComposeEmail: Object.assign(ComposeEmail, ComposeEmail),
}

export default Pages