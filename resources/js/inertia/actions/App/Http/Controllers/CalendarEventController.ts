import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
const CalendarEventController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarEventController.url(options),
    method: 'get',
})

CalendarEventController.definition = {
    methods: ["get","head"],
    url: '/calendar/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
CalendarEventController.url = (options?: RouteQueryOptions) => {
    return CalendarEventController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
CalendarEventController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarEventController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
CalendarEventController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CalendarEventController.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
const CalendarEventControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarEventController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
CalendarEventControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarEventController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarEventController::__invoke
* @see app/Http/Controllers/CalendarEventController.php:13
* @route '/calendar/events'
*/
CalendarEventControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarEventController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CalendarEventController.form = CalendarEventControllerForm

export default CalendarEventController