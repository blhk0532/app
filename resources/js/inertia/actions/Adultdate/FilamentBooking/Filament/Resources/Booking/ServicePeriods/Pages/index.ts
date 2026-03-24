import ListBookingServicePeriods from './ListBookingServicePeriods'
import CreateBookingServicePeriod from './CreateBookingServicePeriod'
import ViewBookingServicePeriod from './ViewBookingServicePeriod'
import EditBookingServicePeriod from './EditBookingServicePeriod'

const Pages = {
    ListBookingServicePeriods: Object.assign(ListBookingServicePeriods, ListBookingServicePeriods),
    CreateBookingServicePeriod: Object.assign(CreateBookingServicePeriod, CreateBookingServicePeriod),
    ViewBookingServicePeriod: Object.assign(ViewBookingServicePeriod, ViewBookingServicePeriod),
    EditBookingServicePeriod: Object.assign(EditBookingServicePeriod, EditBookingServicePeriod),
}

export default Pages