import Bookings from './Bookings'
import Brands from './Brands'
import Categories from './Categories'
import Clients from './Clients'
import Services from './Services'

const Resources = {
    Bookings: Object.assign(Bookings, Bookings),
    Brands: Object.assign(Brands, Brands),
    Categories: Object.assign(Categories, Categories),
    Clients: Object.assign(Clients, Clients),
    Services: Object.assign(Services, Services),
}

export default Resources