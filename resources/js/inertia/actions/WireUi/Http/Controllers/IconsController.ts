import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
const IconsController = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: IconsController.url(args, options),
    method: 'get',
})

IconsController.definition = {
    methods: ["get","head"],
    url: '/wireui/icons/{variant}/{icon}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
IconsController.url = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions) => {
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

    return IconsController.definition.url
            .replace('{variant}', parsedArgs.variant.toString())
            .replace('{icon}', parsedArgs.icon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
IconsController.get = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: IconsController.url(args, options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
IconsController.head = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: IconsController.url(args, options),
    method: 'head',
})

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
const IconsControllerForm = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconsController.url(args, options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
IconsControllerForm.get = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconsController.url(args, options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\IconsController::__invoke
* @see vendor/wireui/wireui/src/Http/Controllers/IconsController.php:12
* @route '/wireui/icons/{variant}/{icon}'
*/
IconsControllerForm.head = (args: { variant: string | number, icon: string | number } | [variant: string | number, icon: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: IconsController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

IconsController.form = IconsControllerForm

export default IconsController