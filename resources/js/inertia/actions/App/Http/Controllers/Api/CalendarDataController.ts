import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\CalendarDataController::clients
* @see app/Http/Controllers/Api/CalendarDataController.php:20
* @route '/api/calendar/clients'
*/
export const clients = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clients.url(options),
    method: 'get',
})

clients.definition = {
    methods: ["get","head"],
    url: '/api/calendar/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarDataController::clients
* @see app/Http/Controllers/Api/CalendarDataController.php:20
* @route '/api/calendar/clients'
*/
clients.url = (options?: RouteQueryOptions) => {
    return clients.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarDataController::clients
* @see app/Http/Controllers/Api/CalendarDataController.php:20
* @route '/api/calendar/clients'
*/
clients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clients.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::clients
* @see app/Http/Controllers/Api/CalendarDataController.php:20
* @route '/api/calendar/clients'
*/
clients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clients.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::clients
* @see app/Http/Controllers/Api/CalendarDataController.php:20
* @route '/api/calendar/clients'
*/
const clientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clients.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::clients
* @see app/Http/Controllers/Api/CalendarDataController.php:20
* @route '/api/calendar/clients'
*/
clientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clients.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::clients
* @see app/Http/Controllers/Api/CalendarDataController.php:20
* @route '/api/calendar/clients'
*/
clientsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clients.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

clients.form = clientsForm

/**
* @see \App\Http\Controllers\Api\CalendarDataController::store
* @see app/Http/Controllers/Api/CalendarDataController.php:45
* @route '/api/calendar/clients'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/calendar/clients',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\CalendarDataController::store
* @see app/Http/Controllers/Api/CalendarDataController.php:45
* @route '/api/calendar/clients'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarDataController::store
* @see app/Http/Controllers/Api/CalendarDataController.php:45
* @route '/api/calendar/clients'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::store
* @see app/Http/Controllers/Api/CalendarDataController.php:45
* @route '/api/calendar/clients'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::store
* @see app/Http/Controllers/Api/CalendarDataController.php:45
* @route '/api/calendar/clients'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\CalendarDataController::services
* @see app/Http/Controllers/Api/CalendarDataController.php:67
* @route '/api/calendar/services'
*/
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/api/calendar/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarDataController::services
* @see app/Http/Controllers/Api/CalendarDataController.php:67
* @route '/api/calendar/services'
*/
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarDataController::services
* @see app/Http/Controllers/Api/CalendarDataController.php:67
* @route '/api/calendar/services'
*/
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::services
* @see app/Http/Controllers/Api/CalendarDataController.php:67
* @route '/api/calendar/services'
*/
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::services
* @see app/Http/Controllers/Api/CalendarDataController.php:67
* @route '/api/calendar/services'
*/
const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::services
* @see app/Http/Controllers/Api/CalendarDataController.php:67
* @route '/api/calendar/services'
*/
servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::services
* @see app/Http/Controllers/Api/CalendarDataController.php:67
* @route '/api/calendar/services'
*/
servicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

services.form = servicesForm

/**
* @see \App\Http\Controllers\Api\CalendarDataController::locations
* @see app/Http/Controllers/Api/CalendarDataController.php:91
* @route '/api/calendar/locations'
*/
export const locations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: locations.url(options),
    method: 'get',
})

locations.definition = {
    methods: ["get","head"],
    url: '/api/calendar/locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarDataController::locations
* @see app/Http/Controllers/Api/CalendarDataController.php:91
* @route '/api/calendar/locations'
*/
locations.url = (options?: RouteQueryOptions) => {
    return locations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarDataController::locations
* @see app/Http/Controllers/Api/CalendarDataController.php:91
* @route '/api/calendar/locations'
*/
locations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: locations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::locations
* @see app/Http/Controllers/Api/CalendarDataController.php:91
* @route '/api/calendar/locations'
*/
locations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: locations.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::locations
* @see app/Http/Controllers/Api/CalendarDataController.php:91
* @route '/api/calendar/locations'
*/
const locationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: locations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::locations
* @see app/Http/Controllers/Api/CalendarDataController.php:91
* @route '/api/calendar/locations'
*/
locationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: locations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::locations
* @see app/Http/Controllers/Api/CalendarDataController.php:91
* @route '/api/calendar/locations'
*/
locationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: locations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

locations.form = locationsForm

/**
* @see \App\Http\Controllers\Api\CalendarDataController::serviceUsers
* @see app/Http/Controllers/Api/CalendarDataController.php:114
* @route '/api/calendar/service-users'
*/
export const serviceUsers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serviceUsers.url(options),
    method: 'get',
})

