import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
const DevDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DevDashboard.url(options),
    method: 'get',
})

DevDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/dev',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
DevDashboard.url = (options?: RouteQueryOptions) => {
    return DevDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
DevDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DevDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
DevDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DevDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
const DevDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DevDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
DevDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DevDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
DevDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DevDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DevDashboard.form = DevDashboardForm

export default DevDashboard