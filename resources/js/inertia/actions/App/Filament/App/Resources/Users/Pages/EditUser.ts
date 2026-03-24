import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
const EditUser = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser.url(args, options),
    method: 'get',
})

EditUser.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUser.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditUser.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUser.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUser.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUser.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
const EditUserForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUserForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUserForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUser.form = EditUserForm

export default EditUser