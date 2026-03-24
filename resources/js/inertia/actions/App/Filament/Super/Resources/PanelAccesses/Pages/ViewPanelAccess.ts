import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ViewPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ViewPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}'
*/
const ViewPanelAccess = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewPanelAccess.url(args, options),
    method: 'get',
})

ViewPanelAccess.definition = {
    methods: ["get","head"],
    url: '/nds/super/panel-accesses/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ViewPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ViewPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}'
*/
ViewPanelAccess.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewPanelAccess.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ViewPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ViewPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}'
*/
ViewPanelAccess.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewPanelAccess.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ViewPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ViewPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}'
*/
ViewPanelAccess.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewPanelAccess.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ViewPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ViewPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}'
*/
const ViewPanelAccessForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewPanelAccess.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ViewPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ViewPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}'
*/
ViewPanelAccessForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewPanelAccess.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ViewPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ViewPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}'
*/
ViewPanelAccessForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewPanelAccess.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewPanelAccess.form = ViewPanelAccessForm

export default ViewPanelAccess