import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
const IconSvgController = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: IconSvgController.url(args, options),
    method: 'get',
})

IconSvgController.definition = {
    methods: ["get","head"],
    url: '/filament-icon-picker/icon/{icon}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
IconSvgController.url = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { icon: args }
    }

    if (Array.isArray(args)) {
        args = {
            icon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        icon: args.icon,
    }

    return IconSvgController.definition.url
            .replace('{icon}', parsedArgs.icon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
IconSvgController.get = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: IconSvgController.url(args, options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
IconSvgController.head = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: IconSvgController.url(args, options),
    method: 'head',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
const IconSvgControllerForm = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconSvgController.url(args, options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
IconSvgControllerForm.get = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconSvgController.url(args, options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
IconSvgControllerForm.head = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconSvgController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

IconSvgController.form = IconSvgControllerForm

export default IconSvgController