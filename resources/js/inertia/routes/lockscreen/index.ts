import admin from './admin'
import superMethod from './super'

const lockscreen = {
    admin: Object.assign(admin, admin),
    super: Object.assign(superMethod, superMethod),
}

export default lockscreen