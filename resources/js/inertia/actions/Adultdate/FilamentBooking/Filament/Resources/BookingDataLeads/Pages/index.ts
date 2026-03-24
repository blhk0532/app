import ListBookingDataLeads from './ListBookingDataLeads'
import CreateBookingDataLead from './CreateBookingDataLead'
import ViewBookingDataLead from './ViewBookingDataLead'
import EditBookingDataLead from './EditBookingDataLead'

const Pages = {
    ListBookingDataLeads: Object.assign(ListBookingDataLeads, ListBookingDataLeads),
    CreateBookingDataLead: Object.assign(CreateBookingDataLead, CreateBookingDataLead),
    ViewBookingDataLead: Object.assign(ViewBookingDataLead, ViewBookingDataLead),
    EditBookingDataLead: Object.assign(EditBookingDataLead, EditBookingDataLead),
}

export default Pages