import Fortify from './Fortify'
import Horizon from './Horizon'
import Passport from './Passport'
import Sanctum from './Sanctum'

const Laravel = {
    Fortify: Object.assign(Fortify, Fortify),
    Horizon: Object.assign(Horizon, Horizon),
    Passport: Object.assign(Passport, Passport),
    Sanctum: Object.assign(Sanctum, Sanctum),
}

export default Laravel