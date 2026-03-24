import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
const NotifyDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotifyDashboard.url(options),
    method: 'get',
})

NotifyDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/notify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
NotifyDashboard.url = (options?: RouteQueryOptions) => {
    return NotifyDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
NotifyDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotifyDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
NotifyDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NotifyDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
const NotifyDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifyDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
NotifyDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifyDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Notify\Pages\NotifyDashboard::__invoke
* @see app/Filament/Notify/Pages/NotifyDashboard.php:7
* @route '/nds/notify'
*/
NotifyDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifyDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

NotifyDashboard.form = NotifyDashboardForm

export default NotifyDashboard