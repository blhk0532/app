import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
const EditFileSystemItem = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditFileSystemItem.url(args, options),
    method: 'get',
})

EditFileSystemItem.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system-items/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItem.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditFileSystemItem.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItem.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditFileSystemItem.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItem.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditFileSystemItem.url(args, options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
const EditFileSystemItemForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItem.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItemForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItem.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItemForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditFileSystemItem.form = EditFileSystemItemForm

export default EditFileSystemItem