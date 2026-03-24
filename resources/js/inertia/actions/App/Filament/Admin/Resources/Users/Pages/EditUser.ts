import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/admin/{tenant}/users/{record}/edit'
*/
const EditUsera84b371991c6301576706254dda4a210 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUsera84b371991c6301576706254dda4a210.url(args, options),
    method: 'get',
})

EditUsera84b371991c6301576706254dda4a210.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/admin/{tenant}/users/{record}/edit'
*/
EditUsera84b371991c6301576706254dda4a210.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditUsera84b371991c6301576706254dda4a210.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/admin/{tenant}/users/{record}/edit'
*/
EditUsera84b371991c6301576706254dda4a210.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUsera84b371991c6301576706254dda4a210.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/admin/{tenant}/users/{record}/edit'
*/
EditUsera84b371991c6301576706254dda4a210.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUsera84b371991c6301576706254dda4a210.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/admin/{tenant}/users/{record}/edit'
*/
const EditUsera84b371991c6301576706254dda4a210Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUsera84b371991c6301576706254dda4a210.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/admin/{tenant}/users/{record}/edit'
*/
EditUsera84b371991c6301576706254dda4a210Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUsera84b371991c6301576706254dda4a210.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/admin/{tenant}/users/{record}/edit'
*/
EditUsera84b371991c6301576706254dda4a210Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUsera84b371991c6301576706254dda4a210.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUsera84b371991c6301576706254dda4a210.form = EditUsera84b371991c6301576706254dda4a210Form
/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
const EditUser82de4330e2ff2d0482629c52dc3ea0d0 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'get',
})

EditUser82de4330e2ff2d0482629c52dc3ea0d0.definition = {
    methods: ["get","head"],
    url: '/nds/super/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditUser82de4330e2ff2d0482629c52dc3ea0d0.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
const EditUser82de4330e2ff2d0482629c52dc3ea0d0Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUser82de4330e2ff2d0482629c52dc3ea0d0.form = EditUser82de4330e2ff2d0482629c52dc3ea0d0Form

const EditUser = {
    '/admin/{tenant}/users/{record}/edit': EditUsera84b371991c6301576706254dda4a210,
    '/nds/super/users/{record}/edit': EditUser82de4330e2ff2d0482629c52dc3ea0d0,
}

export default EditUser