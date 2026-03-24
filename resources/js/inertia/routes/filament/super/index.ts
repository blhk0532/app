import auth from './auth'
import pages from './pages'
import booking from './booking'
import resources from './resources'

const superMethod = {
    auth: Object.assign(auth, auth),
    pages: Object.assign(pages, pages),
    booking: Object.assign(booking, booking),
    resources: Object.assign(resources, resources),
}

export default superMethod