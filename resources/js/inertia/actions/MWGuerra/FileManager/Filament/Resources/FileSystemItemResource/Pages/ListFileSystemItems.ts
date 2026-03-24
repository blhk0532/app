import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
const ListFileSystemItems = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFileSystemItems.url(options),
    method: 'get',
})

ListFileSystemItems.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItems.url = (options?: RouteQueryOptions) => {
    return ListFileSystemItems.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItems.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFileSystemItems.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItems.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListFileSystemItems.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
const ListFileSystemItemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItems.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItems.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItems.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListFileSystemItems.form = ListFileSystemItemsForm

export default ListFileSystemItems