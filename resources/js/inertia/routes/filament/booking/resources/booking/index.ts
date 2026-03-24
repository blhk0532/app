import dailyLocations from './daily-locations'
import servicePeriods from './service-periods'
import users from './users'

const booking = {
    dailyLocations: Object.assign(dailyLocations, dailyLocations),
    servicePeriods: Object.assign(servicePeriods, servicePeriods),
    users: Object.assign(users, users),
}

export default booking