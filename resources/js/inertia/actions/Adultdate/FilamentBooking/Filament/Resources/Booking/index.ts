import DailyLocations from './DailyLocations'
import ServicePeriods from './ServicePeriods'
import Users from './Users'
import BookingOutcallQueues from './BookingOutcallQueues'
import Customers from './Customers'
import Orders from './Orders'

const Booking = {
    DailyLocations: Object.assign(DailyLocations, DailyLocations),
    ServicePeriods: Object.assign(ServicePeriods, ServicePeriods),
    Users: Object.assign(Users, Users),
    BookingOutcallQueues: Object.assign(BookingOutcallQueues, BookingOutcallQueues),
    Customers: Object.assign(Customers, Customers),
    Orders: Object.assign(Orders, Orders),
}

export default Booking