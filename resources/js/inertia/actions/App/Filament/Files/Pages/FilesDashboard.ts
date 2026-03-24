import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
const FilesDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FilesDashboard.url(options),
    method: 'get',
})

FilesDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/files',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
FilesDashboard.url = (options?: RouteQueryOptions) => {
    return FilesDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
FilesDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FilesDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
FilesDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FilesDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
const FilesDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FilesDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
FilesDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FilesDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
FilesDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FilesDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FilesDashboard.form = FilesDashboardForm

export default FilesDashboard