import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/{tenant}/users/{record}'
*/
const ViewUser4bfd9e4f77cee5a8ba281c0c1380f082 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.url(args, options),
    method: 'get',
})

ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/users/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/{tenant}/users/{record}'
*/
ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/{tenant}/users/{record}'
*/
ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/{tenant}/users/{record}'
*/
ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/{tenant}/users/{record}'
*/
const ViewUser4bfd9e4f77cee5a8ba281c0c1380f082Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/{tenant}/users/{record}'
*/
ViewUser4bfd9e4f77cee5a8ba281c0c1380f082Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/{tenant}/users/{record}'
*/
ViewUser4bfd9e4f77cee5a8ba281c0c1380f082Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewUser4bfd9e4f77cee5a8ba281c0c1380f082.form = ViewUser4bfd9e4f77cee5a8ba281c0c1380f082Form
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
const ViewUser1e35ca77dde75925d5defd2f967269dd = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'get',
})

ViewUser1e35ca77dde75925d5defd2f967269dd.definition = {
    methods: ["get","head"],
    url: '/nds/super/users/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269dd.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewUser1e35ca77dde75925d5defd2f967269dd.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269dd.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269dd.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
const ViewUser1e35ca77dde75925d5defd2f967269ddForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269ddForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269ddForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewUser1e35ca77dde75925d5defd2f967269dd.form = ViewUser1e35ca77dde75925d5defd2f967269ddForm

const ViewUser = {
    '/admin/{tenant}/users/{record}': ViewUser4bfd9e4f77cee5a8ba281c0c1380f082,
    '/nds/super/users/{record}': ViewUser1e35ca77dde75925d5defd2f967269dd,
}

export default ViewUser