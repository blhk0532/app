import Products from './Products'
import Services from './Services'

const Clusters = {
    Products: Object.assign(Products, Products),
    Services: Object.assign(Services, Services),
}

export default Clusters