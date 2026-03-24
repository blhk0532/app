import carryData from './carry-data'
import databaser from './databaser'
import hittaSes from './hitta-ses'
import jobBatches from './job-batches'
import jobs from './jobs'
import merinfos from './merinfos'
import postNums from './post-nums'
import privateData from './private-data'
import ratsitAdresser from './ratsit-adresser'
import ratsitKommuner from './ratsit-kommuner'
import ratsitPostorter from './ratsit-postorter'
import sverigePostnummer from './sverige-postnummer'

const resources = {
    carryData: Object.assign(carryData, carryData),
    databaser: Object.assign(databaser, databaser),
    hittaSes: Object.assign(hittaSes, hittaSes),
    jobBatches: Object.assign(jobBatches, jobBatches),
    jobs: Object.assign(jobs, jobs),
    merinfos: Object.assign(merinfos, merinfos),
    postNums: Object.assign(postNums, postNums),
    privateData: Object.assign(privateData, privateData),
    ratsitAdresser: Object.assign(ratsitAdresser, ratsitAdresser),
    ratsitKommuner: Object.assign(ratsitKommuner, ratsitKommuner),
    ratsitPostorter: Object.assign(ratsitPostorter, ratsitPostorter),
    sverigePostnummer: Object.assign(sverigePostnummer, sverigePostnummer),
}

export default resources