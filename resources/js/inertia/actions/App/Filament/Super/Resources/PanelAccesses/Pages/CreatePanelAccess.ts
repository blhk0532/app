import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\CreatePanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/CreatePanelAccess.php:7
* @route '/nds/super/panel-accesses/create'
*/
const CreatePanelAccess = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePanelAccess.url(options),
    method: 'get',
})

CreatePanelAccess.definition = {
    methods: ["get","head"],
    url: '/nds/super/panel-accesses/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\CreatePanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/CreatePanelAccess.php:7
* @route '/nds/super/panel-accesses/create'
*/
CreatePanelAccess.url = (options?: RouteQueryOptions) => {
    return CreatePanelAccess.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\CreatePanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/CreatePanelAccess.php:7
* @route '/nds/super/panel-accesses/create'
*/
CreatePanelAccess.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePanelAccess.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\CreatePanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/CreatePanelAccess.php:7
* @route '/nds/super/panel-accesses/create'
*/
CreatePanelAccess.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePanelAccess.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\CreatePanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/CreatePanelAccess.php:7
* @route '/nds/super/panel-accesses/create'
*/
const CreatePanelAccessForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePanelAccess.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\CreatePanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/CreatePanelAccess.php:7
* @route '/nds/super/panel-accesses/create'
*/
CreatePanelAccessForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePanelAccess.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\CreatePanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/CreatePanelAccess.php:7
* @route '/nds/super/panel-accesses/create'
*/
CreatePanelAccessForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePanelAccess.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreatePanelAccess.form = CreatePanelAccessForm

export default CreatePanelAccess