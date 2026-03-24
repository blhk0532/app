import ListNotificationChannels from './ListNotificationChannels'
import CreateNotificationChannel from './CreateNotificationChannel'
import EditNotificationChannel from './EditNotificationChannel'

const Pages = {
    ListNotificationChannels: Object.assign(ListNotificationChannels, ListNotificationChannels),
    CreateNotificationChannel: Object.assign(CreateNotificationChannel, CreateNotificationChannel),
    EditNotificationChannel: Object.assign(EditNotificationChannel, EditNotificationChannel),
}

export default Pages