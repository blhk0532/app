import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Http\Controllers\CommentController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/CommentController.php:20
* @route '/api/tallcms/comments'
*/
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/api/tallcms/comments',
} satisfies RouteDefinition<["post"]>

/**
* @see \TallCms\Cms\Http\Controllers\CommentController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/CommentController.php:20
* @route '/api/tallcms/comments'
*/
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\CommentController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/CommentController.php:20
* @route '/api/tallcms/comments'
*/
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

/**
* @see \TallCms\Cms\Http\Controllers\CommentController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/CommentController.php:20
* @route '/api/tallcms/comments'
*/
const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

/**
* @see \TallCms\Cms\Http\Controllers\CommentController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/CommentController.php:20
* @route '/api/tallcms/comments'
*/
submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

submit.form = submitForm

const CommentController = { submit }

export default CommentController