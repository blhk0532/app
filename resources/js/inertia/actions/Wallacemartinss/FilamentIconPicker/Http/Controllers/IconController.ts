import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
const IconController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: IconController.url(options),
    method: 'get',
})

IconController.definition = {
    methods: ["get","head"],
    url: '/filament-icon-picker/icons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
IconController.url = (options?: RouteQueryOptions) => {
    return IconController.definition.url + queryParams(options)
}

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
IconController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: IconController.url(options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
IconController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: IconController.url(options),
    method: 'head',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
const IconControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconController.url(options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
IconControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconController.url(options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
IconControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

IconController.form = IconControllerForm

export default IconController