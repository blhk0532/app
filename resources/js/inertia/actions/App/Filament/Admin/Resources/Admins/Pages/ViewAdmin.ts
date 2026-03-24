import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/{tenant}/admins/{record}'
*/
const ViewAdmin98a87671649a2ed9d7531751dbe19307 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmin98a87671649a2ed9d7531751dbe19307.url(args, options),
    method: 'get',
})

ViewAdmin98a87671649a2ed9d7531751dbe19307.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/admins/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/{tenant}/admins/{record}'
*/
ViewAdmin98a87671649a2ed9d7531751dbe19307.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewAdmin98a87671649a2ed9d7531751dbe19307.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/{tenant}/admins/{record}'
*/
ViewAdmin98a87671649a2ed9d7531751dbe19307.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmin98a87671649a2ed9d7531751dbe19307.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/{tenant}/admins/{record}'
*/
ViewAdmin98a87671649a2ed9d7531751dbe19307.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAdmin98a87671649a2ed9d7531751dbe19307.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/{tenant}/admins/{record}'
*/
const ViewAdmin98a87671649a2ed9d7531751dbe19307Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin98a87671649a2ed9d7531751dbe19307.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/{tenant}/admins/{record}'
*/
ViewAdmin98a87671649a2ed9d7531751dbe19307Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin98a87671649a2ed9d7531751dbe19307.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/{tenant}/admins/{record}'
*/
ViewAdmin98a87671649a2ed9d7531751dbe19307Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin98a87671649a2ed9d7531751dbe19307.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewAdmin98a87671649a2ed9d7531751dbe19307.form = ViewAdmin98a87671649a2ed9d7531751dbe19307Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
const ViewAdmin3120d2275478ec7a6c2cbee79589ce99 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'get',
})

ViewAdmin3120d2275478ec7a6c2cbee79589ce99.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewAdmin3120d2275478ec7a6c2cbee79589ce99.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
const ViewAdmin3120d2275478ec7a6c2cbee79589ce99Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewAdmin3120d2275478ec7a6c2cbee79589ce99.form = ViewAdmin3120d2275478ec7a6c2cbee79589ce99Form

const ViewAdmin = {
    '/admin/{tenant}/admins/{record}': ViewAdmin98a87671649a2ed9d7531751dbe19307,
    '/nds/super/admins/{record}': ViewAdmin3120d2275478ec7a6c2cbee79589ce99,
}

export default ViewAdmin