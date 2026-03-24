import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
const Dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard.url(options),
    method: 'get',
})

Dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
Dashboard.url = (options?: RouteQueryOptions) => {
    return Dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
Dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
Dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
const DashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
DashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
DashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Dashboard.form = DashboardForm

export default Dashboard