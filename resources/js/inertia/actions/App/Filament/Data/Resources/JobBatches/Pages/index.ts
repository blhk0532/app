import ListJobBatches from './ListJobBatches'
import CreateJobBatch from './CreateJobBatch'
import ViewJobBatch from './ViewJobBatch'
import EditJobBatch from './EditJobBatch'

const Pages = {
    ListJobBatches: Object.assign(ListJobBatches, ListJobBatches),
    CreateJobBatch: Object.assign(CreateJobBatch, CreateJobBatch),
    ViewJobBatch: Object.assign(ViewJobBatch, ViewJobBatch),
    EditJobBatch: Object.assign(EditJobBatch, EditJobBatch),
}

export default Pages