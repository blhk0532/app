import ListDailyLocations from './ListDailyLocations'
import CreateDailyLocation from './CreateDailyLocation'
import EditDailyLocation from './EditDailyLocation'

const Pages = {
    ListDailyLocations: Object.assign(ListDailyLocations, ListDailyLocations),
    CreateDailyLocation: Object.assign(CreateDailyLocation, CreateDailyLocation),
    EditDailyLocation: Object.assign(EditDailyLocation, EditDailyLocation),
}

export default Pages