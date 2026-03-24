import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
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

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
}

export default pages