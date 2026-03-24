import ratsitData from './ratsit-data'
import ratsitPersons from './ratsit-persons'
import ratsitStreets from './ratsit-streets'

const databaser = {
    ratsitData: Object.assign(ratsitData, ratsitData),
    ratsitPersons: Object.assign(ratsitPersons, ratsitPersons),
    ratsitStreets: Object.assign(ratsitStreets, ratsitStreets),
}

export default databaser