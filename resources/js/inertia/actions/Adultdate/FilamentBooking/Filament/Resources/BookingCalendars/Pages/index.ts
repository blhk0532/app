import ListBookingCalendars from './ListBookingCalendars'
import CreateBookingCalendar from './CreateBookingCalendar'
import EditBookingCalendar from './EditBookingCalendar'

const Pages = {
    ListBookingCalendars: Object.assign(ListBookingCalendars, ListBookingCalendars),
    CreateBookingCalendar: Object.assign(CreateBookingCalendar, CreateBookingCalendar),
    EditBookingCalendar: Object.assign(EditBookingCalendar, EditBookingCalendar),
}

export default Pages