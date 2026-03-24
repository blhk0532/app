import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/{tenant}/terminal-logs/{record}'
*/
const ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.url(args, options),
    method: 'get',
})

ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/terminal-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/{tenant}/terminal-logs/{record}'
*/
const ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2fForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2fForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2fForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f.form = ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2fForm
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
const ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'get',
})

ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.definition = {
    methods: ["get","head"],
    url: '/nds/super/terminal-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
const ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6cForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6cForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6cForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.form = ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6cForm

const ViewTerminalLog = {
    '/admin/{tenant}/terminal-logs/{record}': ViewTerminalLogaff7225e56eed7e1d96a80c83bb47a2f,
    '/nds/super/terminal-logs/{record}': ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c,
}

export default ViewTerminalLog