import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/{tenant}/teams/{record}'
*/
const ViewTeam8a99ec83e9c5d61ec72de45610df5365 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam8a99ec83e9c5d61ec72de45610df5365.url(args, options),
    method: 'get',
})

ViewTeam8a99ec83e9c5d61ec72de45610df5365.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/{tenant}/teams/{record}'
*/
ViewTeam8a99ec83e9c5d61ec72de45610df5365.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewTeam8a99ec83e9c5d61ec72de45610df5365.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/{tenant}/teams/{record}'
*/
ViewTeam8a99ec83e9c5d61ec72de45610df5365.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam8a99ec83e9c5d61ec72de45610df5365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/{tenant}/teams/{record}'
*/
ViewTeam8a99ec83e9c5d61ec72de45610df5365.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam8a99ec83e9c5d61ec72de45610df5365.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/{tenant}/teams/{record}'
*/
const ViewTeam8a99ec83e9c5d61ec72de45610df5365Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam8a99ec83e9c5d61ec72de45610df5365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/{tenant}/teams/{record}'
*/
ViewTeam8a99ec83e9c5d61ec72de45610df5365Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam8a99ec83e9c5d61ec72de45610df5365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/{tenant}/teams/{record}'
*/
ViewTeam8a99ec83e9c5d61ec72de45610df5365Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam8a99ec83e9c5d61ec72de45610df5365.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTeam8a99ec83e9c5d61ec72de45610df5365.form = ViewTeam8a99ec83e9c5d61ec72de45610df5365Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
const ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
const ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.form = ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm

const ViewTeam = {
    '/admin/{tenant}/teams/{record}': ViewTeam8a99ec83e9c5d61ec72de45610df5365,
    '/nds/super/teams/{record}': ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b,
}

export default ViewTeam