import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::styles
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:16
* @route '/wireui/assets/styles'
*/
export const styles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: styles.url(options),
    method: 'get',
})

styles.definition = {
    methods: ["get","head"],
    url: '/wireui/assets/styles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::styles
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:16
* @route '/wireui/assets/styles'
*/
styles.url = (options?: RouteQueryOptions) => {
    return styles.definition.url + queryParams(options)
}

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::styles
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:16
* @route '/wireui/assets/styles'
*/
styles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: styles.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::styles
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:16
* @route '/wireui/assets/styles'
*/
styles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: styles.url(options),
    method: 'head',
})

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::styles
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:16
* @route '/wireui/assets/styles'
*/
const stylesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: styles.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::styles
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:16
* @route '/wireui/assets/styles'
*/
stylesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: styles.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::styles
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:16
* @route '/wireui/assets/styles'
*/
stylesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: styles.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

styles.form = stylesForm

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::scripts
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:11
* @route '/wireui/assets/scripts'
*/
export const scripts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scripts.url(options),
    method: 'get',
})

scripts.definition = {
    methods: ["get","head"],
    url: '/wireui/assets/scripts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::scripts
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:11
* @route '/wireui/assets/scripts'
*/
scripts.url = (options?: RouteQueryOptions) => {
    return scripts.definition.url + queryParams(options)
}

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::scripts
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:11
* @route '/wireui/assets/scripts'
*/
scripts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scripts.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::scripts
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:11
* @route '/wireui/assets/scripts'
*/
scripts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: scripts.url(options),
    method: 'head',
})

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::scripts
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:11
* @route '/wireui/assets/scripts'
*/
const scriptsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: scripts.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::scripts
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:11
* @route '/wireui/assets/scripts'
*/
scriptsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: scripts.url(options),
    method: 'get',
})

/**
* @see \WireUi\Http\Controllers\WireUiAssetsController::scripts
* @see vendor/wireui/wireui/src/Http/Controllers/WireUiAssetsController.php:11
* @route '/wireui/assets/scripts'
*/
scriptsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: scripts.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

scripts.form = scriptsForm

const assets = {
    styles: Object.assign(styles, styles),
    scripts: Object.assign(scripts, scripts),
}

export default assets