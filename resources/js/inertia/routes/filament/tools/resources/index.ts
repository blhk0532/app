import searches from './searches'
import failedJobs from './failed-jobs'
import exceptions from './exceptions'
import commandRunner from './command-runner'

const resources = {
    searches: Object.assign(searches, searches),
    failedJobs: Object.assign(failedJobs, failedJobs),
    exceptions: Object.assign(exceptions, exceptions),
    commandRunner: Object.assign(commandRunner, commandRunner),
}

export default resources