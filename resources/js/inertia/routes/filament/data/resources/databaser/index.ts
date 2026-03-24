import eniroData from './eniro-data'
import hittaData from './hitta-data'
import merinfoData from './merinfo-data'
import ratsitData from './ratsit-data'
import ratsitPersons from './ratsit-persons'
import ratsitStreets from './ratsit-streets'
import upplysningData from './upplysning-data'

const databaser = {
    eniroData: Object.assign(eniroData, eniroData),
    hittaData: Object.assign(hittaData, hittaData),
    merinfoData: Object.assign(merinfoData, merinfoData),
    ratsitData: Object.assign(ratsitData, ratsitData),
    ratsitPersons: Object.assign(ratsitPersons, ratsitPersons),
    ratsitStreets: Object.assign(ratsitStreets, ratsitStreets),
    upplysningData: Object.assign(upplysningData, upplysningData),
}

export default databaser