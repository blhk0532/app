import ListBookings from './ListBookings'
import CreateBooking from './CreateBooking'
import EditBooking from './EditBooking'

const Pages = {
    ListBookings: Object.assign(ListBookings, ListBookings),
    CreateBooking: Object.assign(CreateBooking, CreateBooking),
    EditBooking: Object.assign(EditBooking, EditBooking),
}

export default Pages