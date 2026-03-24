import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/{record}/edit'
*/
const EditOutcomeSetting084985d70573ef1bdece3511ac67d650 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSetting084985d70573ef1bdece3511ac67d650.url(args, options),
    method: 'get',
})

EditOutcomeSetting084985d70573ef1bdece3511ac67d650.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/outcome-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/{record}/edit'
*/
EditOutcomeSetting084985d70573ef1bdece3511ac67d650.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditOutcomeSetting084985d70573ef1bdece3511ac67d650.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/{record}/edit'
*/
EditOutcomeSetting084985d70573ef1bdece3511ac67d650.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSetting084985d70573ef1bdece3511ac67d650.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/{record}/edit'
*/
EditOutcomeSetting084985d70573ef1bdece3511ac67d650.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeSetting084985d70573ef1bdece3511ac67d650.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/{record}/edit'
*/
const EditOutcomeSetting084985d70573ef1bdece3511ac67d650Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting084985d70573ef1bdece3511ac67d650.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/{record}/edit'
*/
EditOutcomeSetting084985d70573ef1bdece3511ac67d650Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting084985d70573ef1bdece3511ac67d650.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/{record}/edit'
*/
EditOutcomeSetting084985d70573ef1bdece3511ac67d650Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting084985d70573ef1bdece3511ac67d650.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeSetting084985d70573ef1bdece3511ac67d650.form = EditOutcomeSetting084985d70573ef1bdece3511ac67d650Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
const EditOutcomeSetting71183bdef82d450c12650cbe23a7199d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'get',
})

EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
const EditOutcomeSetting71183bdef82d450c12650cbe23a7199dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.form = EditOutcomeSetting71183bdef82d450c12650cbe23a7199dForm

const EditOutcomeSetting = {
    '/admin/{tenant}/outcome-settings/{record}/edit': EditOutcomeSetting084985d70573ef1bdece3511ac67d650,
    '/nds/super/outcome-settings/{record}/edit': EditOutcomeSetting71183bdef82d450c12650cbe23a7199d,
}

export default EditOutcomeSetting