import ListNotificationEvents from './ListNotificationEvents'
import CreateNotificationEvent from './CreateNotificationEvent'
import EditNotificationEvent from './EditNotificationEvent'

const Pages = {
    ListNotificationEvents: Object.assign(ListNotificationEvents, ListNotificationEvents),
    CreateNotificationEvent: Object.assign(CreateNotificationEvent, CreateNotificationEvent),
    EditNotificationEvent: Object.assign(EditNotificationEvent, EditNotificationEvent),
}

export default Pages