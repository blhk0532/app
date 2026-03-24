import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
const CreateFileSystemItem = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateFileSystemItem.url(options),
    method: 'get',
})

CreateFileSystemItem.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system-items/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItem.url = (options?: RouteQueryOptions) => {
    return CreateFileSystemItem.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItem.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateFileSystemItem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItem.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateFileSystemItem.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
const CreateFileSystemItemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateFileSystemItem.form = CreateFileSystemItemForm

export default CreateFileSystemItem