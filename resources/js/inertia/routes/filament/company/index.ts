import auth from './auth'
import pages from './pages'

const company = {
    auth: Object.assign(auth, auth),
    pages: Object.assign(pages, pages),
}

export default company