serviceUsers.definition = {
    methods: ["get","head"],
    url: '/api/calendar/service-users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarDataController::serviceUsers
* @see app/Http/Controllers/Api/CalendarDataController.php:114
* @route '/api/calendar/service-users'
*/
serviceUsers.url = (options?: RouteQueryOptions) => {
    return serviceUsers.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarDataController::serviceUsers
* @see app/Http/Controllers/Api/CalendarDataController.php:114
* @route '/api/calendar/service-users'
*/
serviceUsers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serviceUsers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::serviceUsers
* @see app/Http/Controllers/Api/CalendarDataController.php:114
* @route '/api/calendar/service-users'
*/
serviceUsers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: serviceUsers.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::serviceUsers
* @see app/Http/Controllers/Api/CalendarDataController.php:114
* @route '/api/calendar/service-users'
*/
const serviceUsersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serviceUsers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::serviceUsers
* @see app/Http/Controllers/Api/CalendarDataController.php:114
* @route '/api/calendar/service-users'
*/
serviceUsersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serviceUsers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::serviceUsers
* @see app/Http/Controllers/Api/CalendarDataController.php:114
* @route '/api/calendar/service-users'
*/
serviceUsersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serviceUsers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

serviceUsers.form = serviceUsersForm

/**
* @see \App\Http\Controllers\Api\CalendarDataController::calendars
* @see app/Http/Controllers/Api/CalendarDataController.php:149
* @route '/api/calendar/calendars'
*/
export const calendars = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendars.url(options),
    method: 'get',
})

calendars.definition = {
    methods: ["get","head"],
    url: '/api/calendar/calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarDataController::calendars
* @see app/Http/Controllers/Api/CalendarDataController.php:149
* @route '/api/calendar/calendars'
*/
calendars.url = (options?: RouteQueryOptions) => {
    return calendars.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarDataController::calendars
* @see app/Http/Controllers/Api/CalendarDataController.php:149
* @route '/api/calendar/calendars'
*/
calendars.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendars.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::calendars
* @see app/Http/Controllers/Api/CalendarDataController.php:149
* @route '/api/calendar/calendars'
*/
calendars.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendars.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::calendars
* @see app/Http/Controllers/Api/CalendarDataController.php:149
* @route '/api/calendar/calendars'
*/
const calendarsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendars.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::calendars
* @see app/Http/Controllers/Api/CalendarDataController.php:149
* @route '/api/calendar/calendars'
*/
calendarsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendars.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::calendars
* @see app/Http/Controllers/Api/CalendarDataController.php:149
* @route '/api/calendar/calendars'
*/
calendarsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendars.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendars.form = calendarsForm

/**
* @see \App\Http\Controllers\Api\CalendarDataController::categories
* @see app/Http/Controllers/Api/CalendarDataController.php:171
* @route '/api/calendar/categories'
*/
export const categories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

categories.definition = {
    methods: ["get","head"],
    url: '/api/calendar/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarDataController::categories
* @see app/Http/Controllers/Api/CalendarDataController.php:171
* @route '/api/calendar/categories'
*/
categories.url = (options?: RouteQueryOptions) => {
    return categories.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarDataController::categories
* @see app/Http/Controllers/Api/CalendarDataController.php:171
* @route '/api/calendar/categories'
*/
categories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::categories
* @see app/Http/Controllers/Api/CalendarDataController.php:171
* @route '/api/calendar/categories'
*/
categories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categories.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::categories
* @see app/Http/Controllers/Api/CalendarDataController.php:171
* @route '/api/calendar/categories'
*/
const categoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::categories
* @see app/Http/Controllers/Api/CalendarDataController.php:171
* @route '/api/calendar/categories'
*/
categoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::categories
* @see app/Http/Controllers/Api/CalendarDataController.php:171
* @route '/api/calendar/categories'
*/
categoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categories.form = categoriesForm

/**
* @see \App\Http\Controllers\Api\CalendarDataController::bookingStats
* @see app/Http/Controllers/Api/CalendarDataController.php:188
* @route '/api/calendar/stats'
*/
export const bookingStats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingStats.url(options),
    method: 'get',
})

bookingStats.definition = {
    methods: ["get","head"],
    url: '/api/calendar/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CalendarDataController::bookingStats
* @see app/Http/Controllers/Api/CalendarDataController.php:188
* @route '/api/calendar/stats'
*/
bookingStats.url = (options?: RouteQueryOptions) => {
    return bookingStats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CalendarDataController::bookingStats
* @see app/Http/Controllers/Api/CalendarDataController.php:188
* @route '/api/calendar/stats'
*/
bookingStats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bookingStats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::bookingStats
* @see app/Http/Controllers/Api/CalendarDataController.php:188
* @route '/api/calendar/stats'
*/
bookingStats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bookingStats.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::bookingStats
* @see app/Http/Controllers/Api/CalendarDataController.php:188
* @route '/api/calendar/stats'
*/
const bookingStatsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingStats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::bookingStats
* @see app/Http/Controllers/Api/CalendarDataController.php:188
* @route '/api/calendar/stats'
*/
bookingStatsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingStats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CalendarDataController::bookingStats
* @see app/Http/Controllers/Api/CalendarDataController.php:188
* @route '/api/calendar/stats'
*/
bookingStatsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bookingStats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bookingStats.form = bookingStatsForm

const CalendarDataController = { clients, store, services, locations, serviceUsers, calendars, categories, bookingStats }

export default CalendarDataController