import DashboardBokning from './DashboardBokning'
import DashboardBooking from './DashboardBooking'
import SingleCalendar from './SingleCalendar'
import ListBookings from './ListBookings'
import CreateBooking from './CreateBooking'
import EditBooking from './EditBooking'

const Pages = {
    DashboardBokning: Object.assign(DashboardBokning, DashboardBokning),
    DashboardBooking: Object.assign(DashboardBooking, DashboardBooking),
    SingleCalendar: Object.assign(SingleCalendar, SingleCalendar),
    ListBookings: Object.assign(ListBookings, ListBookings),
    CreateBooking: Object.assign(CreateBooking, CreateBooking),
    EditBooking: Object.assign(EditBooking, EditBooking),
}

export default Pages