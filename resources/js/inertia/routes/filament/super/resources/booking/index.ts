import bookingOutcallQueues from './booking-outcall-queues'
import customers from './customers'
import dailyLocations from './daily-locations'
import orders from './orders'
import servicePeriods from './service-periods'
import users from './users'

const booking = {
    bookingOutcallQueues: Object.assign(bookingOutcallQueues, bookingOutcallQueues),
    customers: Object.assign(customers, customers),
    dailyLocations: Object.assign(dailyLocations, dailyLocations),
    orders: Object.assign(orders, orders),
    servicePeriods: Object.assign(servicePeriods, servicePeriods),
    users: Object.assign(users, users),
}

export default booking