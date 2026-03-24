import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/{tenant}/admins/{record}/edit'
*/
const EditAdmin614b91eef46dbea1e8c22e4f469c02e1 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdmin614b91eef46dbea1e8c22e4f469c02e1.url(args, options),
    method: 'get',
})

EditAdmin614b91eef46dbea1e8c22e4f469c02e1.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/admins/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/{tenant}/admins/{record}/edit'
*/
EditAdmin614b91eef46dbea1e8c22e4f469c02e1.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditAdmin614b91eef46dbea1e8c22e4f469c02e1.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/{tenant}/admins/{record}/edit'
*/
EditAdmin614b91eef46dbea1e8c22e4f469c02e1.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdmin614b91eef46dbea1e8c22e4f469c02e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/{tenant}/admins/{record}/edit'
*/
EditAdmin614b91eef46dbea1e8c22e4f469c02e1.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAdmin614b91eef46dbea1e8c22e4f469c02e1.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/{tenant}/admins/{record}/edit'
*/
const EditAdmin614b91eef46dbea1e8c22e4f469c02e1Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin614b91eef46dbea1e8c22e4f469c02e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/{tenant}/admins/{record}/edit'
*/
EditAdmin614b91eef46dbea1e8c22e4f469c02e1Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin614b91eef46dbea1e8c22e4f469c02e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/{tenant}/admins/{record}/edit'
*/
EditAdmin614b91eef46dbea1e8c22e4f469c02e1Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin614b91eef46dbea1e8c22e4f469c02e1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAdmin614b91eef46dbea1e8c22e4f469c02e1.form = EditAdmin614b91eef46dbea1e8c22e4f469c02e1Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
const EditAdminbc44f1a7ea2e4ab0b107f34b05743064 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'get',
})

EditAdminbc44f1a7ea2e4ab0b107f34b05743064.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditAdminbc44f1a7ea2e4ab0b107f34b05743064.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
const EditAdminbc44f1a7ea2e4ab0b107f34b05743064Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAdminbc44f1a7ea2e4ab0b107f34b05743064.form = EditAdminbc44f1a7ea2e4ab0b107f34b05743064Form

const EditAdmin = {
    '/admin/{tenant}/admins/{record}/edit': EditAdmin614b91eef46dbea1e8c22e4f469c02e1,
    '/nds/super/admins/{record}/edit': EditAdminbc44f1a7ea2e4ab0b107f34b05743064,
}

export default EditAdmin