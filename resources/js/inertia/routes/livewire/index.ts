import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::update
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/livewire-86207cf2/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::update
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::update
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::update
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::update
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::script
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.js'
*/
export const script = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: script.url(options),
    method: 'get',
})

script.definition = {
    methods: ["get","head"],
    url: '/livewire-86207cf2/livewire.js',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::script
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.js'
*/
script.url = (options?: RouteQueryOptions) => {
    return script.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::script
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.js'
*/
script.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: script.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::script
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.js'
*/
script.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: script.url(options),
    method: 'head',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::script
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.js'
*/
const scriptForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: script.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::script
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.js'
*/
scriptForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: script.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::script
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.js'
*/
scriptForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: script.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

script.form = scriptForm

/**
* @see \Livewire\Features\SupportFileUploads\FileUploadController::uploadFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FileUploadController.php:27
* @route '/livewire-86207cf2/upload-file'
*/
export const uploadFile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadFile.url(options),
    method: 'post',
})

uploadFile.definition = {
    methods: ["post"],
    url: '/livewire-86207cf2/upload-file',
} satisfies RouteDefinition<["post"]>

/**
* @see \Livewire\Features\SupportFileUploads\FileUploadController::uploadFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FileUploadController.php:27
* @route '/livewire-86207cf2/upload-file'
*/
uploadFile.url = (options?: RouteQueryOptions) => {
    return uploadFile.definition.url + queryParams(options)
}

/**
* @see \Livewire\Features\SupportFileUploads\FileUploadController::uploadFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FileUploadController.php:27
* @route '/livewire-86207cf2/upload-file'
*/
uploadFile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadFile.url(options),
    method: 'post',
})

/**
* @see \Livewire\Features\SupportFileUploads\FileUploadController::uploadFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FileUploadController.php:27
* @route '/livewire-86207cf2/upload-file'
*/
const uploadFileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadFile.url(options),
    method: 'post',
})

/**
* @see \Livewire\Features\SupportFileUploads\FileUploadController::uploadFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FileUploadController.php:27
* @route '/livewire-86207cf2/upload-file'
*/
uploadFileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadFile.url(options),
    method: 'post',
})

uploadFile.form = uploadFileForm

/**
* @see \Livewire\Features\SupportFileUploads\FilePreviewController::previewFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FilePreviewController.php:18
* @route '/livewire-86207cf2/preview-file/{filename}'
*/
export const previewFile = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: previewFile.url(args, options),
    method: 'get',
})

previewFile.definition = {
    methods: ["get","head"],
    url: '/livewire-86207cf2/preview-file/{filename}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Features\SupportFileUploads\FilePreviewController::previewFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FilePreviewController.php:18
* @route '/livewire-86207cf2/preview-file/{filename}'
*/
previewFile.url = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { filename: args }
    }

    if (Array.isArray(args)) {
        args = {
            filename: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        filename: args.filename,
    }

    return previewFile.definition.url
            .replace('{filename}', parsedArgs.filename.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Features\SupportFileUploads\FilePreviewController::previewFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FilePreviewController.php:18
* @route '/livewire-86207cf2/preview-file/{filename}'
*/
previewFile.get = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: previewFile.url(args, options),
    method: 'get',
})

/**
* @see \Livewire\Features\SupportFileUploads\FilePreviewController::previewFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FilePreviewController.php:18
* @route '/livewire-86207cf2/preview-file/{filename}'
*/
previewFile.head = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: previewFile.url(args, options),
    method: 'head',
})

/**
* @see \Livewire\Features\SupportFileUploads\FilePreviewController::previewFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FilePreviewController.php:18
* @route '/livewire-86207cf2/preview-file/{filename}'
*/
const previewFileForm = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: previewFile.url(args, options),
    method: 'get',
})

/**
* @see \Livewire\Features\SupportFileUploads\FilePreviewController::previewFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FilePreviewController.php:18
* @route '/livewire-86207cf2/preview-file/{filename}'
*/
previewFileForm.get = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: previewFile.url(args, options),
    method: 'get',
})

/**
* @see \Livewire\Features\SupportFileUploads\FilePreviewController::previewFile
* @see vendor/livewire/livewire/src/Features/SupportFileUploads/FilePreviewController.php:18
* @route '/livewire-86207cf2/preview-file/{filename}'
*/
previewFileForm.head = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: previewFile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

previewFile.form = previewFileForm

const livewire = {
    update: Object.assign(update, update),
    script: Object.assign(script, script),
    uploadFile: Object.assign(uploadFile, uploadFile),
    previewFile: Object.assign(previewFile, previewFile),
}

export default livewire