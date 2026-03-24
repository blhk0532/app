import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
const InertiaCalendar = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: InertiaCalendar.url(args, options),
    method: 'get',
})

InertiaCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/bokning-kalender',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
InertiaCalendar.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return InertiaCalendar.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
InertiaCalendar.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: InertiaCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
InertiaCalendar.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: InertiaCalendar.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
const InertiaCalendarForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InertiaCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
InertiaCalendarForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InertiaCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\InertiaCalendar::__invoke
* @see app/Filament/App/Pages/InertiaCalendar.php:7
* @route '/nds/app/team/{tenant}/bokning-kalender'
*/
InertiaCalendarForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InertiaCalendar.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

InertiaCalendar.form = InertiaCalendarForm

export default InertiaCalendar