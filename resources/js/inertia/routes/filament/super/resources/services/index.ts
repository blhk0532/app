import bookings from './bookings'
import clients from './clients'

const services = {
    bookings: Object.assign(bookings, bookings),
    clients: Object.assign(clients, clients),
}

export default services