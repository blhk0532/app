import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
const Dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard.url(options),
    method: 'get',
})

Dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
Dashboard.url = (options?: RouteQueryOptions) => {
    return Dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
Dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
Dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
const DashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
DashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
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