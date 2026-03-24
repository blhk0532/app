import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
const FileManagerBase = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileManagerBase.url(options),
    method: 'get',
})

FileManagerBase.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-manager-base',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
FileManagerBase.url = (options?: RouteQueryOptions) => {
    return FileManagerBase.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
FileManagerBase.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileManagerBase.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
FileManagerBase.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FileManagerBase.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
const FileManagerBaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerBase.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
FileManagerBaseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerBase.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
FileManagerBaseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerBase.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FileManagerBase.form = FileManagerBaseForm

export default FileManagerBase