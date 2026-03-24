import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
const LogTableb1c4a85c58800334eeeb92ce6694fb79 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogTableb1c4a85c58800334eeeb92ce6694fb79.url(options),
    method: 'get',
})

LogTableb1c4a85c58800334eeeb92ce6694fb79.definition = {
    methods: ["get","head"],
    url: '/nds/queue/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
LogTableb1c4a85c58800334eeeb92ce6694fb79.url = (options?: RouteQueryOptions) => {
    return LogTableb1c4a85c58800334eeeb92ce6694fb79.definition.url + queryParams(options)
}

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
LogTableb1c4a85c58800334eeeb92ce6694fb79.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogTableb1c4a85c58800334eeeb92ce6694fb79.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
LogTableb1c4a85c58800334eeeb92ce6694fb79.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LogTableb1c4a85c58800334eeeb92ce6694fb79.url(options),
    method: 'head',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
const LogTableb1c4a85c58800334eeeb92ce6694fb79Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTableb1c4a85c58800334eeeb92ce6694fb79.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
LogTableb1c4a85c58800334eeeb92ce6694fb79Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTableb1c4a85c58800334eeeb92ce6694fb79.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
LogTableb1c4a85c58800334eeeb92ce6694fb79Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTableb1c4a85c58800334eeeb92ce6694fb79.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LogTableb1c4a85c58800334eeeb92ce6694fb79.form = LogTableb1c4a85c58800334eeeb92ce6694fb79Form
/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
const LogTablecf28a33f3b8732f7d2a172c4ae86f6c4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.url(options),
    method: 'get',
})

LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.definition = {
    methods: ["get","head"],
    url: '/nds/super/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.url = (options?: RouteQueryOptions) => {
    return LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.definition.url + queryParams(options)
}

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.url(options),
    method: 'head',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
const LogTablecf28a33f3b8732f7d2a172c4ae86f6c4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
LogTablecf28a33f3b8732f7d2a172c4ae86f6c4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
LogTablecf28a33f3b8732f7d2a172c4ae86f6c4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LogTablecf28a33f3b8732f7d2a172c4ae86f6c4.form = LogTablecf28a33f3b8732f7d2a172c4ae86f6c4Form
/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
const LogTable86aeafc10375236dcefcf8ba1a12de42 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogTable86aeafc10375236dcefcf8ba1a12de42.url(options),
    method: 'get',
})

LogTable86aeafc10375236dcefcf8ba1a12de42.definition = {
    methods: ["get","head"],
    url: '/nds/tools/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
LogTable86aeafc10375236dcefcf8ba1a12de42.url = (options?: RouteQueryOptions) => {
    return LogTable86aeafc10375236dcefcf8ba1a12de42.definition.url + queryParams(options)
}

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
LogTable86aeafc10375236dcefcf8ba1a12de42.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogTable86aeafc10375236dcefcf8ba1a12de42.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
LogTable86aeafc10375236dcefcf8ba1a12de42.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LogTable86aeafc10375236dcefcf8ba1a12de42.url(options),
    method: 'head',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
const LogTable86aeafc10375236dcefcf8ba1a12de42Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTable86aeafc10375236dcefcf8ba1a12de42.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
LogTable86aeafc10375236dcefcf8ba1a12de42Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTable86aeafc10375236dcefcf8ba1a12de42.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/tools/logs'
*/
LogTable86aeafc10375236dcefcf8ba1a12de42Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogTable86aeafc10375236dcefcf8ba1a12de42.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LogTable86aeafc10375236dcefcf8ba1a12de42.form = LogTable86aeafc10375236dcefcf8ba1a12de42Form

const LogTable = {
    '/nds/queue/logs': LogTableb1c4a85c58800334eeeb92ce6694fb79,
    '/nds/super/logs': LogTablecf28a33f3b8732f7d2a172c4ae86f6c4,
    '/nds/tools/logs': LogTable86aeafc10375236dcefcf8ba1a12de42,
}

export default LogTable