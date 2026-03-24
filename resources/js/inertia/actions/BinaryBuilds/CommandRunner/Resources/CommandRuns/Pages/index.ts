import RunCommand from './RunCommand'
import ListCommandRuns from './ListCommandRuns'
import ViewCommandRun from './ViewCommandRun'

const Pages = {
    RunCommand: Object.assign(RunCommand, RunCommand),
    ListCommandRuns: Object.assign(ListCommandRuns, ListCommandRuns),
    ViewCommandRun: Object.assign(ViewCommandRun, ViewCommandRun),
}

export default Pages