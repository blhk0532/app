import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
export const button = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: button.url(options),
    method: 'get',
})

button.definition = {
    methods: ["get","head"],
    url: '/wireui/button',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
button.url = (options?: RouteQueryOptions) => {
    return button.definition.url + queryParams(options)
}

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
button.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: button.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
button.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: button.url(options),
    method: 'head',
})

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
const buttonForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: button.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
buttonForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: button.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\ButtonController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/ButtonController.php:12
* @route '/wireui/button'
*/
buttonForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: button.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

button.form = buttonForm

const render = {
    button: Object.assign(button, button),
}

export default render