import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.url(args, options),
    method: 'get',
})

EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/outcome-delay-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24.form = EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24Form
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'get',
})

EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-delay-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.form = EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2Form

const EditOutcomeDelaySetting = {
    '/admin/{tenant}/outcome-delay-settings/{record}/edit': EditOutcomeDelaySettingf349a109fa9eccd5296c673f39d41c24,
    '/nds/super/outcome-delay-settings/{record}/edit': EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2,
}

export default EditOutcomeDelaySetting