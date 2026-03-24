import searches from './searches'
import services from './services'
import bookingCalendars from './booking-calendars'
import booking from './booking'

const resources = {
    searches: Object.assign(searches, searches),
    services: Object.assign(services, services),
    bookingCalendars: Object.assign(bookingCalendars, bookingCalendars),
    booking: Object.assign(booking, booking),
}

export default resources