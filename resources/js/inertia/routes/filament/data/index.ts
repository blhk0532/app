import auth from './auth'
import pages from './pages'
import resources from './resources'

const data = {
    auth: Object.assign(auth, auth),
    pages: Object.assign(pages, pages),
    resources: Object.assign(resources, resources),
}

export default data