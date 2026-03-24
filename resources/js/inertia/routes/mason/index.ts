import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::preview
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:14
* @route '/mason/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/mason/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::preview
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:14
* @route '/mason/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::preview
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:14
* @route '/mason/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::preview
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:14
* @route '/mason/preview'
*/
const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::preview
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:14
* @route '/mason/preview'
*/
previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

preview.form = previewForm

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::entry
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:19
* @route '/mason/entry'
*/
export const entry = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: entry.url(options),
    method: 'post',
})

entry.definition = {
    methods: ["post"],
    url: '/mason/entry',
} satisfies RouteDefinition<["post"]>

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::entry
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:19
* @route '/mason/entry'
*/
entry.url = (options?: RouteQueryOptions) => {
    return entry.definition.url + queryParams(options)
}

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::entry
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:19
* @route '/mason/entry'
*/
entry.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: entry.url(options),
    method: 'post',
})

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::entry
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:19
* @route '/mason/entry'
*/
const entryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: entry.url(options),
    method: 'post',
})

/**
* @see \Awcodes\Mason\Http\Controllers\MasonController::entry
* @see vendor/awcodes/mason/src/Http/Controllers/MasonController.php:19
* @route '/mason/entry'
*/
entryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: entry.url(options),
    method: 'post',
})

entry.form = entryForm

const mason = {
    preview: Object.assign(preview, preview),
    entry: Object.assign(entry, entry),
}

export default mason