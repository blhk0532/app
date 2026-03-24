import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/tools',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
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
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
export const backups = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: backups.url(options),
    method: 'get',
})

backups.definition = {
    methods: ["get","head"],
    url: '/nds/tools/backups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
backups.url = (options?: RouteQueryOptions) => {
    return backups.definition.url + queryParams(options)
}

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
backups.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: backups.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
backups.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: backups.url(options),
    method: 'head',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
const backupsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backups.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
backupsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backups.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
backupsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backups.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

backups.form = backupsForm

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
export const logs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

logs.definition = {
    methods: ["get","head"],
    url: '/nds/tools/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
logs.url = (options?: RouteQueryOptions) => {
    return logs.definition.url + queryParams(options)
}

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
logs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
logs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logs.url(options),
    method: 'head',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
const logsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
logsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
logsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logs.form = logsForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    backups: Object.assign(backups, backups),
    logs: Object.assign(logs, logs),
}

export default pages