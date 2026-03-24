import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
export const events = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: events.url(options),
    method: 'get',
})

events.definition = {
    methods: ["get","head"],
    url: '/calendar/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
events.url = (options?: RouteQueryOptions) => {
    return events.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
events.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: events.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
events.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: events.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
const eventsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: events.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
eventsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: events.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
eventsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: events.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

events.form = eventsForm

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
export const resources = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resources.url(options),
    method: 'get',
})

resources.definition = {
    methods: ["get","head"],
    url: '/calendar/resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
resources.url = (options?: RouteQueryOptions) => {
    return resources.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
resources.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resources.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
resources.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: resources.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
const resourcesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resources.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
resourcesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resources.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
resourcesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resources.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

resources.form = resourcesForm

const calendar = {
    events: Object.assign(events, events),
    resources: Object.assign(resources, resources),
}

export default calendar