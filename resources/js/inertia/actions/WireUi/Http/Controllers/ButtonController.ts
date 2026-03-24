import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
const ButtonController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ButtonController.url(options),
    method: 'get',
})

ButtonController.definition = {
    methods: ["get","head"],
    url: '/wireui/button',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
ButtonController.url = (options?: RouteQueryOptions) => {
    return ButtonController.definition.url + queryParams(options)
}

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
ButtonController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ButtonController.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
ButtonController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ButtonController.url(options),
    method: 'head',
})

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
const ButtonControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ButtonController.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
ButtonControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ButtonController.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
ButtonControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ButtonController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ButtonController.form = ButtonControllerForm

export default ButtonController