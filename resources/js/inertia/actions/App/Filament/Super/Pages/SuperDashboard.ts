import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
const SuperDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SuperDashboard.url(options),
    method: 'get',
})

SuperDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/super',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
SuperDashboard.url = (options?: RouteQueryOptions) => {
    return SuperDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
SuperDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SuperDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
SuperDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SuperDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
const SuperDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SuperDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
SuperDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SuperDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
SuperDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SuperDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SuperDashboard.form = SuperDashboardForm

export default SuperDashboard