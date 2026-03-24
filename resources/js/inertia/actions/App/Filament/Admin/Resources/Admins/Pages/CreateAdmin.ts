import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/{tenant}/admins/create'
*/
const CreateAdminea1a19b0f6985606ce0982a53b7fce92 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdminea1a19b0f6985606ce0982a53b7fce92.url(args, options),
    method: 'get',
})

CreateAdminea1a19b0f6985606ce0982a53b7fce92.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/{tenant}/admins/create'
*/
CreateAdminea1a19b0f6985606ce0982a53b7fce92.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return CreateAdminea1a19b0f6985606ce0982a53b7fce92.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/{tenant}/admins/create'
*/
CreateAdminea1a19b0f6985606ce0982a53b7fce92.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdminea1a19b0f6985606ce0982a53b7fce92.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/{tenant}/admins/create'
*/
CreateAdminea1a19b0f6985606ce0982a53b7fce92.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdminea1a19b0f6985606ce0982a53b7fce92.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/{tenant}/admins/create'
*/
const CreateAdminea1a19b0f6985606ce0982a53b7fce92Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdminea1a19b0f6985606ce0982a53b7fce92.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/{tenant}/admins/create'
*/
CreateAdminea1a19b0f6985606ce0982a53b7fce92Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdminea1a19b0f6985606ce0982a53b7fce92.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/{tenant}/admins/create'
*/
CreateAdminea1a19b0f6985606ce0982a53b7fce92Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdminea1a19b0f6985606ce0982a53b7fce92.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdminea1a19b0f6985606ce0982a53b7fce92.form = CreateAdminea1a19b0f6985606ce0982a53b7fce92Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
const CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url = (options?: RouteQueryOptions) => {
    return CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
const CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.form = CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form

const CreateAdmin = {
    '/admin/{tenant}/admins/create': CreateAdminea1a19b0f6985606ce0982a53b7fce92,
    '/nds/super/admins/create': CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349,
}

export default CreateAdmin