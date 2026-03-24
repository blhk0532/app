import Pages from './Pages'
import Resources from './Resources'

const Super = {
    Pages: Object.assign(Pages, Pages),
    Resources: Object.assign(Resources, Resources),
}

export default Super