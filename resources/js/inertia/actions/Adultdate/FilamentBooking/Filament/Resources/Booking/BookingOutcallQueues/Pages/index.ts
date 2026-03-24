import ListBookingOutcallQueues from './ListBookingOutcallQueues'
import CreateBookingOutcallQueue from './CreateBookingOutcallQueue'
import ViewBookingOutcallQueue from './ViewBookingOutcallQueue'
import EditBookingOutcallQueue from './EditBookingOutcallQueue'

const Pages = {
    ListBookingOutcallQueues: Object.assign(ListBookingOutcallQueues, ListBookingOutcallQueues),
    CreateBookingOutcallQueue: Object.assign(CreateBookingOutcallQueue, CreateBookingOutcallQueue),
    ViewBookingOutcallQueue: Object.assign(ViewBookingOutcallQueue, ViewBookingOutcallQueue),
    EditBookingOutcallQueue: Object.assign(EditBookingOutcallQueue, EditBookingOutcallQueue),
}

export default Pages