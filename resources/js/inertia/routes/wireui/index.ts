import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import render from './render'
import assets from './assets'
/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
export const icons = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: icons.url(args, options),
    method: 'get',
})

icons.definition = {
    methods: ["get","head"],
    url: '/wireui/icons/{variant}/{icon}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
icons.url = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            variant: args[0],
            icon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        variant: args.variant,
        icon: args.icon,
    }

    return icons.definition.url
            .replace('{variant}', parsedArgs.variant.toString())
            .replace('{icon}', parsedArgs.icon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
icons.get = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: icons.url(args, options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
icons.head = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: icons.url(args, options),
    method: 'head',
})

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
const iconsForm = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icons.url(args, options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
iconsForm.get = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icons.url(args, options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
iconsForm.head = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: icons.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

icons.form = iconsForm

const wireui = {
    render: Object.assign(render, render),
    assets: Object.assign(assets, assets),
    icons: Object.assign(icons, icons),
}

export default wireui