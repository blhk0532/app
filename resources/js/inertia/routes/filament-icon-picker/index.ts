import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
export const icons = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: icons.url(options),
    method: 'get',
})

icons.definition = {
    methods: ["get","head"],
    url: '/filament-icon-picker/icons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
icons.url = (options?: RouteQueryOptions) => {
    return icons.definition.url + queryParams(options)
}

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
icons.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: icons.url(options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
icons.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: icons.url(options),
    method: 'head',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
const iconsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icons.url(options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
iconsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icons.url(options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconController.php:15
* @route '/filament-icon-picker/icons'
*/
iconsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icons.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

icons.form = iconsForm

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
export const icon = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: icon.url(args, options),
    method: 'get',
})

icon.definition = {
    methods: ["get","head"],
    url: '/filament-icon-picker/icon/{icon}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
icon.url = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return icon.definition.url
            .replace('{icon}', parsedArgs.icon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
icon.get = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: icon.url(args, options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
icon.head = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: icon.url(args, options),
    method: 'head',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
const iconForm = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icon.url(args, options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
iconForm.get = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icon.url(args, options),
    method: 'get',
})

/**
* @see \Wallacemartinss\FilamentIconPicker\Http\Controllers\IconSvgController::__invoke
* @see plugins/wallacemartinss/filament-icon-picker/src/Http/Controllers/IconSvgController.php:14
* @route '/filament-icon-picker/icon/{icon}'
*/
iconForm.head = (args: { icon: string | number } | [icon: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icon.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

icon.form = iconForm

const filamentIconPicker = {
    icons: Object.assign(icons, icons),
    icon: Object.assign(icon, icon),
}

export default filamentIconPicker