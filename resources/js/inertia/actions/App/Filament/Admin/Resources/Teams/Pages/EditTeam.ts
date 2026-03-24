import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/{tenant}/teams/{record}/edit'
*/
const EditTeam457f31b61d1ce1b5e2ab92a4cfa14886 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.url(args, options),
    method: 'get',
})

EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/teams/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/{tenant}/teams/{record}/edit'
*/
EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/{tenant}/teams/{record}/edit'
*/
EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/{tenant}/teams/{record}/edit'
*/
EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/{tenant}/teams/{record}/edit'
*/
const EditTeam457f31b61d1ce1b5e2ab92a4cfa14886Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/{tenant}/teams/{record}/edit'
*/
EditTeam457f31b61d1ce1b5e2ab92a4cfa14886Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/{tenant}/teams/{record}/edit'
*/
EditTeam457f31b61d1ce1b5e2ab92a4cfa14886Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTeam457f31b61d1ce1b5e2ab92a4cfa14886.form = EditTeam457f31b61d1ce1b5e2ab92a4cfa14886Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
const EditTeamd442b35d1bea26d1fffb2242b1882365 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'get',
})

EditTeamd442b35d1bea26d1fffb2242b1882365.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTeamd442b35d1bea26d1fffb2242b1882365.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
const EditTeamd442b35d1bea26d1fffb2242b1882365Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTeamd442b35d1bea26d1fffb2242b1882365.form = EditTeamd442b35d1bea26d1fffb2242b1882365Form

const EditTeam = {
    '/admin/{tenant}/teams/{record}/edit': EditTeam457f31b61d1ce1b5e2ab92a4cfa14886,
    '/nds/super/teams/{record}/edit': EditTeamd442b35d1bea26d1fffb2242b1882365,
}

export default EditTeam