import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/files',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
export const fileManagerBase = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileManagerBase.url(options),
    method: 'get',
})

fileManagerBase.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-manager-base',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
fileManagerBase.url = (options?: RouteQueryOptions) => {
    return fileManagerBase.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
fileManagerBase.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileManagerBase.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
fileManagerBase.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fileManagerBase.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
const fileManagerBaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManagerBase.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
fileManagerBaseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManagerBase.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManagerBase::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManagerBase.php:7
* @route '/nds/files/file-manager-base'
*/
fileManagerBaseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManagerBase.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fileManagerBase.form = fileManagerBaseForm

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
export const fileSystem = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileSystem.url(options),
    method: 'get',
})

fileSystem.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystem.url = (options?: RouteQueryOptions) => {
    return fileSystem.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystem.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystem.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fileSystem.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
const fileSystemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileSystem.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fileSystem.form = fileSystemForm

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
export const schemaExample = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schemaExample.url(options),
    method: 'get',
})

schemaExample.definition = {
    methods: ["get","head"],
    url: '/nds/files/schema-example',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExample.url = (options?: RouteQueryOptions) => {
    return schemaExample.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExample.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExample.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schemaExample.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
const schemaExampleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExampleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExampleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schemaExample.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

schemaExample.form = schemaExampleForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    fileManagerBase: Object.assign(fileManagerBase, fileManagerBase),
    fileSystem: Object.assign(fileSystem, fileSystem),
    schemaExample: Object.assign(schemaExample, schemaExample),
}

export default pages