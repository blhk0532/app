import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ListPanelAccesses::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ListPanelAccesses.php:7
* @route '/nds/super/panel-accesses'
*/
const ListPanelAccesses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPanelAccesses.url(options),
    method: 'get',
})

ListPanelAccesses.definition = {
    methods: ["get","head"],
    url: '/nds/super/panel-accesses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ListPanelAccesses::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ListPanelAccesses.php:7
* @route '/nds/super/panel-accesses'
*/
ListPanelAccesses.url = (options?: RouteQueryOptions) => {
    return ListPanelAccesses.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ListPanelAccesses::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ListPanelAccesses.php:7
* @route '/nds/super/panel-accesses'
*/
ListPanelAccesses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPanelAccesses.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ListPanelAccesses::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ListPanelAccesses.php:7
* @route '/nds/super/panel-accesses'
*/
ListPanelAccesses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPanelAccesses.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ListPanelAccesses::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ListPanelAccesses.php:7
* @route '/nds/super/panel-accesses'
*/
const ListPanelAccessesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPanelAccesses.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ListPanelAccesses::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ListPanelAccesses.php:7
* @route '/nds/super/panel-accesses'
*/
ListPanelAccessesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPanelAccesses.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\ListPanelAccesses::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/ListPanelAccesses.php:7
* @route '/nds/super/panel-accesses'
*/
ListPanelAccessesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPanelAccesses.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListPanelAccesses.form = ListPanelAccessesForm

export default ListPanelAccesses