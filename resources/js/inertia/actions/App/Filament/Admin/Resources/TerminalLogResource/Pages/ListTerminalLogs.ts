import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/{tenant}/terminal-logs'
*/
const ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.url(args, options),
    method: 'get',
})

ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/terminal-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/{tenant}/terminal-logs'
*/
ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/{tenant}/terminal-logs'
*/
ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/{tenant}/terminal-logs'
*/
ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/{tenant}/terminal-logs'
*/
const ListTerminalLogs03cea9ad28e97b48eb5e025577f0996fForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/{tenant}/terminal-logs'
*/
ListTerminalLogs03cea9ad28e97b48eb5e025577f0996fForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/{tenant}/terminal-logs'
*/
ListTerminalLogs03cea9ad28e97b48eb5e025577f0996fForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f.form = ListTerminalLogs03cea9ad28e97b48eb5e025577f0996fForm
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
const ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'get',
})

ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.definition = {
    methods: ["get","head"],
    url: '/nds/super/terminal-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url = (options?: RouteQueryOptions) => {
    return ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
const ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.form = ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2Form

const ListTerminalLogs = {
    '/admin/{tenant}/terminal-logs': ListTerminalLogs03cea9ad28e97b48eb5e025577f0996f,
    '/nds/super/terminal-logs': ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2,
}

export default ListTerminalLogs