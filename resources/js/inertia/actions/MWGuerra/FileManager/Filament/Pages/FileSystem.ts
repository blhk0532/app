import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
const FileSystem = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileSystem.url(options),
    method: 'get',
})

FileSystem.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystem.url = (options?: RouteQueryOptions) => {
    return FileSystem.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystem.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystem.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FileSystem.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
const FileSystemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystem.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FileSystem.form = FileSystemForm

export default FileSystem