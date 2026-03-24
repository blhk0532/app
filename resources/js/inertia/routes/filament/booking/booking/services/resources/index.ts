import brands from './brands'
import categories from './categories'
import services from './services'

const resources = {
    brands: Object.assign(brands, brands),
    categories: Object.assign(categories, categories),
    services: Object.assign(services, services),
}

export default resources