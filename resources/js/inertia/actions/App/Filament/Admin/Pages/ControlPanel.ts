import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
const ControlPanel = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ControlPanel.url(args, options),
    method: 'get',
})

ControlPanel.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/control-panel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
ControlPanel.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ControlPanel.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
ControlPanel.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ControlPanel.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
ControlPanel.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ControlPanel.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
const ControlPanelForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ControlPanel.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
ControlPanelForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ControlPanel.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\ControlPanel::__invoke
* @see app/Filament/Admin/Pages/ControlPanel.php:7
* @route '/admin/{tenant}/control-panel'
*/
ControlPanelForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ControlPanel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ControlPanel.form = ControlPanelForm

export default ControlPanel