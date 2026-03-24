import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::stream
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:44
* @route '/filemanager/stream'
*/
export const stream = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(options),
    method: 'get',
})

stream.definition = {
    methods: ["get","head"],
    url: '/filemanager/stream',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::stream
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:44
* @route '/filemanager/stream'
*/
stream.url = (options?: RouteQueryOptions) => {
    return stream.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::stream
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:44
* @route '/filemanager/stream'
*/
stream.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::stream
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:44
* @route '/filemanager/stream'
*/
stream.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stream.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::stream
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:44
* @route '/filemanager/stream'
*/
const streamForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stream.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::stream
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:44
* @route '/filemanager/stream'
*/
streamForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stream.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::stream
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:44
* @route '/filemanager/stream'
*/
streamForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stream.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stream.form = streamForm

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::download
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:55
* @route '/filemanager/download'
*/
export const download = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/filemanager/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::download
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:55
* @route '/filemanager/download'
*/
download.url = (options?: RouteQueryOptions) => {
    return download.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::download
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:55
* @route '/filemanager/download'
*/
download.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::download
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:55
* @route '/filemanager/download'
*/
download.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::download
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:55
* @route '/filemanager/download'
*/
const downloadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::download
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:55
* @route '/filemanager/download'
*/
downloadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Http\Controllers\FileStreamController::download
* @see plugins/mwguerra/filemanager/src/Http/Controllers/FileStreamController.php:55
* @route '/filemanager/download'
*/
downloadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

const FileStreamController = { stream, download }

export default FileStreamController