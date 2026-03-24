import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
const ToolsDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ToolsDashboard.url(options),
    method: 'get',
})

ToolsDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/tools',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
ToolsDashboard.url = (options?: RouteQueryOptions) => {
    return ToolsDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
ToolsDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ToolsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
ToolsDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ToolsDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
const ToolsDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ToolsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
ToolsDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ToolsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Tools\Pages\ToolsDashboard::__invoke
* @see app/Filament/Tools/Pages/ToolsDashboard.php:7
* @route '/nds/tools'
*/
ToolsDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ToolsDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ToolsDashboard.form = ToolsDashboardForm

export default ToolsDashboard