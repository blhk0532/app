import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Http\Controllers\RobotsController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/RobotsController.php:16
* @route '/robots.txt'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/robots.txt',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Http\Controllers\RobotsController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/RobotsController.php:16
* @route '/robots.txt'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\RobotsController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/RobotsController.php:16
* @route '/robots.txt'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\RobotsController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/RobotsController.php:16
* @route '/robots.txt'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Http\Controllers\RobotsController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/RobotsController.php:16
* @route '/robots.txt'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\RobotsController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/RobotsController.php:16
* @route '/robots.txt'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Http\Controllers\RobotsController::index
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/RobotsController.php:16
* @route '/robots.txt'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const RobotsController = { index }

export default RobotsController