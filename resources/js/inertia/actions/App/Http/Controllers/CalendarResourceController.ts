import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
const CalendarResourceController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarResourceController.url(options),
    method: 'get',
})

CalendarResourceController.definition = {
    methods: ["get","head"],
    url: '/calendar/resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
CalendarResourceController.url = (options?: RouteQueryOptions) => {
    return CalendarResourceController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
CalendarResourceController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarResourceController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
CalendarResourceController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CalendarResourceController.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
const CalendarResourceControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarResourceController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
CalendarResourceControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarResourceController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CalendarResourceController::__invoke
* @see app/Http/Controllers/CalendarResourceController.php:13
* @route '/calendar/resources'
*/
CalendarResourceControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarResourceController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CalendarResourceController.form = CalendarResourceControllerForm

export default CalendarResourceController