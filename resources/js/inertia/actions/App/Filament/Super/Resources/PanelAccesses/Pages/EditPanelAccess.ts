import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\EditPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/EditPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}/edit'
*/
const EditPanelAccess = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPanelAccess.url(args, options),
    method: 'get',
})

EditPanelAccess.definition = {
    methods: ["get","head"],
    url: '/nds/super/panel-accesses/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\EditPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/EditPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}/edit'
*/
EditPanelAccess.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditPanelAccess.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\EditPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/EditPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}/edit'
*/
EditPanelAccess.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPanelAccess.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\EditPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/EditPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}/edit'
*/
EditPanelAccess.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPanelAccess.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\EditPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/EditPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}/edit'
*/
const EditPanelAccessForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPanelAccess.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\EditPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/EditPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}/edit'
*/
EditPanelAccessForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPanelAccess.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Resources\PanelAccesses\Pages\EditPanelAccess::__invoke
* @see app/Filament/Super/Resources/PanelAccesses/Pages/EditPanelAccess.php:7
* @route '/nds/super/panel-accesses/{record}/edit'
*/
EditPanelAccessForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPanelAccess.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditPanelAccess.form = EditPanelAccessForm

export default EditPanelAccess