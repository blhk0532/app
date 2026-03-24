import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
const QueueController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueController.url(options),
    method: 'get',
})

QueueController.definition = {
    methods: ["get","head"],
    url: '/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
QueueController.url = (options?: RouteQueryOptions) => {
    return QueueController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
QueueController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
QueueController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: QueueController.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
const QueueControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
QueueControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QueueController::__invoke
* @see app/Http/Controllers/QueueController.php:13
* @route '/queue'
*/
QueueControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

QueueController.form = QueueControllerForm

export default QueueController