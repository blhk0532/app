import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/{tenant}/outcome-settings'
*/
const ListOutcomeSettings3b868b6fb20b880597057217da1678e1 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings3b868b6fb20b880597057217da1678e1.url(args, options),
    method: 'get',
})

ListOutcomeSettings3b868b6fb20b880597057217da1678e1.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/outcome-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/{tenant}/outcome-settings'
*/
ListOutcomeSettings3b868b6fb20b880597057217da1678e1.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListOutcomeSettings3b868b6fb20b880597057217da1678e1.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/{tenant}/outcome-settings'
*/
ListOutcomeSettings3b868b6fb20b880597057217da1678e1.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings3b868b6fb20b880597057217da1678e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/{tenant}/outcome-settings'
*/
ListOutcomeSettings3b868b6fb20b880597057217da1678e1.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeSettings3b868b6fb20b880597057217da1678e1.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/{tenant}/outcome-settings'
*/
const ListOutcomeSettings3b868b6fb20b880597057217da1678e1Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings3b868b6fb20b880597057217da1678e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/{tenant}/outcome-settings'
*/
ListOutcomeSettings3b868b6fb20b880597057217da1678e1Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings3b868b6fb20b880597057217da1678e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/{tenant}/outcome-settings'
*/
ListOutcomeSettings3b868b6fb20b880597057217da1678e1Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings3b868b6fb20b880597057217da1678e1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeSettings3b868b6fb20b880597057217da1678e1.form = ListOutcomeSettings3b868b6fb20b880597057217da1678e1Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
const ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'get',
})

ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url = (options?: RouteQueryOptions) => {
    return ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
const ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.form = ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86dForm

const ListOutcomeSettings = {
    '/admin/{tenant}/outcome-settings': ListOutcomeSettings3b868b6fb20b880597057217da1678e1,
    '/nds/super/outcome-settings': ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d,
}

export default ListOutcomeSettings