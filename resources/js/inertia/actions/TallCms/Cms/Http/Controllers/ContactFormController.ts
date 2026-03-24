import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Http\Controllers\ContactFormController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/ContactFormController.php:46
* @route '/api/tallcms/contact'
*/
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/api/tallcms/contact',
} satisfies RouteDefinition<["post"]>

/**
* @see \TallCms\Cms\Http\Controllers\ContactFormController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/ContactFormController.php:46
* @route '/api/tallcms/contact'
*/
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Http\Controllers\ContactFormController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/ContactFormController.php:46
* @route '/api/tallcms/contact'
*/
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

/**
* @see \TallCms\Cms\Http\Controllers\ContactFormController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/ContactFormController.php:46
* @route '/api/tallcms/contact'
*/
const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

/**
* @see \TallCms\Cms\Http\Controllers\ContactFormController::submit
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Http/Controllers/ContactFormController.php:46
* @route '/api/tallcms/contact'
*/
submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

submit.form = submitForm

const ContactFormController = { submit }

export default ContactFormController