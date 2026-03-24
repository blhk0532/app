import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
const ViewUser = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser.url(args, options),
    method: 'get',
})

ViewUser.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/users/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUser.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewUser.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUser.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUser.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewUser.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
const ViewUserForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUserForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUserForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewUser.form = ViewUserForm

export default ViewUser