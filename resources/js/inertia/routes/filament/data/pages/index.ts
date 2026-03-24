import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
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
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
export const kommunerMap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kommunerMap.url(options),
    method: 'get',
})

kommunerMap.definition = {
    methods: ["get","head"],
    url: '/nds/data/kommuner-map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
kommunerMap.url = (options?: RouteQueryOptions) => {
    return kommunerMap.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
kommunerMap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kommunerMap.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
kommunerMap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: kommunerMap.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
const kommunerMapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: kommunerMap.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
kommunerMapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: kommunerMap.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
kommunerMapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: kommunerMap.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

kommunerMap.form = kommunerMapForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    kommunerMap: Object.assign(kommunerMap, kommunerMap),
}

export default pages